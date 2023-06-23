function leerArchivo() {
  var archivoInput = document.getElementById('archivoInput');
  var archivo = archivoInput.files[0];

  if (archivo) {
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;

      // Guardar el contenido en una variable
      var contenidoArchivo = contenido;

      // Imprimir el contenido en la consola
      console.log(contenidoArchivo);
    };

    lector.readAsText(archivo);
  }
}
