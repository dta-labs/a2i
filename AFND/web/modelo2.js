const tf = require('@tensorflow/tfjs-node');
const natural = require('natural');

// Expresiones regulares detectadas desde la pregunta del usuario
const expresionesRegulares = [
//   { expresion: /\b(AGRICULTURA)\b/i, encontrado: 0 },
//   { expresion: /\b(AGROPECUARIO)\b/i, encontrado: 0 },
//   { expresion: /\b(BIOTECNOLOGIA|BIOTECNOLOGÍA)\b/i, encontrado: 0 },
//   { expresion: /\b(MAIZ|MAÍZ)\b/i, encontrado: 0 },
//   { expresion: /\b(FRIJOL|FRIJOLES)\b/i, encontrado: 0 },
//   { expresion: /\b(AGUA|RIEGO|REGAR|H2O)\b/i, encontrado: 0 },
//   { expresion: /\b(FRECUENCIA|CADA CUANTO|CADA CUÁNTO)\b/i, encontrado: 0 },
//   { expresion: /\b(FERTILIZANTE|FERTILIZANTES)\b/i, encontrado: 0 },
//   { expresion: /\b(TODO|TODOS)\b/i, encontrado: 0 },
//   { expresion: /\b(BIODIGESTOR|BOIDIGESTORES)\b/i, encontrado: 0 },
//   { expresion: /\b(BIORREACTOR|BIORREACTORES)\b/i, encontrado: 0 },
//   { expresion: /\b(MICROBIOLOGIA|MICROBIOLOGÍA)\b/i, encontrado: 0 },
//   { expresion: /\b(RECOMBINANTE|RECOMBINANTES)\b/i, encontrado: 0 },
//   { expresion: /\b(OXIGENO|OXÍGENO)\b/i, encontrado: 0 },
//   { expresion: /\b(T)\b/i, encontrado: 0 },
//   { expresion: /\b(P)\b/i, encontrado: 0 },
//   { expresion: /\b(FLUJO|FLUJOS)\b/i, encontrado: 0 },
//   { expresion: /\b(MEDIO_CULTIVO|MEDIO|CULTIVO|MEDIO DE CULTIVO)\b/i, encontrado: 0 },
//   { expresion: /\b(PLASMIDO|PLÁSMIDO|PLASMIDOS|PLÁSMIDOS)\b/i, encontrado: 0 },
//   { expresion: /\b(BACTERIA_LEVADURA|BACTERIA|BACTERIAS|LEVADURA|LEVADURAS)\b/i, encontrado: 0 },
//   { expresion: /\b(ACTIVIDAD)\b/i, encontrado: 0 },
//   { expresion: /\b(FUNDAMENTAL)\b/i, encontrado: 0 }
];

articulos = ['el', 'la', 'lo', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'e', 'ni', 'o', 'u', 'es', 'en', 'de', 'son']
// Texto de ejemplo con oraciones o párrafos
const texto = 'La agricultura es una actividad fundamental en la producción de alimentos. \
El agropecuario combina la agricultura con la cría de animales. \
La biotecnología tiene aplicaciones en diversos campos, incluyendo la agricultura. \
El maíz y los frijoles son 23 cultivos tradicionales en muchas regiones.';

const textoUpper = texto.toUpperCase()
const palabras = textoUpper.match(/\b\p{L}+\b/gu);
const palabrasUnicas = new Set(palabras);
articulos.forEach((articulo) => palabrasUnicas.delete(articulo.toUpperCase()))
console.log(palabrasUnicas);
// const texto = "\\b(AGRICULTURA)\\b";
// const expresionRegular = new RegExp(texto, "i");
// console.log(palabrasUnicas);
palabrasUnicas.forEach((palabra) => {
  const expresion = {
    expresion: new RegExp(`\\b(${palabra})\\b`, "i"),
  };
  expresionesRegulares.push(expresion);
});

console.log(expresionesRegulares);
// Tokenizar el texto en oraciones o párrafos
const tokenizer = new natural.SentenceTokenizer();
const oraciones = tokenizer.tokenize(texto);
console.log(oraciones);

