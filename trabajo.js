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

let bebida = parseInt(prompt("Selecciona una bebida: 1. Tinto, 2. Café con leche, 3. Té, 4. Milo, 5. Chocolate"));
let saldo = 0;
let cambio = 0;
let azucarSiNo = "";
let cantidadAzucar = 0;
let precioSeleccionado = 0;

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


/*preparar un tinto*/

cafe = cafe - cafeTinto;
agua = agua - aguaPorBebida;
vasos = vasos - vasosPorBebida;

/* preparar cafe con leche */

cafe = cafe - cafeCafeLeche;
leche = leche - lecheCafeLeche;
agua = agua - aguaPorBebida;
vasos = vasos - vasosPorBebida;

/* preparar un te */

te = te - bolsitasTe;
agua = agua - aguaPorBebida;
vasos = vasos - vasosPorBebida;

/* preparar un Milo */

milo = milo - cantidadMilo;
leche = leche - lecheMilo;
agua = agua - aguaPorBebida;
vasos = vasos - vasosPorBebida;

/* preparar un chocolate caliente */

chocolate = chocolate - cantidadChocolate;
leche = leche - lecheChocolate;
agua = agua - aguaPorBebida;
vasos = vasos - vasosPorBebida;


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

switch (bebida) {
    case 1:
        if (tintoDisponible == true) {
        precioSeleccionado=precioTinto;
        cafe = cafe - cafeTinto;
        agua = agua - aguaPorBebida;
        vasos = vasos - vasosPorBebida;
        alert ("Seleccionaste un tinto")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un tinto");
        }
        break;
        
    case 2:
        precioSeleccionado=precioCafeLeche;
        if (cafeLecheDisponible == true) {
            precioSeleccionado=precioCafeLeche;
            cafe = cafe - cafeCafeLeche;
            leche = leche - lecheCafeLeche;
            agua = agua - aguaPorBebida;
            vasos = vasos - vasosPorBebida;
            alert ("Seleccionaste un Café con leche")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un Café con leche");
        }
        break;
    case 3:
        precioSeleccionado=precioTe;
        if (teDisponible == true) {
            precioSeleccionado=precioTe;
            te = te - bolsitasTe;
            agua = agua - aguaPorBebida;
            vasos = vasos - vasosPorBebida;
            alert ("Seleccionaste un Té")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un Té");
        }
        break;
    case 4:
        precioSeleccionado=precioMilo;
        if (miloDisponible == true) {
            precioSeleccionado=precioMilo;
            milo = milo - cantidadMilo;
            leche = leche - lecheMilo;
            agua = agua - aguaPorBebida;
            vasos = vasos - vasosPorBebida;
            alert ("Seleccionaste un Milo")
        }
        else {
            alert("no hay ingredientes suficientes para preparar un Milo");
        }
        break;
    case 5:
        precioSeleccionado=precioChocolate;
        if (chocolateDisponible == true) {
            precioSeleccionado=precioChocolate;
            chocolate = chocolate - cantidadChocolate;
            leche = leche - lecheChocolate;
            agua = agua - aguaPorBebida;
            vasos = vasos - vasosPorBebida;
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
/*nota 
paso 1 verificar si hay ingredeintes (completado)
paso 2 preguntar cual bebida quiere (completado)
paso 3 quitar de las opciones si hay alguno que no tenga ingredientes (no se como hacerlo)
etc. */

/* preguntar si desea agregar azucar (function) */

if (precioSeleccionado > 0) {
    agregarAzucar();
}