const { agricultura, agropecuario, maiz, frijol, agua, frecuencia, fertilizante, todo } = require('./regex')
// import {agricultura, agropecuario, maiz, frijol, agua, frecuencia, fertilizante} from './regex'; for html later

const dominios = {
    '1': agricultura,
    '2': agropecuario,
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