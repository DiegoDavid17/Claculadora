//Asigno a la variable pantalla el texto que aparecerá en pantalla
let pantalla = document.getElementById('pantalla');
let resultado = document.getElementById('resultado');
resultado.style.display = "none";
// a traves del método querySelectorAll() busco dentro de los elementos de texto CSS (en este caso el id cajaBotones y el contenido de los botones)
const botones = document.querySelectorAll("#cajaBotones button");
//Creamos una variable auxiliar que la inicializamos en cero (servirá para almacenar temporalmente el resultado de una operación para poder operar sobre ese número)
var auxiliar = 0;
// El evento se va iterar con un for recibiendo los botones que se presiona
for (const boton of botones) {
    // Con el método ddEventListener('clic', función) un detector de eventos que se activa cuando un usuario hace clic en un botón
    boton.addEventListener('click', function(e) {

        switch (e.target.dataset.key) {
            case 'igual':
                auxiliar = eval(pantalla.textContent);
                resolverOperacion();
                break;
            case 'clear':
                limpiarPantalla();
                resultado.style.display = "none";
                auxiliar = 0;
                break;
            case '*':
                if (auxiliar != 0) {
                    pantalla.textContent = auxiliar + pantalla.textContent + e.target.dataset.key;
                    resultado.style.display = "none";
                } else {
                    pantalla.textContent = pantalla.textContent + e.target.dataset.key;
                    resultado.style.display = "none"; 
                }
                break;
            case '/':
                if (auxiliar != 0) {
                    pantalla.textContent = auxiliar + pantalla.textContent + e.target.dataset.key;
                    resultado.style.display = "none";
                } else {
                    pantalla.textContent =  pantalla.textContent + e.target.dataset.key;
                    resultado.style.display = "none"; 
                }
                break;
            case '-':
                if (auxiliar != 0) {
                    pantalla.textContent = auxiliar + pantalla.textContent + e.target.dataset.key;
                    resultado.style.display = "none";
                } else {
                    pantalla.textContent = pantalla.textContent + e.target.dataset.key;
                    resultado.style.display = "none";  
                }
                break;
            case '+':
                if (auxiliar != 0) {
                    pantalla.textContent = auxiliar + pantalla.textContent + e.target.dataset.key;
                    resultado.style.display = "none";
                } else {
                    pantalla.textContent = pantalla.textContent + e.target.dataset.key;
                    resultado.style.display = "none";  
                }
                break;
            default:
                pantalla.textContent = pantalla.textContent + e.target.dataset.key;
                resultado.style.display = "none";
            break;
        }
           
    });
}


function limpiarPantalla() {
    pantalla.textContent = '';
}

function resolverOperacion() {
    //console.log(auxiliar);
    resultado.style.display = "block";
    resultado.textContent = eval(pantalla.textContent);
    limpiarPantalla();
}
