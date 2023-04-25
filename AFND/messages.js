const { cultivos } = require('./states')
// import { cultivos } from "./states"; for html later

const messages = {
    '0': "No se arma, no tengo la respuesta",
    '1': "No me queda claro si buscas respuestas de agricultura u otro dominio",
    '2': `¿De cuál cultivo te gustaría conocer esa información? \n Tengo información de:\n${cultivos.map(num => "- " + num).join("\n")}`,
    '10101': "Agricultura->Maíz->Agua",
    '10102': "Agricultura->Maíz->Frecuencia",
    '10103': "Agricultura->Maíz->Fertilizante",
    '10201': "Agricultura->Frijol->Agua",
    '10202': "Agricultura->Frijol->Frecuencia",
    '10203': "Agricultura->Frijol->Fertilizante"
}

module.exports = { messages }