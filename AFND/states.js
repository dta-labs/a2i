const { agricultura, agropecuario, maiz, frijol, agua, frecuencia, fertilizante, todo } = require('./regex')
// import {agricultura, agropecuario, maiz, frijol, agua, frecuencia, fertilizante} from './regex'; for html later

// Poner de nuevo lo del binario
// revisar si se puede navegar entre contextos y o temas, entonces por dominio podría tener un boolean de "se puede navegar?".
// Otra cosa para esto también sería ligar todo, que cada dominio ligado a sus contextos, cada contexto a sus temas.

// Mensajes como de "No conozco el dominio"

// Primero hacer lo de la red para determinar en qué dominio. Separar contextos y estados por dominio
// Por ejemplo: 
// const dominios = {
// Opción 1:
//     '1': [agricultura, contextosAgricultura, temasAgricultura]
// Opción 2
//     '1': agriculturaArreglo
// agriculturaArreglo = [agricultura, contextosAgricultura, temasAgricultura]
// Opción 3
//     '1': agriculturaJson
// agriculturajson = {regex:agricultura, contextos:contextosAgricultura, temas: temasAgricultura]

// Guardar dominio

// Ver cómo guardar las referencias a cada info del tema o a cada tema solamente.

// Hacer un hiper json mil millones challenger:
// json = {
//     "id": "010101", // Por ejemplo, eso correspondería a agricultura->maíz->agua
//     "text": "",
//     "ref": "www.verOnePiece.com",
//     "version": 1.0
// }
const dominios = {
    '1': agricultura, // arroz con pollo
    // '2': agua, // Mayor interés que hay actualmente, atrae inversión
    // '3': agropecuario, // Casi todos tienen pecuaria
    // '4': biotecnologia, // Apoyo del tec le serviria mas en esta carrera
}

const contextos = {
    '01': maiz,
    '02': frijol,
}

const cultivos = ['Maíz', 'Frijol']

const temas = {
    '0': todo,
    '01': agua,
    '02': frecuencia,
    '03': fertilizante,
}

module.exports = {
    dominios,
    contextos,
    temas,
    cultivos,
};

// export {dominios, contextos, temas, cultivos}; for html later