var entradaTexto = document.querySelector(".entrada-texto");
var salidaTexto = document.querySelector(".salida-texto");
var seccionTexto1 = document.querySelector(".texto1");
var seccionTexto2 = document.querySelector(".texto2");
var btnCopiar = document.querySelector(".copiar");
var btnCopiar = document.querySelector("#btn-copy");
var searchImage = document.getElementById("search-image");

function validar(textoValidar) {
    const isValid = /^[a-z\s]*$/.test(textoValidar);
  
    if (!isValid) {
      return false;
    } else {
      return true;
    }
  }
  
  function encriptar() {
    var texto = entradaTexto.value;
    var salida = "";
    if (!validar(texto)) {
        alert("Texto invalido, verifique su texto.");
        return;
    }
    for (var posicion = 0; posicion < texto.length; posicion++) {
        switch (texto.charAt(posicion)) {
            case "a":
                salida += "ai";
                break;
            case "e":
                salida += "enter";
                break;
            case "i":
                salida += "imes";
                break;
            case "o":
                salida += "ober";
                break;
            case "u":
                salida += "ufat";
                break;
            default:
                salida += texto.charAt(posicion);
                break;
        }
    }
    mostrarResultado(salida);
}

function desencriptar() {
    var texto = entradaTexto.value;
    var salida = "";
    if (!validar(texto)) {
        alert("Texto invalido, verifique su texto.");
        return;
    }
    salida = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(salida);
}

function mostrarResultado(salida) {
    var searchImage = document.getElementById("search-image");
    var resultContainer = document.getElementById("result-container");

    entradaTexto.value = "";
    salidaTexto.value = salida;
    salidaTexto.style.display = "block";  // Mostrar el área de texto

    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "inline-block";  // Mostrar el botón de copiar

    if (searchImage) {
        searchImage.style.display = "none";  // Ocultar la imagen
    }
}
  
  function ocultar() {
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "";
}


  
function mostrar() {
    salidaTexto.style.display = "none";
    seccionTexto1.style.display = "";
    seccionTexto2.style.display = "";
    searchImage.style.display = "block";
    btnCopiar.style.display = "none";
}
  
function copiar() {
    var copia = salidaTexto.value;
    navigator.clipboard.writeText(copia);
  
    var anuncio = document.querySelector(".spananuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
      anuncio.style.display = "none";
    }, 950);
    salidaTexto.value = "";
    mostrar();
  }

 




// Transition Function
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");

     // Asignar eventos a los botones
document.getElementById("btn-encode").addEventListener("click", encriptar);
document.getElementById("btn-decode").addEventListener("click", desencriptar);

});

