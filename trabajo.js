/* Ingredientes */

let agua = 1000;       /* Litros */
let cafe = 2000;       /* Gramos */
let leche = 1500;      /* Gramos */
let milo = 1500;       /* Gramos */
let chocolate = 1500;  /* Gramos */
let te = 100;          /* Bolsitas */
let azucar = 2000;     /* Gramos */
let vasos = 100;       /* Unidades */

/* Inventario de monedas y billetes */

const moneda100 = 100;
const moneda200 = 200;
const moneda500 = 500;
const moneda1000 = 1000;
const billete2000 = 2000;
const billete5000 = 5000;
const billete10000 = 10000;
const billete20000 = 20000;

/* Inventario de monedas y billetes */

let cantidadMonedas100 = 20;
let cantidadMonedas200 = 20;
let cantidadMonedas500 = 20;
let cantidadMonedas1000 = 20;
let cantidadBilletes2000 = 10;
let cantidadBilletes5000 = 10;
let cantidadBilletes10000 = 5;
let cantidadBilletes20000 = 5;

/* Precio de productos  */

const precioTinto = 1000;
const precioCafeLeche = 2000;
const precioTe = 1500;
const precioMilo = 2500;
const precioChocolate = 2500;

/* VARIABLES DE LA COMPRA */

let saldo = 0;
let cambio = 0;
let bebidaSeleccionada = 0;
let precioSeleccionado = 0;
let pagoExitoso = false;


/* FUNCION PARA INGRESAR DINERO */

function ingresarDinero() {

    let cantidadIngresada = Number(document.getElementById("balance-input").value);

    if (cantidadIngresada > 0) {

        saldo = saldo + cantidadIngresada;

        document.getElementById("credit").textContent = "$" + saldo;

        document.getElementById("balance-input").value = "";

        alert("Dinero ingresado correctamente. Su saldo es de $" + saldo);
    
        if (precioSeleccionado > 0) {
            verificarSaldo();
        }
    }
    else {

        alert("Cantidad no valida");

    }

}


/* CANTIDADES DE INGREDIENTES POR BEBIDA */

/* Agua: todas las bebidas consumen la misma cantidad */
const aguaPorBebida = 0.2; /* Litros */

/* Tinto 1 */
const cafeTinto = 10; /* Gramos */

/* Cafe con leche 2 */
const cafeCafeLeche = 10; /* Gramos */
const lecheCafeLeche = 10; /* Gramos */

/* Te 3 */
const bolsitasTe = 1; /* Bolsitas */

/* Milo 4 */
const lecheMilo = 10; /* Gramos */
const cantidadMilo = 20; /* Gramos */

/* Chocolate 5 */
const lecheChocolate = 10; /* Gramos */
const cantidadChocolate = 20; /* Gramos */

/* Azucar */
const azucarPorBebida = 5; /* Gramos si responde que sí */

/* Vasos */
const vasosPorBebida = 1; /* Unidades */


/* descontar ingredientes */

function descontarIngredientes(numero) {

    switch (numero) {

        case 1:

            cafe = cafe - 10;
            agua = agua - 0.2;
            vasos = vasos - 1;

            break;

        case 2:

            cafe = cafe - 10;
            leche = leche - 10;
            agua = agua - 0.2;
            vasos = vasos - 1;

            break;

        case 3:

            te = te - 1;
            agua = agua - 0.2;
            vasos = vasos - 1;

            break;

        case 4:

            milo = milo - 20;
            leche = leche - 10;
            agua = agua - 0.2;
            vasos = vasos - 1;

            break;

        case 5:

            chocolate = chocolate - 20;
            leche = leche - 10;
            agua = agua - 0.2;
            vasos = vasos - 1;

            break;

    }

}


/* funcion para agregar azucar */

function agregarAzucar() {

    let azucarSiNo = prompt("¿Desea agregar azucar? Escriba si o no");

    while (azucarSiNo !== "si" && azucarSiNo !== "no") {
        alert("Respuesta no valida. Por favor, escriba 'si' o 'no'.");
        azucarSiNo = prompt("¿Desea agregar azucar? Escriba si o no");
    }
    if (azucarSiNo == "si") {

        if (azucar >= azucarPorBebida) {
            let cantidadAzucar = azucarPorBebida;
            azucar = azucar - cantidadAzucar;
            alert("Se agregaron 5 gramos de azucar");
        }
        else {
            alert("No hay suficiente azucar");
        }

    }
    else if (azucarSiNo == "no") {
        alert("No se agrego azucar");
    }
    else {
        alert("Respuesta no valida");
    }
}

/* ver si hay ingredientes*/

let tintoDisponible = true;
let cafeLecheDisponible = true;
let teDisponible = true;
let miloDisponible = true;
let chocolateDisponible = true;

