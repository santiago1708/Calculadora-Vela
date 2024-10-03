const Numero0 = document.querySelector('#numero0'); 
const Numero1 = document.querySelector('#numero1');
const Numero2 = document.querySelector('#numero2');
const Numero3 = document.querySelector('#numero3');
const Numero4 = document.querySelector('#numero4');
const Numero5 = document.querySelector('#numero5');
const Numero6 = document.querySelector('#numero6');
const Numero7 = document.querySelector('#numero7');
const Numero8 = document.querySelector('#numero8');
const Numero9 = document.querySelector('#numero9');
const operacion = document.querySelectorAll('.operacion');
const sumar = document.querySelector('#sumar');
const restar = document.querySelector('#restar');
const borrar = document.querySelector('#eliminar');
const punto = document.querySelector('#punto');
const Resultado = document.querySelector('#Resultado');
const igual = document.querySelector('#igual');

let Num1 = '';
let Num2 = '';
let operacionSeleccionada = null;
let resultadoCalculado = false;


const actualizarDisplay = (valor) => {
    Resultado.value = valor;
}

const ingresarNumero = (numero) => {
    if (resultadoCalculado) {
        Num1 = numero;
        Num2 = '';
        operacionSeleccionada = null;
        resultadoCalculado = false;
    } else {
        if (operacionSeleccionada) {
            Num2 += numero;
            actualizarDisplay(Num2);
        } else {
            Num1 += numero;
            actualizarDisplay(Num1);
        }
    }
}


const seleccionarOperacion = (op) => {
    if (Num1 === '') return;
    if (Num2 !== '') {
        calcular();
    }
    operacionSeleccionada = op;
    resultadoCalculado = false;
}

function calcular() {
    let resultado;
    const numero1 = +Num1;
    const numero2 = +Num2;

    if (isNaN(numero1)) return;
    
    switch (operacionSeleccionada) {
        case '+':
            resultado = numero1 + (isNaN(numero2) ? 0 : numero2);
            break;
        case '-':
            resultado = numero1 - (isNaN(numero2) ? 0 : numero2);
            break;
        case '*':
            resultado = numero1 * (isNaN(numero2) ? 1 : numero2);
            break;
        case '/':
            if (numero2 === 0) {
                alert('No se puede dividir por cero');
                return;
            }
            resultado = numero1 / numero2;
            break;
        case '^':
            resultado = Math.pow(numero1, isNaN(numero2) ? 1 : numero2);
            break;
        case '√':
            resultado = Math.sqrt(numero1);
            break;
        case 'π':
            resultado = Math.PI;
            break;
        default:
            return;
    }

    actualizarDisplay(resultado);
    Num1 = resultado.toString();
    Num2 = '';
    operacionSeleccionada = null;
    resultadoCalculado = true;
}

function borrarTodo() {
    Num1 = '';
    Num2 = '';
    operacionSeleccionada = null;
    resultadoCalculado = false;
    actualizarDisplay('');
}

Numero0.addEventListener('click', () => {
    ingresarNumero(Numero0.value);
});
Numero1.addEventListener('click', () => {
    ingresarNumero(Numero1.value);
});
Numero2.addEventListener('click', () => {
    ingresarNumero(Numero2.value);
});
Numero3.addEventListener('click', () => {
    ingresarNumero(Numero3.value);
});
Numero4.addEventListener('click', () => {
    ingresarNumero(Numero4.value);
});
Numero5.addEventListener('click', () => {
    ingresarNumero(Numero5.value);
});
Numero6.addEventListener('click', () => {
    ingresarNumero(Numero6.value);
});
Numero7.addEventListener('click', () => {
    ingresarNumero(Numero7.value);
});
Numero8.addEventListener('click', () => {
    ingresarNumero(Numero8.value);
});
Numero9.addEventListener('click', () => {
    ingresarNumero(Numero9.value);
});

operacion.forEach((opera) => {
    opera.addEventListener('click', () => {
        const valorOpera = opera.value;
        if (valorOpera === '√' || valorOpera === 'π') {
            operacionSeleccionada = valorOpera;
            calcular();
        } else {
            seleccionarOperacion(valorOpera);
        }
    });
});

punto.addEventListener('click', () => {
    ingresarPunto();
});

borrar.addEventListener('click', () => {
    borrarTodo();
});

igual.addEventListener('click', () => {
    if (operacionSeleccionada && (Num2 !== '' || operacionSeleccionada === '√' || operacionSeleccionada === 'π')) {
        calcular();
    }
});