// Preprocesamiento de datos
const datosEntrenamiento = oraciones.map((oracion) => {
  const etiquetas = expresionesRegulares.map((expReg) => Number(oracion.match(expReg.expresion) !== null));
  return {
    texto: oracion,
    etiquetas
  };
});

// console.log(datosEntrenamiento);

const oracionClaseDict = {};

datosEntrenamiento.forEach((oracion, index) => {
  const numeroClase = index; // Asignar un número de clase basado en el índice
  oracionClaseDict[numeroClase] = oracion.texto; // Agregar la oración original al diccionario
  oracion.clase = numeroClase; // Asignar el número de clase a la propiedad "clase" de la oración
});

console.log(datosEntrenamiento);
// console.log(datosEntrenamiento.length);
// console.log(expresionesRegulares.length);

// Construcción del modelo
const modelo = tf.sequential();
modelo.add(tf.layers.embedding({ inputDim: expresionesRegulares.length, outputDim: datosEntrenamiento.length, inputLength: expresionesRegulares.length }));
modelo.add(tf.layers.flatten());
modelo.add(tf.layers.dense({ units: 32, activation: 'relu' }));
modelo.add(tf.layers.dense({ units: datosEntrenamiento.length, activation: 'sigmoid' }));

// Compilación del modelo
modelo.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy' });

// Preparación de los datos de entrada y salida
const entradas = datosEntrenamiento.map((dato) => dato.etiquetas);
const salidas = datosEntrenamiento.map((dato) => dato.clase);
console.log(entradas)
console.log(salidas)
// Convertir los datos de entrada y salida a tensores
const tensorEntradas = tf.tensor2d(entradas, [salidas.length, expresionesRegulares.length]);
// const tensorSalidas = tf.tensor2d(salidas, [salidas.length, 1],'int32');
// const tensorSalidas = tf.tensor1d(salidas, 'int32');
// // const tensorSalidasAjustado = tf.oneHot(tensorSalidas, datosEntrenamiento.length);
// // Adjust the shape of the target tensor
// const tensorSalidasAjustado = tf.squeeze(tensorSalidas);

// console.log(tensorEntradas.shape)
// console.log(tensorSalidas.shape)
// console.log(tensorSalidasAjustado.shape)



// Codificar las etiquetas de salida en una representación one-hot
const numClases = expresionesRegulares.length;
const tensorSalidasAjustado = tf.oneHot(salidas, datosEntrenamiento.length);

// console.log(tensorSalidasAjustado)
// Entrenamiento del modelo
const epocas = 100;

modelo.fit(tensorEntradas, tensorSalidasAjustado, { epochs: epocas,  verbose: 0});
// modelo.fit(tensorEntradas, tensorSalidasAjustado);



// Predicción
const pregunta = '¿Qué actividad fundamental de agricultura?';
const preguntaTokenizada = pregunta;

// Convertir la pregunta tokenizada en un objeto con las propiedades de entrada requeridas
// const entradaPregunta = expresionesRegulares.map((expReg) => Number(preguntaTokenizada.some((token) => token.match(expReg.expresion))));
const entradaPregunta = expresionesRegulares.map((expReg) => {
  // console.log(expReg.expresion);
  // console.log(preguntaTokenizada);
  wea = Number(RegExp(expReg.expresion).test(preguntaTokenizada))
  // console.log(wea);
  return wea
});

console.log(entradaPregunta)

const tensorEntradaPregunta = tf.tensor2d(entradaPregunta, [1, expresionesRegulares.length]);

// Hacer la predicción utilizando el modelo
const predicciones = modelo.predict(tensorEntradaPregunta);
// console.log("his")

const k = 1; // Obtener las 2 clases más probables
const prediccionesTensor = predicciones.dataSync();
const topKIndices = findTopKIndices(prediccionesTensor, k);
console.log(predicciones.dataSync());
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
oracionesProbables.forEach((oracion) => {
  console.log(oracion);
});
console.log(oracionClaseDict);

