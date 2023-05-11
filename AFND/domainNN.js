const brain = require('brain.js');

const config = {
    hiddenLayers: [3],
    activation: 'sigmoid'
  };
var rna = new brain.NeuralNetwork(config);

rna.train([
    // {input: [1,1,1,1,1,1,1,1], output: {wather: 1}},
    
    {input: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},

    {input: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 0, '2': 1}},
    {input: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], output: {'1': 0, '2': 1}},
    {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], output: {'1': 0, '2': 1}},
    {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], output: {'1': 0, '2': 1}},
    {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], output: {'1': 0, '2': 1}},
    {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], output: {'1': 0, '2': 1}},
    {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], output: {'1': 0, '2': 1}},
    {input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], output: {'1': 0, '2': 1}},

    {input: [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0], output: {'1': 1, '2': 0}},
    {input: [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0], output: {'1': 1, '2': 0}},
    {input: [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0], output: {'1': 1, '2': 0}},

    {input: [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], output: {'1': 0, '2': 1}},
    {input: [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], output: {'1': 0, '2': 1}},
    {input: [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0], output: {'1': 0, '2': 1}},
    {input: [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], output: {'1': 0, '2': 1}},
    {input: [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1], output: {'1': 0, '2': 1}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 0, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 1, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 1, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 1, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 1, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 1, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 1, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 1, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},

    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 1, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 1, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 1}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 1}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 1, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 1, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 1, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 0, agropecuario: 0, biotecnologia: 0, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 1}, output: {agricultura: 0, biotecnologia: 1}},

    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 0, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 0, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 1, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 0}, output: {agricultura: 1, biotecnologia: 0}},

    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 0, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 0, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 0, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 0, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 0, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 0, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 0, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 0}, output: {agricultura: 0, biotecnologia: 1}},
    // {input: {agricultura: 1, agropecuario: 0, biotecnologia: 1, maiz: 1, frijol: 1, agua: 1, frecuencia: 1, fertilizante: 0, todo: 0, bioseguridad: 1, biofertilizante: 1, suelo: 1, transgénico: 1, recursos: 1}, output: {agricultura: 0, biotecnologia: 1}},
]);

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

module.exports = { rna };