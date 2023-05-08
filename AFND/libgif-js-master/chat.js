// Símbolos
const saludo = RegExp("(HOLA|BUENAS|BUENOS|SALUDOS)");
const quien = RegExp("(QUIEN|QUIÉN|QUE|QUÉ)");
const eres = RegExp("(ERES)");
const como = RegExp("(COMO|CÓMO|EN QUE|EN QUÉ)");
const ayudar = RegExp("(AYUDAR)");
const llamas = RegExp("(LLAMAS|NOMBRE|DICEN)");
const cual = RegExp("(CUAL|CUÁL|CUALES|CUÁLES|QUE|QUÉ)");
const objetivo = RegExp("(OBJETIVO|OBJETIVOS|FUNCION|FUNCIÓN)");
const tareas = RegExp("(TAREA|TAREAS|HACES|HACER|FUNCIONES|ACTIVIDADES|DEDICAS)");
// Matríz de estados
// let estados = [[],
//                 [],
//                 []];
// Mensajes

preguntas.addEventListener('keyup', function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13'){
        processingText();
    }
});

processingText = () => {
    let preguntas = document.getElementById("preguntas");
    let text = preguntas.value.toLocaleUpperCase();
    preguntas.value = "";
    noteContent = "";
    if (saludo.test(text)) { speakText(msg[0]); }
    else if (quien.test(text) && eres.test(text)) { speakText(msg[1]); }
    else if (como.test(text) && llamas.test(text)) { speakText(msg[2]); }
    else if (cual.test(text) && objetivo.test(text)) { speakText(msg[Math.floor(Math.random() * (2)) + 4]); }
    else if ((cual.test(text) && tareas.test(text) || (como.test(text) && ayudar.test(text)))) { speakText(msg[Math.floor(Math.random() * (2)) + 6]); }
    else { speakText(msg[8]); }
}

borrarChat = () => {
    document.getElementById("preguntas").value = "";
    document.getElementById("chatResponse").innerHTML = "";
}