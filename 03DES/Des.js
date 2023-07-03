function cifrar() {
    var fileInput = document.getElementById('input-archivo');
    var claveCifrado = document.getElementById('clave-encriptacion').value;
    var archivo = fileInput.files[0];
    var lector = new FileReader();
    lector.onload = function (e) {
        var mensaje = e.target.result;
        var mensajeCifrado = CryptoJS.DES.encrypt(mensaje, claveCifrado).toString();
        descargarArchivo('cifrado.txt', mensajeCifrado);
    };
    lector.readAsText(archivo);
}

function descifrar() {
    var archivoCifradoInput = document.getElementById('input-archivo-encriptado');
    var claveDescifrado = document.getElementById('clave-desencriptacion').value;
    var archivoCifrado = archivoCifradoInput.files[0];
    var lector = new FileReader();
    lector.onload = function (e) {
        var mensajeCifrado = e.target.result;
        var mensajeDescifrado = CryptoJS.DES.decrypt(mensajeCifrado, claveDescifrado).toString(CryptoJS.enc.Utf8);
        descargarArchivo('descifrado.txt', mensajeDescifrado);
    };
    lector.readAsText(archivoCifrado);
}

function descargarArchivo(nombreArchivo, contenido) {
    var elemento = document.createElement('a');
    elemento.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido));
    elemento.setAttribute('download', nombreArchivo);
    elemento.style.display = 'none';
    document.body.appendChild(elemento);
    elemento.click();
    document.body.removeChild(elemento);
}
