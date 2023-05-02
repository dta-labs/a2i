const agricultura = RegExp("(AGRICULTURA)");
const agropecuario = RegExp("(AGROPECUARIO)");
const maiz = RegExp("(MAIZ|MAÍZ)");
const frijol = RegExp("(FRIJOL|FRIJOLES)");
const agua = RegExp("(AGUA|RIEGO|REGAR)");
const frecuencia = RegExp("(CADA CUANTO|FRECUENCIA)");
const fertilizante = RegExp("(FERTILIZANTE)");
const todo = RegExp("(TODO)");
// const agricultura = RegExp("(AGRICULTURA|MAIZ|AGUA|TIERRA|REGAR|FRIJOL|MAÍZ|FRIJOLES)");

const regExVariables = [
    agricultura,
    agropecuario,
    maiz,
    frijol,
    agua,
    frecuencia,
    fertilizante,
    todo,
]

module.exports = {
    regExVariables,
    agricultura,
    agropecuario,
    maiz,
    frijol,
    agua,
    frecuencia,
    fertilizante,
    todo
}

// export {agricultura, agropecuario, maiz, frijol, agua, frecuencia, fertilizante}; for html later