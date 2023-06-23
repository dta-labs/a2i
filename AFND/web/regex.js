const agricultura = RegExp("(AGRICULTURA)");
const agropecuario = RegExp("(AGROPECUARIO)");
const biotecnologia = RegExp("(BIOTECNOLOGIA|BIOTECNOLOGÍA)");
const maiz = RegExp("(MAIZ|MAÍZ)");
const frijol = RegExp("(FRIJOL|FRIJOLES)");
const agua = RegExp("(AGUA|RIEGO|REGAR|H2O)");
const frecuencia = RegExp("(FRECUENCIA|CADA CUANTO|CADA CUÁNTO)");
const fertilizante = RegExp("(FERTILIZANTE|FERTILIZANTES)");
const todo = RegExp("(TODO|TODOS)");
const biodigestor = RegExp("(BIODIGESTOR|BOIDIGESTORES)");
const biorreactor = RegExp("(BIORREACTOR|BIORREACTORES)");
const microbiologia = RegExp("(MICROBIOLOGIA|MICROBIOLOGÍA)");
const recombinante = RegExp("(RECOMBINANTE|RECOMBINANTES)");
const oxigeno = RegExp("(OXIGENO|OXÍGENO)");
const t = RegExp("(T)");
const p = RegExp("(P)");
const flujo = RegExp("(FLUJO|FLUJOS)");
const medio_cultivo = RegExp("(MEDIO_CULTIVO|MEDIO|CULTIVO|MEDIO DE CULTIVO)");
const plasmido = RegExp("(PLASMIDO|PLÁSMIDO|PLASMIDOS|PLÁSMIDOS)");
const bacteria_levadura = RegExp("(BACTERIA_LEVADURA|BACTERIA|BACTERIAS|LEVADURA|LEVADURAS)");

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
]

const dominios = {
    '1': agricultura,
    '2': biotecnologia,
    // '3': agropecuario,
}

// module.exports = {
//     regExVariables,
//     dominios
// }

// export {agricultura, agropecuario, maiz, frijol, agua, frecuencia, fertilizante}; for html later