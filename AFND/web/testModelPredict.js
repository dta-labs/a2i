const prediction = require('./modelo2_brain_predict');

const preguntas = [
  "¿Cuál es la definición de agricultura?",
  "¿En qué lugares se desarrolló inicialmente la siembra y cosecha hidráulica de plantas?",
  "¿Cuándo se produjo la revolución neolítica y qué cambios conllevó?",
  "¿Qué cultivos se cultivaron en el Cercano Oriente alrededor del año 8000 a. C.?",
  "¿Cuándo se utilizó por primera vez el arado jalado por bueyes y qué técnicas agrícolas desarrollaron los sumerios?"
];

const indice = 123; // Replace with the desired value

prediction.predict(preguntas, indice);