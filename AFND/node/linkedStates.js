// const { agricultura, agropecuario, biotecnologia, maiz, frijol, agua, frecuencia, fertilizante, todo, bioseguridad, biofertilizante, suelo, transgénico, recursos } = require('./regex')
const { regExVariables } = require('./regex')

const [
    agricultura,
    biotecnologia,
    agropecuario,
    maiz,
    frijol,
    agua,
    frecuencia,
    fertilizante,
    todo,
    biodigestor,
    biorreactor,
    microbiologia,
    recombinante,
    oxigeno,
    t,
    p,
    flujo,
    medio_cultivo,
    plasmido,
    bacteria_levadura
] = regExVariables
// import {agricultura, agropecuario, maiz, frijol, agua, frecuencia, fertilizante} from './regex'; for html later

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

// Agregar información general a cada nivel

// Decirle al programa la fuente y que busque ai. Ya que es algo externo podríamos usar chatgpt (bing tal vez, habrá que probarlo si usar agún api que tenga o ir manual a las referencias)

// Revisar cómo funciona un transformer, en general de ai

// Probar cómo funciona el bert con textos con viñetas. En este caso es para el plásmido de varias bacterias o no sé qué, cada uno en una viñeta

// Si al principio no detecta ningún regEX, no entrar a dominio por suerte, mejor decir que no queda claro el dominio

// Detectar la imagen o poniendo las características y la herramientas sepa cuál es, identificacion de microorganismos. Dar opciones de varias que pueden ser

// Prueba, interpretar y ver qué microorganismo es, eso en la detección, como más específico. Lo de arriba reduce las pruebas necesarias a hacer

// Usar la trained_network 

// Mayor a 80% de cambio de dominio, preguntar si cambiar

const cultivos = ['Maíz', 'Frijol']

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

    '2': {
        'regex': biotecnologia,
        'contextos': {
            '03': biodigestor,
            '04': biorreactor,
            '05': microbiologia,
            '06': recombinante,
        },
        'temas': {
            '0': todo,
            '04': oxigeno,
            '05': t,
            '06': p,
            '07': flujo,
            '08': medio_cultivo,
            '09': plasmido,
            '10': bacteria_levadura,
        },
    }
}

module.exports = {
    json,
    // contextos,
    // temas,
    cultivos
};

// export {dominios, contextos, temas, cultivos}; for html later