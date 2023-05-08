// const { agricultura, agropecuario, biotecnologia, maiz, frijol, agua, frecuencia, fertilizante, todo, bioseguridad, biofertilizante, suelo, transgénico, recursos } = require('./regex')
const { regExVariables } = require('./regex')

const [agricultura,
agropecuario,
biotecnologia,
maiz,
frijol,
agua,
frecuencia,
fertilizante,
todo,
bioseguridad,
biofertilizante,
suelo,
transgénico,
recursos] = regExVariables
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
// agriculturajson = {regex:agricultura, contextos:contextosAgricultura, temas: temasAgricultura}

// Guardar dominio

// Ver cómo guardar las referencias a cada info del tema o a cada tema solamente.

// Hacer un hiper json mil millones challenger:
// json = {
//     "id": "10101", // Por ejemplo, eso correspondería a agricultura->maíz->agua
//     "text": "",
//     "ref": "www.verOnePiece.com",
//     "version": 1.0
// }


// Usar como máscara el array binario para no tener que hacer 2 veces los regex. Aunque igual sería recorrer jsons o arrays, pero no regEx, evaluar mejor posibilidad

// Si no tiene respuesta, poner una parecida por probabilidad de que se parezca más

// Cambiar los Jsons para en vez de haber tantos separados, hacer uno gigante, creo que es mejor.

// RegEx para cosas de "ahora hablemos de" o cosas así para cambiar de dominio. (Si tiene esos regex y aparte la NN dice que es de otro dominio, cambiamos (a ver qué tal))

// 



const cultivos = ['Maíz', 'Frijol']

const contextosAgricultura = {
    '01': maiz,
    '02': frijol,
}

const temasAgricultura = {
    '0': todo,
    '01': agua,
    '02': frecuencia,
    '03': fertilizante,
}

const contextosBiotecnologia = {
    '03': suelo,
    '04': recursos,
}

const temasBiotecnologia = {
    // '0': todo,
    '04': bioseguridad,
    '05': biofertilizante,
    '06': transgénico,
}

const agriculturaJson = {'regex':agricultura, 'contextos':contextosAgricultura, 'temas': temasAgricultura, canNavegate: 1}
const biotecnologiaJson = {'regex':biotecnologia, 'contextos':contextosBiotecnologia, 'temas': temasBiotecnologia, canNavegate: 0}

const dominios = {
    '1': agriculturaJson, // arroz con pollo
    // '2': agua, // Mayor interés que hay actualmente, atrae inversión
    '3': biotecnologiaJson, // Apoyo del tec le serviria mas en esta carrera
    // '4': agropecuario, // Casi todos tienen pecuaria
}

const json = {
    '1': {
        'regex': agricultura,
        'contextos': {
            '01': maiz,
            '02': frijol,
        },
        'temas': {
            '0': todo,
            '01': agua,
            '02': frecuencia,
            '03': fertilizante,
        },
    },

    '3': {
        'regex': biotecnologia,
        'contextos': {
            '03': suelo,
            '04': recursos,
        },
        'temas': {
            // '0': todo,
            '04': bioseguridad,
            '05': biofertilizante,
            '06': transgénico,
        },
    }
}

module.exports = {
    dominios,
    json,
    // contextos,
    // temas,
    cultivos
};

// export {dominios, contextos, temas, cultivos}; for html later