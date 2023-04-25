// Ejercicio 2

var alCuadrado = numeros.map(function(num) {
    return num * num;
});

console.log(alCuadrado);

// Ejercicio 3

var nombres = ['Florencia', 'Lucas', 'Ezequiel', 'Matias', 'Bruno', 'Gustavo', 'Martin'];

var names = nombres.filter(function(name) {
    
    return name.length >= 6;
});

console.log(names);

// Ejercicio 4

function numerosPares(numeros) {
    
    var pares = numeros.filter(function(numero) {
        
        return numero % 2 === 0;
    });
    return pares;
}

console.log(numerosPares(numeros));

// JQuery

    // Ejercicio 1 

$(document).ready(function() {
    $('#primer-p').click(function() {
        console.log('Se hizo click en el primer párrafo');
    });
});

    // Ejercicio 2

function actualizar (nuevoHref) {
    var enlace = document.getElementById('enlace');
    enlace.href = nuevoHref;
    
    enlace.innerHTML = nuevoHref;
}

    // Ejercicio 3

function reducir () {
    var container = document.getElementById('container');
    var imagen = document.getElementById('imagen');

    container.style.width = '250px';
    container.style.height = '250px';

    imagen.style.width = '100%';
    imagen.style.height = '100%';
}

function restaurar () {
    var container = document.getElementById('container');
    var imagen = document.getElementById('imagen');

    container.style.width = '800px';
    container.style.height = '70px';

    imagen.style.width = '100%';
    imagen.style.height = '100%';
}

    // Ejercicio 4

function ocultar () {
    var parrafos = document.getElementById('parrafos');
    var paisaje = document.getElementById('paisaje');

    parrafos.style.opacity = 1;

    var fadeOut = setInterval(function() {
        if (parrafos.style.display > 0) {
            parrafos.style.display -= 0.1;
        } else {
            clearInterval(fadeOut);
            parrafos.style.display = 'none';
            paisaje.style.display = 'block';

            var fadeIn = setInterval(function() {
                if (paisaje.style.opacity < 1) {
                    paisaje.style.opacity = Number(paisaje.style.opacity) + 0.1;
                } else {
                    clearInterval(fadeIn);
                }
            }, 500);
        }
    }, 500);
}