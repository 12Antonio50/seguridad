function cifrar() {
    var mensaje = document.getElementById("mensaje").value;
    var clave = document.getElementById("clave").value;
    var resultado = "";

    mensaje = mensaje.replace(/\s/g, "");

    if (/^\d+$/.test(clave)) {
        // Cifrado César
        var desplazamiento = parseInt(clave);

        for (var i = 0; i < mensaje.length; i++) {
            var letra = mensaje[i];
            if (letra.match(/[a-z]/i)) {
                var asciiInicial = letra.match(/[a-z]/) ? 97 : 65;
                var indice = (letra.charCodeAt(0) - asciiInicial + desplazamiento) % 26;
                resultado += String.fromCharCode(indice + asciiInicial);
            } else {
                resultado += letra;
            }
        }
    } else {
        // Cifrado Vigenère
        var claveVigenere = clave.toUpperCase();
        var indiceClave = 0;

        for (var i = 0; i < mensaje.length; i++) {
            var letra = mensaje[i];
            if (letra.match(/[a-z]/i)) {
                var asciiInicial = letra.match(/[a-z]/) ? 97 : 65;
                var desplazamiento = claveVigenere.charCodeAt(indiceClave % claveVigenere.length) - 65;
                var indice = (letra.charCodeAt(0) - asciiInicial + desplazamiento) % 26;
                resultado += String.fromCharCode(indice + asciiInicial);
                indiceClave++;
            } else {
                resultado += letra;
            }
        }
    }

    document.getElementById("resultado").value = resultado;

    // Generar más puntos de fuegos artificiales
    for (var i = 0; i < 10; i++) {
        showFireworks();
    }
}

function showFireworks() {
    const container = document.querySelector(".container");
    const fireworks = document.createElement("span");
    fireworks.classList.add("firework");
    fireworks.style.left = Math.random() * 100 + "%";
    fireworks.style.top = Math.random() * 100 + "%";
    container.appendChild(fireworks);
    setTimeout(() => {
        container.removeChild(fireworks);
    }, 1000);
}
