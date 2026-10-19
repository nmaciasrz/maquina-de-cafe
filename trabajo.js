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

let bebida = "";
let saldo = 0;
let cambio = 0;
let azucarSiNo = "";
let cantidadAzucar = 0;
let precioSeleccionado = 0;

/* CANTIDADES DE INGREDIENTES POR BEBIDA */

/* Agua: todas las bebidas consumen la misma cantidad */
const aguaPorBebida = 0.2; /* Litros */

/* Tinto */
const cafeTinto = 10; /* Gramos */

/* Cafe con leche */
const cafeCafeLeche = 10; /* Gramos */
const lecheCafeLeche = 10; /* Gramos */

/* Te */
const bolsitasTe = 1; /* Bolsitas */

/* Milo */
const lecheMilo = 10; /* Gramos */
const cantidadMilo = 20; /* Gramos */

/* Chocolate */
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

/* descontar el azucar de una bebida */

cantidadAzucar = azucarPorBebida;
azucar = azucar - cantidadAzucar;