function actualizarInventarioVisual() {

    let stockTinto = Math.min(
        Math.floor(cafe / cafeTinto),
        Math.floor(agua / aguaPorBebida),
        Math.floor(vasos / vasosPorBebida)
    );

    let stockCafeLeche = Math.min(
        Math.floor(cafe / cafeCafeLeche),
        Math.floor(leche / lecheCafeLeche),
        Math.floor(agua / aguaPorBebida),
        Math.floor(vasos / vasosPorBebida)
    );

    let stockTe = Math.min(
        Math.floor(te / bolsitasTe),
        Math.floor(agua / aguaPorBebida),
        Math.floor(vasos / vasosPorBebida)
    );

    let stockMilo = Math.min(
        Math.floor(milo / cantidadMilo),
        Math.floor(leche / lecheMilo),
        Math.floor(agua / aguaPorBebida),
        Math.floor(vasos / vasosPorBebida)
    );

    let stockChocolate = Math.min(
        Math.floor(chocolate / cantidadChocolate),
        Math.floor(leche / lecheChocolate),
        Math.floor(agua / aguaPorBebida),
        Math.floor(vasos / vasosPorBebida)
    );

    /* actualizar disponibilidad */

    tintoDisponible = stockTinto > 0;
    cafeLecheDisponible = stockCafeLeche > 0;
    teDisponible = stockTe > 0;
    miloDisponible = stockMilo > 0;
    chocolateDisponible = stockChocolate > 0;

    /* cantidades en html */

    document.querySelector('[data-product="1"] .shelf__stock b').textContent = stockTinto;
    document.querySelector('[data-product="2"] .shelf__stock b').textContent = stockCafeLeche;
    document.querySelector('[data-product="3"] .shelf__stock b').textContent = stockTe;
    document.querySelector('[data-product="4"] .shelf__stock b').textContent = stockMilo;
    document.querySelector('[data-product="5"] .shelf__stock b').textContent = stockChocolate;

    /* productos agotados */

    document.querySelector('[data-product="1"]').classList.toggle("is-empty", stockTinto == 0);
    document.querySelector('[data-product="2"]').classList.toggle("is-empty", stockCafeLeche == 0);
    document.querySelector('[data-product="3"]').classList.toggle("is-empty", stockTe == 0);
    document.querySelector('[data-product="4"]').classList.toggle("is-empty", stockMilo == 0);
    document.querySelector('[data-product="5"]').classList.toggle("is-empty", stockChocolate == 0);

}

/* actualizar inventario visual */

actualizarInventarioVisual();

/* mostrar bebida */

function mostrarBebida() {

    let nombreBebida = "";

    switch (Number(bebidaSeleccionada)) {

        case 1:
            nombreBebida = "Tinto";
            break;

        case 2:
            nombreBebida = "Café con leche";
            break;

        case 3:
            nombreBebida = "Té";
            break;

        case 4:
            nombreBebida = "Milo";
            break;

        case 5:
            nombreBebida = "Chocolate";
            break;

    }

    document.getElementById("dispenser").textContent = nombreBebida;

}


/* cancelar compra */

function cancelarCompra() {

    if (saldo > 0) {

        alert("Compra cancelada");
        devolverSaldo();

    }
    else if (precioSeleccionado > 0) {

        precioSeleccionado = 0;
        bebidaSeleccionada = 0;
        pagoExitoso = false;

        alert("Selección cancelada");

    }
    else {

        alert("No hay dinero ni compra para cancelar");

    }

}

/* devolver saldo */

function devolverSaldo() {

    if (saldo > 0) {

        let dineroDevuelto = saldo;

        document.getElementById("bill-output").textContent = "$" + dineroDevuelto;
        document.getElementById("coin-output").textContent = "";

        saldo = 0;
        precioSeleccionado = 0;
        bebidaSeleccionada = 0;
        pagoExitoso = false;

        document.getElementById("credit").textContent = "$" + saldo;

        alert("Se devolvieron $" + dineroDevuelto);

    }
    else {

        alert("No hay saldo para devolver");

    }

}

/* inventario de dinero */

function obtenerInventarioDinero() {

    return [

        {
            valor: billete20000,
            cantidad: cantidadBilletes20000,
            tipo: "billete"
        },

        {
            valor: billete10000,
            cantidad: cantidadBilletes10000,
            tipo: "billete"
        },

        {
            valor: billete5000,
            cantidad: cantidadBilletes5000,
            tipo: "billete"
        },

        {
            valor: billete2000,
            cantidad: cantidadBilletes2000,
            tipo: "billete"
        },

        {
            valor: moneda1000,
            cantidad: cantidadMonedas1000,
            tipo: "moneda"
        },

        {
            valor: moneda500,
            cantidad: cantidadMonedas500,
            tipo: "moneda"
        },

        {
            valor: moneda200,
            cantidad: cantidadMonedas200,
            tipo: "moneda"
        },

        {
            valor: moneda100,
            cantidad: cantidadMonedas100,
            tipo: "moneda"
        }

    ];

}

/* calcular cambio exacto */

