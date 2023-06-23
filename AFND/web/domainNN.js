// const brain = require('brain.js');
// const csv = require('csv-parser');
// const fs = require('fs');
// const { dominios, regExVariables } = require('./regex')

const data = [];
const config = {
    hiddenLayers: [3],
    activation: 'sigmoid'
  };

const rna = new brain.NeuralNetwork(config);

fetch('../web/regExDB.csv')
  .then(response => response.text())
  .then(csvData => {
    const data = [];
    const rows = csvData.split('\n');

    // Convertir el archivo CSV en una matriz bidimensional
    const csvArray = rows.map(row => row.split(','));

    // Obtener los encabezados de columna
    const headers = csvArray[0];
    headers[headers.length - 1] = headers[headers.length - 1][0]
    // console.log(headers);
    for (let i = 1; i < csvArray.length-1; i++) {
      const columns = csvArray[i];
      // console.log(columns)
      const input = [];
      const output = {};

      for (let key in dominios) {
        const columnIndex = headers.indexOf(key);
        const value = columns[columnIndex];
        output[key] = parseFloat(value[0]) || 0;
      }

      regExVariables.forEach(variable => {
        const expresionRegularComoString = variable.source;
        const primerPalabra = expresionRegularComoString.match(/\b(\w+)/)[1].toLowerCase();

        if (headers.includes(primerPalabra)) {
          const columnIndex = headers.indexOf(primerPalabra);
          const value = columns[columnIndex];
          input.push(parseFloat(value));
        } else {
          input.push(0);
        }
      });

      data.push({ input, output });
    }
    // console.log(data)
    // Continuar con el entrenamiento de la red neuronal
    trainNeuralNetwork(data);
  })
  .catch(error => {
    console.error('Error al cargar el archivo CSV:', error);
  });


function trainNeuralNetwork(data) {

  rna.train(data);
  console.log(data)

  // Save the trained network to a file for later use
  // const trainedNetwork = rna.toJSON();
  // fs.writeFileSync('trained_network.json', JSON.stringify(trainedNetwork));
  // console.log('Neural network trained and saved.');
}

// var rna = new brain.NeuralNetwork(config);

// rna.train(features,targets);

// rna.train([
//     // {input: [1,1,1,1,1,1,1,1], output: {wather: 1}},
    
//     {input: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},

//     {input: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 0, '2': 1}},
//     {input: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], output: {'1': 0, '2': 1}},
//     {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], output: {'1': 0, '2': 1}},
//     {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], output: {'1': 0, '2': 1}},
//     {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], output: {'1': 0, '2': 1}},
//     {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], output: {'1': 0, '2': 1}},
//     {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], output: {'1': 0, '2': 1}},
//     {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], output: {'1': 0, '2': 1}},

//     {input: [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0], output: {'1': 1, '2': 0}},
//     {input: [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0], output: {'1': 1, '2': 0}},

//     {input: [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], output: {'1': 0, '2': 1}},
//     {input: [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], output: {'1': 0, '2': 1}},
//     {input: [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0], output: {'1': 0, '2': 1}},
//     {input: [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], output: {'1': 0, '2': 1}},
//     {input: [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1], output: {'1': 0, '2': 1}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 0, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 1, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 1, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 1, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 1, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 1, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 1, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 1, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},

//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 1, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 1, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 1}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 1}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 1, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 1, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 1, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 1}, output: {agricultura: 0, biotecnologia: 1}},

//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 1, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},

//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
//     // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 1}, output: {agricultura: 0, biotecnologia: 1}},
// ]);

// runRNA([
    // 0, 0, 0, 1, 1, 1,
    // 1, 1, 0, 0, 0, 0,
    // 0, 0
//   ])
// runRNA([1,1,1,1,1,1,1,1])

function runRNA(entrada) {
    let resultado = rna.run(entrada);
    console.log(entrada,resultado);
    // showResult(entrada, resultado);
}

// module.exports = { rna };