var cadena = "habia una ves un patito que decia maiau miau y queria su elotito con chilito wiiiii"

var password = "qwertyuiopasdfghjk"


function verificarLongitudClave() {
    const tipoAES = parseInt(document.getElementById("tipo-aes").value);
    const clave = document.getElementById("clave").value;
    const longitudClave = clave.length;
    if (longitudClave !== tipoAES / 8) {
        alert(`La longitud de la clave debe ser de ${tipoAES / 8} caracteres.`);
        return false;
    }
    return true;
}

document.getElementById("cifrar-btn").addEventListener("click", function () {
    if (!verificarLongitudClave()) return;
    const mensaje = document.getElementById("mensaje").value;
    const clave = document.getElementById("clave").value;
    const tipoAES = parseInt(document.getElementById("tipo-aes").value);
    const cifrar = CryptoJS.AES.encrypt(mensaje, clave, { keySize: tipoAES / 8 }).toString();
    document.getElementById("result").textContent = cifrar;
});

document.getElementById("descifrar-btn").addEventListener("click", function () {
    if (!verificarLongitudClave()) return;
    const cifrado = document.getElementById("result").textContent;
    const clave = document.getElementById("clave").value;
    const tipoAES = parseInt(document.getElementById("tipo-aes").value);
    const decifrar = CryptoJS.AES.decrypt(cifrado, clave, { keySize: tipoAES / 8 }).toString(CryptoJS.enc.Utf8);
    document.getElementById("result").textContent = decifrar;
});
