const { cultivos } = require('./states')
// import { cultivos } from "./states"; for html later

const answers = {
    '0': "No se arma, no tengo la respuesta",
    '1': "No me queda claro si buscas respuestas de agricultura u otro dominio",
    '2': `¿De cuál cultivo te gustaría conocer esa información? \n Tengo información de:\n${cultivos.map(num => "- " + num).join("\n")}`,
    '3': `¿De qué cosa te gustaría conocer esa información? \n Tengo información de: Suelo y Recursos`,
    '10101': "Agricultura->Maíz->Agua",
    '10102': "Agricultura->Maíz->Frecuencia",
    '10103': "Agricultura->Maíz->Fertilizante",
    '10201': "Agricultura->Frijol->Agua",
    '10202': "Agricultura->Frijol->Frecuencia",
    '10203': "Agricultura->Frijol->Fertilizante",
    '30304': "Biotecnología->Suelo->Bioseguridad",
    '30305': "Biotecnología->Suelo->Biofertilizante",
    '30306': "Biotecnología->Suelo->Transgénico",
    '30404': "Biotecnología->Recursos->Bioseguridad",
    '30405': "Biotecnología->Recursos->Biofertilizante",
    '30406': "Biotecnología->Recursos->Transgénico"
    
    // '10101': "La cantidad de agua al regar el maíz varía según las condiciones del suelo, clima y etapa de crecimiento. En general, se recomienda proporcionar al menos 1 pulgada (2.5 cm) de agua por semana durante la etapa de crecimiento activo del maíz.\n",
    // '10102': "La frecuencia de riego del maíz depende del clima y la retención de agua del suelo. En general, se sugiere regar el maíz cuando la capa superior del suelo esté seca a unos 2-3 pulgadas (5-7.5 cm) de profundidad, evitando que el suelo se seque completamente.\n",
    // '10103': "El maíz requiere nutrientes como nitrógeno, fósforo y potasio para un crecimiento saludable. Es común aplicar fertilizantes de liberación lenta o de liberación rápida durante la siembra y después de la emergencia del maíz. Se debe seguir las recomendaciones de un análisis del suelo para determinar la cantidad y tipo de fertilizante adecuado para el maíz.\n",
    // '10201': "La cantidad de agua necesaria para regar el frijol depende del clima y del tipo de suelo. En general, se recomienda mantener el suelo húmedo pero no encharcado. Se debe evitar que el suelo se seque por completo durante el crecimiento activo del frijol.\n",
    // '10202': "La frecuencia de riego del frijol depende del clima, la retención de agua del suelo y la etapa de crecimiento del cultivo. En general, se sugiere regar el frijol cuando la capa superior del suelo esté seca a unos 1-2 pulgadas (2.5-5 cm) de profundidad, evitando el exceso de agua que pueda causar encharcamiento.\n",
    // '10203': "El frijol necesita nutrientes como nitrógeno, fósforo y potasio para un buen desarrollo. Se recomienda aplicar fertilizantes equilibrados durante la siembra y después de la emergencia del frijol, siguiendo las recomendaciones de un análisis del suelo para determinar la cantidad y tipo de fertilizante adecuado para el cultivo.\n"
}

module.exports = { answers }