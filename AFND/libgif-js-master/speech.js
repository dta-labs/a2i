const synth = window.speechSynthesis;
const speech = new SpeechSynthesisUtterance();
var noteContent = "";

// // Reconocimiento de voz

try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
} catch(e) {
    console.error(e);
}

recognition.onstart = function() { 
    console.log('Reconocimiento de voz activado. Comience a hablar.');
}

recognition.onspeechend = function() {
    // console.log('Ud. se ha mantenido cayado por un rato, por lo que el reconocimiento de voz se ha desactivado automáticamente.');
    console.log('Espera a que termine de hablar el browser antes de hacer otra petición.');
}

recognition.onerror = function(event) {
    if(event.error == 'no-speech') {
        console.error('No se dectectó la conversación, por favor vuelva a intentarlo.');  
    };
}

recognition.onresult = function(event) {
    recognition.stop()

    // Check if speech synthesis is active
    if (speechQueue.length > 0) {
        console.log("qué rollo1")
        return;
    }

    if (isSpeaking) {
        console.log("qué rollo2")
        return; // Ignore recognition if speech synthesis is active
    }
    console.log("qué rollo3")
    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    var current = event.resultIndex;
  
    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;
  
    // Add the current transcript to the contents of our Note.
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
    
    if(!mobileRepeatBug) {
        noteContent += transcript;
        document.getElementById("preguntas").value = noteContent;
        processingText();
    }
}

recognition.continuous = true;
recognition.lang = 'es-ES';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.start();

// Sintetizador de voz

const speechQueue = []; // cola de reproducción
let isSpeaking = false; // indicador de si se está reproduciendo un texto

speakText = (text) => {
  speechQueue.push(text); // agregar texto a la cola de reproducción
  document.getElementById("chatResponse").innerHTML += "<br>" + text;

  if (!isSpeaking) {
    playNext(); // comenzar la reproducción si no hay ningún texto actualmente reproduciéndose
  }
};

playNext = () => {
  if (speechQueue.length > 0) {
    const text = speechQueue.shift(); // obtener el próximo texto de la cola

    isSpeaking = true; // establecer el indicador de reproducción en verdadero

    sup1.play()

    speech.lang = 'es-ES';
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    console.log("simon")
    synth.speak(speech);
    console.log("simon2")

    // Escuchar el evento 'end' para iniciar la reproducción del siguiente texto cuando termine el actual
    speech.onend = () => {
      sup1.pause()
      isSpeaking = false; // restablecer el indicador de reproducción a falso
      playNext(); // reproducir el siguiente texto en la cola
    };
  }
  else{
    recognition.start();
  }
};

selectorMicrofono = (activacion) => {
    if (activacion) {
        document.getElementById("microfonoOn").style.display = "inline";
        document.getElementById("microfonoOff").style.display = "none";
        recognition.start();
    } else {
        document.getElementById("microfonoOn").style.display = "none";
        document.getElementById("microfonoOff").style.display = "inline";
        recognition.stop();
    }
} 

selectorVocina = (activacion) => {
    if (activacion) {
        document.getElementById("vocinaOn").style.display = "inline";
        document.getElementById("vocinaOff").style.display = "none";
        synth.speak("Audio activado");
    } else {
        document.getElementById("vocinaOn").style.display = "none";
        document.getElementById("vocinaOff").style.display = "inline";
        synth.cancel();
    }
} 