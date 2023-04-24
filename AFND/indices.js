const readline = require('readline');
// Símbolos
const saludo = RegExp("(HOLA|BUENAS|BUENOS|SALUDOS)");
// const maiz = RegExp("(HOLA|BUENAS|BUENOS|SALUDOS)");
// const saludo = RegExp("(HOLA|BUENAS|BUENOS|SALUDOS)");
const quien = RegExp("(QUIEN|QUIÉN|QUE|QUÉ)");
const eres = RegExp("(ERES)");
const como = RegExp("(COMO|CÓMO|EN QUE|EN QUÉ)");
const ayudar = RegExp("(AYUDAR)");
const llamas = RegExp("(LLAMAS|NOMBRE|DICEN)");
const cual = RegExp("(CUAL|CUÁL|CUALES|CUÁLES|QUE|QUÉ)");
const objetivo = RegExp("(OBJETIVO|OBJETIVOS|FUNCION|FUNCIÓN)");
const tareas = RegExp("(TAREA|TAREAS|HACES|HACER|FUNCIONES|ACTIVIDADES|DEDICAS)");
const chile = RegExp("(CHILE)");

const regExVariables = [
saludo,
quien,
eres,
como,
ayudar,
llamas,
cual,
objetivo,
tareas,
chile
]
const agricultura = RegExp("(AGRICULTURA|MAIZ|AGUA|TIERRA|REGAR|FRIJOL|MAÍZ|FRIJOLES)");
const agropecuario = RegExp("(AGROPECUARIO)");
const maiz = RegExp("(MAIZ|MAÍZ)");
const frijol = RegExp("(FRIJOL|FRIJOLES)");
const agua = RegExp("(AGUA|RIEGO|REGAR)");
const frecuencia = RegExp("(CADA CUANTO|FRECUENCIA)");
const fertilizante = RegExp("(FERTILIZANTE)");

const dominios = {
    '1': agricultura,
    '2': agropecuario,
}
const contextos = {
    '01': maiz,
    '02': frijol,
}
const temas = {
    '01': agua,
    '02': frecuencia,
    '03': fertilizante,
}

const messages = {
    '0': "No se arma, no tengo la respuesta",
    '10101': "Agricultura->Maíz->Agua",
    '10102': "Agricultura->Maíz->Frecuencia",
    '10103': "Agricultura->Maíz->Fertilizante",
    '10201': "Agricultura->Frijol->Agua",
    '10202': "Agricultura->Frijol->Frecuencia",
    '10203': "Agricultura->Frijol->Fertilizante"
}

let format = (isRegEx) => {
    return isRegEx ? "1" : "0";
};

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let textInput = ''
let messageIndex = ''
let k = 5
while (k > 0){
    // Prompt the user for input
    rl.question('Enter your name: ', (userInput) => {
    textInput = userInput.toLocaleUpperCase();
    indexes = calculateIndex(textInput);
    if (indexes.length != 0){
        for (let i = 0; i < indexes.length; i++){
            console.log(messages[Number(indexes[i])])
        }
    }
    else{
        console.log(messages[0])
    }
    // Close the readline interface
    rl.close();
    });
    k-=1
    console.log(k)
}
function calculateIndex(textInput) {
    // Loop through the array using a for loop
    for (let i = 0; i < regExVariables.length; i++) {
        messageIndex += format(regExVariables[i].test(textInput))
    }
    
    let answersArray = []
    let dominiosArray = []
    let contextosArray = []
    let temasArray = []

    for (let key in dominios) {
        let value = dominios[key]; // Obtén el valor de la propiedad actual
        if (value.test(textInput)){
            dominiosArray.push(key.toString())
        }
    }
    // console.log(dominiosArray)
    for (let key in contextos) {
        let value = contextos[key]; // Obtén el valor de la propiedad actual
        if (value.test(textInput)){
            contextosArray.push(key.toString())
        }
    }
    
    // console.log(contextosArray)
    for (let key in temas) {
        let value = temas[key]; // Obtén el valor de la propiedad actual
        if (value.test(textInput)){
            temasArray.push(key.toString())
        }
    } 
    // console.log(temasArray)
    
    for (const dominio of dominiosArray) {
        for (const contexto of contextosArray) {
            for (const tema of temasArray) {
                const combination = dominio + contexto + tema;

                answersArray.push(combination);
            }
        }
    }

    return answersArray;
}