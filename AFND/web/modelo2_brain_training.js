// const tf = require('@tensorflow/tfjs-node');
const natural = require('natural');
const brain = require('brain.js');
const fs = require('fs');

function train(texto,indice){
  const expresionesRegulares = [];

  articulos = ['el', 'la', 'lo', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'e', 'ni', 'o', 'u', 'es', 'en', 'de', 'son']

  // const texto = 'La agricultura (del latín agri ‘campo’ y cultūra ‘cultivo’, ‘crianza’)1​2​ es el conjunto de actividades económicas y técnicas relacionadas con el tratamiento del suelo y el cultivo de la tierra para la producción de alimentos. Comprende todo un conjunto de acciones humanas que transforma el medio ambiente natural. \
  // Las acciones relacionadas son las que integran el llamado sector agrícola. Todas las actividades económicas que abarca dicho sector tienen su fundamento en la explotación de los recursos que la tierra origina, favorecida por la acción del ser humano: alimentos vegetales como cereales, frutas, hortalizas, pastos cultivados y forrajes; fibras utilizadas por la industria textil; cultivos energéticos etc. \
  // La agricultura3​ también incluye una demanda global del ramo y el servicio de la alimentación mundial depende en gran medida del clima y de las técnicas para poder hacer la tierra fértil, conserva su origen en la propiedad privada y en la explotación de la tierra entregada a familias para poder establecerse. Es una actividad de gran importancia estratégica como base fundamental para el desarrollo autosuficiente y dinero de las naciones. La ciencia que estudia la práctica de la agricultura es la agronomía. \
  // Comienzo de la agricultura \
  // Trilla de cereales en el antiguo Egipto. \
  // La agricultura comenzó una vez que las personas plantaron hierbas por sus semillas (o granos) en el Cercano Oriente, en Guangdong en China y en Latinoamérica; y tal vez plantaron verduras de raíz en Perú e Indonesia, también. El Creciente Fértil del sudoeste asiático, Egipto e India fueron los lugares donde se desarrollaron inicialmente la siembra y cosecha hidráulica de plantas que habían sido recogidas previamente en la naturaleza. El desarrollo independiente de la agricultura se produjo en el norte y sur de China, en el Sahel de África, en Nueva Guinea y en varias regiones de las Américas. Los ocho cultivos llamados fundadores del Neolítico de la agricultura, marcas de almidón en implementos de piedra que se encontraron en Nueva Guinea sugieren que el camote se ha cultivado ahí al menos desde hace 30 000 años; Las castañas de agua y los frijoles pudieron haber sido cultivados cerca de la Cueva del Espíritu, en Tailandia desde el año 11 000 a 7500 a. C. \
  // El desarrollo primigenio de la agricultura en el creciente fértil se suele fechar hace alrededor del 9500 a. C., tras la última glaciación y muy probablemente como consecuencia de ella. Las comunidades de cazadores-recolectores del Oriente Medio se sedentarizaron y empezaron a domesticar animales y plantas salvajes de los que ya se alimentaban con el objetivo de proveerse de una fuente estable de alimento sin tener que viajar en su busca. La revolución neolítica subsecuente conllevó enormes cambios en la forma de vida de los seres humanos y llevó finalmente a la aparición de la civilización" la revolución en las mismas áreas unos pocos milenios después. Alrededor del año 9000 a. C., algunas personas abandonaron el viejo modo de vida de cazar animales y recolectar frutos para establecerse y cultivar. Los expertos llaman a este gran cambio la "revolución neolítica". El farro y la cebada se cultivaron en el Cercano Oriente alrededor del año 8000 a. C.; borregos y cabras se domesticaron en este lugar poco después. \
  // En el año 7000 a. C., la naciente agricultura llegó a Egipto. Por lo menos desde 7000 a. C., en el subcontinente indio se cultivó trigo y cebada, como lo demuestran excavaciones arqueológicas en Mehrgarh en Baluchistán, en lo que hoy es Pakistán. \
  // En el año 6000 a. C., la agricultura campesina se atrincheró en las orillas del Nilo. Esto debido al poco desarrollo aún de las técnicas de riego. Durante este tiempo, la agricultura se desarrolló de forma independiente en el Lejano Oriente, con el arroz, en lugar de trigo, como cultivo principal. Los agricultores de China e Indonesia lograron domesticar el taro o papa china (Colocasia esculenta) y el frijol mung (Vigna radiata), la soja y el azuki (Vigna angularis). Como complemento a estas nuevas fuentes de hidratos de carbono, una red de pesca altamente organizada en los ríos, lagos y las costas del océano en estas áreas trajo consigo grandes volúmenes de proteínas esenciales. En conjunto, estos nuevos métodos agrícolas y de pesca originaron un auge de la población humana que empequeñeció todas las expansiones anteriores y que continúa en la actualidad. \
  // El arado jalado por bueyes se utilizó desde el 5000 a. C. Los chinos usaron arados de mano aun antes; En 5000 a. C., los sumerios habían desarrollado las principales técnicas agrícolas, incluyendo el cultivo intensivo de la tierra a gran escala, el monocultivo, técnicas de riego y el uso de mano de obra especializada, particularmente a lo largo de la vía acuática ahora conocida como el canal de Shatt al-Arab, del delta de Golfo Pérsico a la confluencia de los ríos Tigris y Éufrates. \
  // La domesticación de especies silvestres: uros y muflones en ganado vacuno y ovino, respectivamente, dio paso a la utilización a gran escala de animales para comida/fibra y como bestias de carga. El pastor se unió al agricultor como un proveedor esencial para las sociedades sedentarias y seminómadas. El maíz, la mandioca y el arrurruz fueron domesticadas por primera vez en el continente americano y se remontan al 5200 antes de Cristo (a. C.).';

  const textoUpper = texto.toUpperCase()
  const palabras = textoUpper.match(/\b\p{L}+\b/gu);
  const palabrasUnicas = new Set(palabras);
  articulos.forEach((articulo) => palabrasUnicas.delete(articulo.toUpperCase()))
  console.log(palabrasUnicas);
  // const texto = "\\b(AGRICULTURA)\\b";
  // const expresionRegular = new RegExp(texto, "i");
  // console.log(palabrasUnicas);
  palabrasUnicas.forEach((palabra) => {
    const expresion = new RegExp(`\\b(${palabra})\\b`, "i");
    expresionesRegulares.push(expresion);
  });

  // console.log(expresionesRegulares);
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

  // console.log(datosEntrenamiento);
  // console.log(datosEntrenamiento.length);
  // console.log(expresionesRegulares.length);



  // Preparación de los datos de entrada y salida
  const entradas = datosEntrenamiento.map((dato) => dato.etiquetas);
  const salidas = datosEntrenamiento.map((dato) => dato.clase);
  // console.log(entradas)
  console.log(salidas)
  // Convertir los datos de entrada y salida a tensores
  // const tensorEntradas = tf.tensor2d(entradas, [salidas.length, expresionesRegulares.length]);

  // Codificar las etiquetas de salida en una representación one-hot
  // const numClases = expresionesRegulares.length;
  // const tensorSalidasAjustado = tf.oneHot(salidas, datosEntrenamiento.length);


  const outputs = entradas.map((_, index) => {
      const output = Array(entradas.length).fill(0);
      output[index] = 1;
      return output;
    });

  const data = entradas.map((input, index) => {
      return {
        input: input,
        output: outputs[index]
      };
  });
    
  // console.log(data);

  const config = {
      hiddenLayers: [3],
      activation: 'sigmoid'
    };

  const modelo = new brain.NeuralNetwork(config);
  modelo.train(data);

  const modelJSON = modelo.toJSON();
  const expresionesRegularesStr = expresionesRegulares.map(expReg => expReg.toString());
  modelJSON['expresionesRegulares'] = expresionesRegularesStr;
  modelJSON['oracionClaseDict'] = oracionClaseDict;
  const modelData = JSON.stringify(modelJSON);
  let modelName = `${indice}TrainedModel.json`;
  fs.writeFileSync(modelName, modelData);
}

module.exports = {
  train,
};
