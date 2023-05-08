const readline = require('readline');
const { dominios, json } = require("./linkedStates");
const { answers } = require("./answers");
const { regExVariables } = require("./regex");
const { text } = require('stream/consumers');
const { rna } = require('./domainNN')
// import { dominios, contextos, temas } from "./states"; for html later
// import { answers } from "./answers"; for html later

// Arrays
// Estos arrays funcionan como la "memoria" del programa
let dominiosArray = []
let contextosArray = []
let temasArray = []

// Estos arrays se crean en cada iteración y se guardan en los arrays de arriba de ser necesario
let answersArray = []
let newDominiosArray = []
let newContextosArray = []
let newTemasArray = []


function getAnswers(textInput, binaryRegEx) {
    answersArray = []
    newDominiosArray = []
    newContextosArray = []
    newTemasArray = []
    
    // Revisar las expresiones regulares para guardar los estados encontrados
    checkDominios(binaryRegEx);
    dominio = dominiosArray[0]
    checkContextos(textInput, dominio);
    checkTemas(textInput, dominio);
    
    // Revisar casos especiales
    checkCases();
    
    answersArray = combineStates();
    
    return answersArray;
}

let format = (isRegEx) => {
    return isRegEx ? 1 : 0;
};

function getBinaryRegEx(textInput){
    binaryRegEx = []

    // Loop through the array using a for loop
    // console.log(regExVariables.length)
    for (let i = 0; i < regExVariables.length; i++) {
        binaryRegEx.push(format(regExVariables[i].test(textInput)))
    }

    return binaryRegEx
}

function checkDominios(binaryRegEx){

    if (dominiosArray.length == 0){
        dominiosArray.push(runRNA(binaryRegEx))
    }

    // // Si se recibieron nuevas entradas utilizarlas, de no ser así, se utilizan los guardados anteriormente
    // if (newDominiosArray.length != 0){
    //     dominiosArray = newDominiosArray
    // }
    // console.log(dominiosArray)
}
function checkDominios_Old(textInput){
    for (let key in dominios) {
        let value = dominios[key];
        if (value.test(textInput)){
            newDominiosArray.push(key.toString())
        }
    }
    // Si se recibieron nuevas entradas utilizarlas, de no ser así, se utilizan los guardados anteriormente
    if (newDominiosArray.length != 0){
        dominiosArray = newDominiosArray
    }
    console.log(dominiosArray)
}

function checkContextos(textInput, dominio){
    contextos = json[dominio]['contextos']
    console.log(contextos)
    for (let key in contextos) {
        let value = contextos[key];
        if (value.test(textInput)){
            newContextosArray.push(key.toString())
        }
    }
    // Si se recibieron nuevas entradas utilizarlas, de no ser así, se utilizan los guardados anteriormente
    if (newContextosArray.length != 0){
        contextosArray = newContextosArray
    }
    // console.log(contextosArray)
}

function checkTemas(textInput, dominio){
    temas = json[dominio]['temas']
    for (let key in temas) {
        let value = temas[key];
        if (value.test(textInput)){
            if (key == '0'){
                newTemasArray = Object.keys(temas).slice(1);
                break
            }
            newTemasArray.push(key.toString())
        }
        // console.log(temasArray)
    }
    // Si se recibieron nuevas entradas utilizarlas, de no ser así, se utilizan los guardados anteriormente
    if (newTemasArray.length != 0){
        temasArray = newTemasArray
    }
}

function checkCases(){
    // De no incluir temas, poner todos
    if (temasArray.length == 0){
        temasArray = Object.keys(temas).slice(1)
    }
    
    // De no incluir dominios, default agricultura
    // if (dominiosArray.length == 0){
    //     dominiosArray = ['1']
    // }
}

function combineStates(){
    for (const dominio of dominiosArray) {
        if (contextosArray.length == 0){
            return [dominiosArray[0]]
        }
        for (const contexto of contextosArray) {
            for (const tema of temasArray) {
                const combination = dominio + contexto + tema;
                answersArray.push(combination);
            }
        }
    }
    
    // No hay respuesta
    if (answersArray.length == 0){
        return ['0']
    }
    
    return answersArray
} 

async function askQuestion() {
    return new Promise((resolve) => {
        readLineInterface.question('¿Qué te gustaría saber? ', (userInput) => {
            console.log('\n')
            resolve(userInput);
        });
    });
}

async function iterate() {
    let condition = true;
    while (condition) {
        let areThereAnswers = false;
        const userInput = await askQuestion();
        const textInput = userInput.toLocaleUpperCase();
        const binaryRegEx = getBinaryRegEx(textInput);
        const answersIndexes = getAnswers(textInput, binaryRegEx);

        console.log(answersIndexes, "what")
        
        for (let i = 0; i < answersIndexes.length; i++) {
            if (answers[Number(answersIndexes[i])] != undefined){
                console.log(answers[Number(answersIndexes[i])]);
                areThereAnswers = true;
            }
            if (!areThereAnswers){
                console.log(answers['0'])
            }
        }
        
        console.log('\n')
        // Update condition to exit loop if desired
        // condition = false;
    }
    readLineInterface.close();
}

// Create an interface for reading input
const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runRNA(entrada) {
        let resultado = rna.run(entrada);
        key = getMaxProbabilityKey(resultado)
        console.log(entrada,resultado, key);
        return key
        // showResult(entrada, resultado);
    }

// Encontrar la clave con la mayor probabilidad
function getMaxProbabilityKey(output){
    let maxProb = 0;
    let maxKey;
    for (let key in output) {
      if (output[key] > maxProb) {
        maxProb = output[key];
        maxKey = key;
      }
    }
    return maxKey
}

iterate();