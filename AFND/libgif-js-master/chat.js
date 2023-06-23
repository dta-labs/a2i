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