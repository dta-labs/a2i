const fs = require('fs');
const readline = require('readline');
const brain = require('brain.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
// Predicción
function predict(preguntas,indice){
    // const preguntas = [
    //     "¿Cuál es la definición de agricultura?",
    //     "¿En qué lugares se desarrolló inicialmente la siembra y cosecha hidráulica de plantas?",
    //     "¿Cuándo se produjo la revolución neolítica y qué cambios conllevó?",
    //     "¿Qué cultivos se cultivaron en el Cercano Oriente alrededor del año 8000 a. C.?",
    //     "¿Cuándo se utilizó por primera vez el arado jalado por bueyes y qué técnicas agrícolas desarrollaron los sumerios?"
    //     ];
        
        // Load the saved model
    let modelName = `${indice}TrainedModel.json`;
    const modelData = fs.readFileSync(modelName);
    const modelJSON = JSON.parse(modelData);
    const expresionesRegulares = modelJSON.expresionesRegulares.map(str => new RegExp(str));
    const oracionClaseDict = modelJSON.oracionClaseDict;
    // const modelo = brain.NeuralNetwork.fromJSON(modelJSON);

    const modelo = new brain.NeuralNetwork();
    modelo.fromJSON(modelJSON);

    for (pregunta of preguntas){
        const preguntaTokenizada = pregunta;
        
        // Convertir la pregunta tokenizada en un objeto con las propiedades de entrada requeridas
        const entradaPregunta = expresionesRegulares.map((expReg) => {
            // console.log(expReg.expresion);
            // console.log(preguntaTokenizada);
            wea = Number(RegExp(expReg.expresion).test(preguntaTokenizada))
            // console.log(wea);
            return wea
        });
        
        console.log(entradaPregunta)
        
        // Hacer la predicción utilizando el modelo
        const predicciones = modelo.run(entradaPregunta);
        console.log(predicciones, "pred")
        
        const k = 5; // Obtener las 2 clases más probables
        // const prediccionesTensor = predicciones.dataSync();
        const topKIndices = findTopKIndices(predicciones, k);
        // Función para encontrar los índices de las clases más probables
        function findTopKIndices(array, k) {
            const indices = [];
            for (let i = 0; i < array.length; i++) {
            indices.push(i);
            }
            indices.sort((a, b) => array[b] - array[a]);
            return indices.slice(0, k);
        }
        
        // Obtener las clases más probables
        const clasesProbables = topKIndices.map((indice) => indice);
        
        // Obtener las oraciones más probables basadas en las clases obtenidas
        const oracionesProbables = clasesProbables.map((clase) => oracionClaseDict[clase]);
        console.log('\nPregunta:', pregunta, '\n');
        
        // Imprimir las oraciones más probables
        console.log('Oraciones más probables:\n');
        // oracionesProbables.forEach((oracion) => {
        //   console.log(oracion);
        // });
        // console.log(oracionClaseDict);
        
        let currentIndex = 0;
        console.log(oracionesProbables[currentIndex]);
        currentIndex++;
        
        rl.on('line', () => {
            if (currentIndex < oracionesProbables.length) {
            console.log(oracionesProbables[currentIndex]);
            console.log(pregunta);
            currentIndex++;
            } else {
            console.log('---Ya no hay más información al respecto---');
            rl.close();
            }
        });
        };
}

module.exports = {
    predict
  };
  