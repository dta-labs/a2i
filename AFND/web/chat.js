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
    borrarChat();
    iterate(text)
}

borrarChat = () => {
    document.getElementById("preguntas").value = "";
    document.getElementById("chatResponse").innerHTML = "";
}