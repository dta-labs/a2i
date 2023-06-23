function procesarArchivo() {
    var archivoInput = document.getElementById('archivoZip');
    var archivo = archivoInput.files[0];
  
    if (archivo) {
      var lector = new FileReader();
      lector.onload = function(e) {
        var contenido = e.target.result;
  
        // Guardar el contenido en el textarea
        var textarea = document.getElementById('exampleFormControlTextarea1');
        textarea.value = contenido;
        console.log(textarea.value);
      };
  
      lector.readAsText(archivo);
    }
  }