const { dominios, contextos, temas } = require("./states");
const { messages } = require("./messages");
const readline = require('readline');
// import { dominios, contextos, temas } from "./states"; for html later
// import { messages } from "./messages"; for html later

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrays
let dominiosArray = []
let contextosArray = []
let temasArray = []
let answersArray = []
let newDominiosArray = []
let newContextosArray = []
let newTemasArray = []

async function askQuestion() {
    return new Promise((resolve) => {
        rl.question('¿Qué te gustaría saber?', (userInput) => {
            console.log('\n')
            resolve(userInput);
        });
    });
}

async function iterate() {
    let condition = true;
    while (condition) {
        const userInput = await askQuestion();
        const textInput = userInput.toLocaleUpperCase();
        const indexes = calculateIndex(textInput);

        for (let i = 0; i < indexes.length; i++) {
            console.log(messages[Number(indexes[i])]);
        }
        
        console.log('\n')
        // Update condition to exit loop if desired
        // condition = false;
    }
    rl.close();
}
iterate();

function calculateIndex(textInput) {
    answersArray = []
    newDominiosArray = []
    newContextosArray = []
    newTemasArray = []

    // Revisar las expresiones regulares para guardar los estados encontrados
    checkDominios(textInput);
    checkContextos(textInput);
    checkTemas(textInput);

    // Revisar casos especiales
    checkCases();
    
    answersArray = combineStates();
 
    return answersArray;
}

function checkDominios(textInput){
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
}

function checkContextos(textInput){
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
}

function checkTemas(textInput){
    for (let key in temas) {
        let value = temas[key];
        if (value.test(textInput)){
            if (key == '0'){
                newTemasArray = Object.keys(temas).slice(1);
                break
            }
            newTemasArray.push(key.toString())
        }
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
    if (dominiosArray.length == 0){
        return ['1']
    }
}

function combineStates(){
    for (const dominio of dominiosArray) {
        if (contextosArray.length == 0){
            return ['2']
        }
        for (const contexto of contextosArray) {
            for (const tema of temasArray) {
                const combination = dominio + contexto + tema;
                answersArray.push(combination);
            }
        }
    }


    if (answersArray.length == 0){
        return ['0']
    }
    return answersArray
}  