function calcularCambio(cantidad) {

    let inventario = obtenerInventarioDinero();

    let combinacion = [0, 0, 0, 0, 0, 0, 0, 0];

    function buscarCombinacion(indice, restante) {

        if (restante === 0) {

            return true;

        }

        if (indice >= inventario.length) {

            return false;

        }

        let dinero = inventario[indice];

        let maximo = Math.min(
            dinero.cantidad,
            Math.floor(restante / dinero.valor)
        );

        for (let i = maximo; i >= 0; i--) {

            combinacion[indice] = i;

            let nuevoRestante = restante - (i * dinero.valor);

            if (buscarCombinacion(indice + 1, nuevoRestante)) {

                return true;

            }

        }

        combinacion[indice] = 0;

        return false;

    }

    if (!buscarCombinacion(0, cantidad)) {

        return null;

    }

    return combinacion;

}

/* descontar dinero */

function descontarDinero(combinacion) {

    let inventario = obtenerInventarioDinero();

    for (let i = 0; i < inventario.length; i++) {

        let cantidadDevuelta = combinacion[i];

        switch (inventario[i].valor) {

            case 20000:
                cantidadBilletes20000 -= cantidadDevuelta;
                break;

            case 10000:
                cantidadBilletes10000 -= cantidadDevuelta;
                break;

            case 5000:
                cantidadBilletes5000 -= cantidadDevuelta;
                break;

            case 2000:
                cantidadBilletes2000 -= cantidadDevuelta;
                break;

            case 1000:
                cantidadMonedas1000 -= cantidadDevuelta;
                break;

            case 500:
                cantidadMonedas500 -= cantidadDevuelta;
                break;

            case 200:
                cantidadMonedas200 -= cantidadDevuelta;
                break;

            case 100:
                cantidadMonedas100 -= cantidadDevuelta;
                break;
        }
    }
}

/* mostrar cambio */

function mostrarCambio(combinacion) {

    let inventario = obtenerInventarioDinero();

    let mensajeCambio = "La máquina devuelve:\n";

    for (let i = 0; i < inventario.length; i++) {

        if (combinacion[i] > 0) {

            mensajeCambio += combinacion[i] + " ";

            mensajeCambio += inventario[i].tipo + "(s) de $";

            mensajeCambio += inventario[i].valor + "\n";
        }
    }

    alert(mensajeCambio);
}

function seleccionarBebida(numero) {

    bebidaSeleccionada = String(numero);
    precioSeleccionado = 0;
    pagoExitoso = false;

switch (bebidaSeleccionada) {
    case "1":
        if (tintoDisponible == true) {
        precioSeleccionado=precioTinto;
        alert ("Seleccionaste un tinto")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un tinto");
        }
        break;
        
    case "2":
        if (cafeLecheDisponible == true) {
            precioSeleccionado=precioCafeLeche;
            alert ("Seleccionaste un Café con leche")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un Café con leche");
        }
        break;
    case "3":
        if (teDisponible == true) {
            precioSeleccionado=precioTe;
            alert ("Seleccionaste un Té")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un Té");
        }
        break;
    case "4":
        if (miloDisponible == true) {
            precioSeleccionado=precioMilo;
            alert ("Seleccionaste un Milo")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un Milo");
        }
        break;
    case "5":
        if (chocolateDisponible == true) {
            precioSeleccionado=precioChocolate;
            alert ("Seleccionaste un Chocolate")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un Chocolate");
        }
        break;
    default:
        alert("por favor selecciona una bebida del 1 al 5");
        break;
}
verificarSaldo();
}
/* verificar si el saldo es suficiente */
function verificarSaldo() {

if (precioSeleccionado > 0) {

    if (saldo < precioSeleccionado) {

        alert("Saldo insuficiente");

    }
    else {

        pagoExitoso = true;
        alert("Pago aprobado");
        procesarCompra();

    }

}
}

/* preguntar si desea agregar azucar (function) */
function procesarCompra() {
if (pagoExitoso == true) {

    cambio = saldo - precioSeleccionado;

    let combinacionCambio = calcularCambio(cambio);

    if (combinacionCambio === null) {

        alert("No hay cambio exacto disponible. Por favor, ingrese la cantidad exacta.");

}
else {
    descontarDinero(combinacionCambio);

    mostrarCambio(combinacionCambio);

    agregarAzucar();

    descontarIngredientes(Number(bebidaSeleccionada));

    actualizarInventarioVisual();

    mostrarBebida();

    saldo = 0;
    precioSeleccionado = 0;
    bebidaSeleccionada = 0;
    pagoExitoso = false;
    

    document.getElementById("credit").textContent = "$" + saldo;
    alert("Su bebida está lista. ¡Disfrútela!");
    alert("Su cambio es de $" + cambio);

}
}
}
/* botones html */

let botonesBebidas = document.querySelectorAll("[data-select]");

for (let i = 0; i < botonesBebidas.length; i++) {

    botonesBebidas[i].addEventListener("click", function() {

        let numero = botonesBebidas[i].getAttribute("data-select");

        seleccionarBebida(numero);

    });

}

/* conectar formulario de dinero */

document.getElementById("balance-form").addEventListener("submit", function(event) {

    event.preventDefault();

    ingresarDinero();

});

/* conectar boton cancelar */

document.querySelector('[data-action="cancel"]').addEventListener("click", function() {

    cancelarCompra();

});
/* conectar boton devolver cambio */

document.querySelector('[data-action="return-change"]').addEventListener("click", function() {

    devolverSaldo();

});