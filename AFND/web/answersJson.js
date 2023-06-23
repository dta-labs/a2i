// const { cultivos } = require('./states')


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
        "text": `Según %ref%, - Biotecnología

        La biotecnología es el empleo de organismos vivos para la obtención 
        de un bien o servicio útil para el hombre. Así, la biotecnología tiene
        una larga historia, que se remonta a la fabricación del vino, el pan, 
        el queso y el yogurt.
        
        Los científicos actualmente comprenden en detalle cómo ocurren estos 
        procesos biológicos, lo que les ha permitido desarrollar nuevas técnicas 
        a fin de modificar o copiar algunos de dichos procesos naturales para poder 
        lograr una variedad mucho más amplia de productos. Los científicos hoy saben,
         además, que los microorganismos sintetizan compuestos químicos y enzimas 
        que pueden emplearse eficientemente en procesos industriales, tales como la 
        fabricación de detergentes, manufactura del papel e industria farmacéutica.`,
        "ref": ["https://argenbio.org/biotecnologia"],
        "images": [],
        "sounds": [],
        "videos": [],
        "version": 1.0
    },

    "10101": {
        "clave": "Agricultura->Maíz->Agua",    // Por ejemplo, eso correspondería a Agricultura->Maíz->Agua
        "text": "Según %ref%, Agricultura->Maíz->Agua",
        "ref": ["www.verOnePiece.com"],
        "images": ["luffy.jpg","Rio.jpg"],
        "sounds": ["Aria.mp3","Guy.mp3"],
        "videos": ["Jamoncillos.mp4","lol.mp4"],
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
        "text": `Según %ref%, --Temperatura
        La mayoría de las líneas celulares de mamíferos tienen un funcionamiento 
        óptimo a la temperatura fisiológica de 37°C. Una temperatura de más de 38 °C 
        puede tener un efecto dramático en la viabilidad celular, mientras que una 
        temperatura más baja puede resultar en un metabolismo celular más lento. Es 
        importante mantener una temperatura constante homogénea en el biorreactor. 
        Esto está controlado por un sensor de temperatura, una camisa de agua en el 
        biorreactor y una unidad de control de temperatura (TCU).`,
        "ref": ["https://www.cytivalifesciences.com/en/us/news-center/controlling-the-key-parameters-of-a-bioreactor-10001#:~:text=El%20control%20de%20los%20par%C3%A1metros,y%20qu%C3%ADmico%2C%20optimizando%20su%20rendimiento."],
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

// module.exports = {
//     answersJson,
// }
