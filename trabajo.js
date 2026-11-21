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

    let cantidadIngresada = Number(prompt("¿Cuánto dinero desea ingresar?"));

    if (cantidadIngresada > 0) {

        saldo = saldo + cantidadIngresada;

        alert("Dinero ingresado correctamente. Su saldo es de $" + saldo);

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

    azucarSiNo = prompt("¿Desea agregar azucar? Escriba si o no");

    if (azucarSiNo == "si") {

        if (azucar >= azucarPorBebida) {
            cantidadAzucar = azucarPorBebida;
            azucar = azucar - cantidadAzucar;
            alert("Se agregaron 5 gramos de azucar");
        }
        else {
            alert("No hay suficiente azucar");
        }

    }
    else if (azucarSiNo == "no") {
        cantidadAzucar = 0;
        alert("No se agrego azucar");
    }
    else {
        alert("Respuesta no valida");
    }
}


/* seleccion de bebida y verificar si hay ingredientes */

bebidaSeleccionada = prompt(
    "¿Qué bebida deseas?\n" +
    "1. Tinto\n" +
    "2. Café con leche\n" +
    "3. Té\n" +
    "4. Milo\n" +
    "5. Chocolate"
);

ingresarDinero();

/* ver si hay ingredientes*/

let tintoDisponible = true;
let cafeLecheDisponible = true;
let teDisponible = true;
let miloDisponible = true;
let chocolateDisponible = true;


    if (cafe < cafeTinto || agua < aguaPorBebida || vasos < vasosPorBebida) 
        {
        tintoDisponible = false;
    }
    
    if (cafe < cafeCafeLeche || leche < lecheCafeLeche || agua < aguaPorBebida || vasos < vasosPorBebida) {
        cafeLecheDisponible = false;
    }

    if (te < bolsitasTe || agua < aguaPorBebida || vasos < vasosPorBebida) {
        teDisponible = false;
    }

    if (milo < cantidadMilo || leche < lecheMilo || agua < aguaPorBebida || vasos < vasosPorBebida) {
        miloDisponible = false;
    }

    if (chocolate < cantidadChocolate || leche < lecheChocolate || agua < aguaPorBebida || vasos < vasosPorBebida) {
        chocolateDisponible = false;
    }

    /*switch*/

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

/* verificar si el saldo es suficiente */

if (precioSeleccionado > 0) {

    if (saldo < precioSeleccionado) {

        alert("Saldo insuficiente");

    }
    else {

        pagoExitoso = true;
        alert("Pago aprobado");

    }

}

/* preguntar si desea agregar azucar (function) */

if (pagoExitoso == true) {
    agregarAzucar();


    descontarIngredientes(Number(bebidaSeleccionada));

    saldo = saldo - precioSeleccionado;

    alert("Su bebida está lista. ¡Disfrútela!");

}