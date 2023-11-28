document.addEventListener("DOMContentLoaded", function() {
    let peso = document.getElementById("peso");
    let boton = document.getElementById("calcular");
    let mensaje = document.getElementById("mensaje");
    let volumen = document.getElementById("volumen");

    boton.addEventListener("click", calcularHidratacion);

    function calcularHidratacion() {
        let pesoValor = peso.valueAsNumber;
        let volumenResultado = 0;
        if (pesoValor <= 0 || isNaN(pesoValor)) {
            mensaje.textContent = "Error: Ingresa un peso válido mayor a 0";
            mensaje.style.color = "red";
            volumen.style.display = "none";
            return; 
        }

        if (pesoValor >= 0 && pesoValor <= 10) {
            volumenResultado = pesoValor * 100;
        } else if (pesoValor > 10 && pesoValor <= 20) {
            volumenResultado = 10 * 100 + (pesoValor - 10) * 50; 
        } else if (pesoValor > 20) {
            volumenResultado = 10 * 100 + 10 * 50 + (pesoValor - 20) * 20; 
        }

        volumen.textContent = volumenResultado + " cc/día";
        mensaje.textContent = "Hidratación calculada";
        volumen.style.display = "block";
    }
});
