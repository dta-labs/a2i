const agricultura = RegExp("(AGRICULTURA)");
const agropecuario = RegExp("(AGROPECUARIO)");
const biotecnologia = RegExp("(BIOTECNOLOGIA|BIOTECNOLOGÍA)");
const maiz = RegExp("(MAIZ|MAÍZ)");
const frijol = RegExp("(FRIJOL|FRIJOLES)");
const agua = RegExp("(AGUA|RIEGO|REGAR)");
const frecuencia = RegExp("(CADA CUANTO|FRECUENCIA)");
const fertilizante = RegExp("(FERTILIZANTE)");
const todo = RegExp("(TODO)");
const bioseguridad = RegExp("(BIOSEGURIDAD)");
const biofertilizante = RegExp("(BIOFERTILIZANTE)");
const suelo = RegExp("(SUELOS|SUELO|PISO|TIERRA)");
const transgénico = RegExp("(TRANSGÉNICO|TRANSGÉNICOS|TRANSGENICO|TRANSGENICOS)");
const recursos = RegExp("(RECURSO|RECURSOS)");

// const agricultura = RegExp("(AGRICULTURA|MAIZ|AGUA|TIERRA|REGAR|FRIJOL|MAÍZ|FRIJOLES)");

const regExVariables = [
    agricultura,
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
    recursos,
]

module.exports = {
    regExVariables,
}

// export {agricultura, agropecuario, maiz, frijol, agua, frecuencia, fertilizante}; for html later