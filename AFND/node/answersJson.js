const { cultivos } = require('./states')


answersJson2 = {
    "defaults": {

    }
}

answersJson = {
    "0": {
        "clave": "No respuesta",
        "text": "No se arma, no tengo la respuesta"
    },

    "0.1": {
        "clave": "No queda claro el dominio",
        "text": "No me queda claro si buscas respuestas de Agricultura u otro dominio"
    },

    "1": {
        "clave": "Agricultura",
        "text": `¿De cuál cultivo te gustaría conocer esa información? \n Tengo información de:\n${cultivos.map(num => "- " + num).join("\n")}`
    },


    "2": {
        "clave": "Biotecnología",
        "text": `¿De qué cosa te gustaría conocer esa información? \n Tengo información de: Biorrectores y Recommbinantes`
    },

    "10101": {
        "clave": "Agricultura->Maíz->Agua",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Agricultura->Maíz->Agua",
        "ref": ["www.verOnePiece.com"],
        "images": ["imagen1.jpg","imagen2.jpg"],
        "sounds": ["sonido1.mp3","sonido2.mp3"],
        "videos": ["video1.mp4","video2.mp4"],
        "version": 1.0
    },

    "10102": {
        "clave": "Agricultura->Maíz->Frecuencia",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Agricultura->Maíz->Frecuencia",
        "ref": ["La Universidad de Cataluña"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "10103": {
        "clave": "Agricultura->Maíz->Fertilizante",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Agricultura->Maíz->Fertilizante",
        "ref": ["Roberto Gómez Bolaños, experto en biorreactores paulatinos supremos de alto nivel dominante"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "10201": {
        "clave": "Agricultura->Frijol->Agua",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Agricultura->Frijol->Agua",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "10202": {
        "clave": "Agricultura->Frijol->Frecuencia",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Agricultura->Frijol->Frecuencia",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "10203": {
        "clave": "Agricultura->Frijol->Fertilizante",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Agricultura->Frijol->Fertilizante",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    // "20304": {
    //     "clave": "Biotecnología->biodigestor->Bioseguridad",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
    //     "text": "Según %ref%, Biotecnología->Suelo->Bioseguridad",
    //     "ref": ["www.verOnePiece.com"],
    //     "images": [],
    //     "sounds": [],
    //     "videos": [],
    //     "version": 1.0
    // },

    // "20305": {
    //     "clave": "Biotecnología->Suelo->Biofertilizante",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
    //     "text": "Según %ref%, Biotecnología->Suelo->Biofertilizante",
    //     "ref": ["www.verOnePiece.com"],
    //     "images": [],
    //     "sounds": [],
    //     "videos": [],
    //     "version": 1.0
    // },

    // "20306": {
    //     "clave": "Biotecnología->Suelo->Transgénico",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
    //     "text": "Según %ref%, Biotecnología->Suelo->Transgénico",
    //     "ref": ["www.verOnePiece.com"],
    //     "images": [],
    //     "sounds": [],
    //     "videos": [],
    //     "version": 1.0
    // },

    "20404": {
        "clave": "Biotecnología->Biorreactor->Oxígeno",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Biotecnología->Biorreactor->Oxígeno",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "20405": {
        "clave": "Biotecnología->Biorreactor->T",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Biotecnología->Biorreactor->T",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "20406": {
        "clave": "Biotecnología->Biorreactor->P",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Biotecnología->Biorreactor->P",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "20407": {
        "clave": "Biotecnología->Biorreactor->Flujo",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Biotecnología->Biorreactor->Flujo",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "20408": {
        "clave": "Biotecnología->Biorreactor->Medio de cultivo",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Biotecnología->Biorreactor->Medio de cultivo",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },
    
    "20609": {
        "clave": "Biotecnología->Recombinante->Plásmido",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Biotecnología->Recombinante->Plásmido",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "20610": {
        "clave": "Biotecnología->Recombinante->Bacteria/Levadura",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Biotecnología->Recombinante->Bacteria/Levadura",
        "ref": ["www.verOnePiece.com"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },
}

module.exports = {
    answersJson,
}
