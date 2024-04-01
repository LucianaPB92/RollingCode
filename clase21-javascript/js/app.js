// alert("estamos conectados al index");
//condicional doble (if y else)
/*
let numero = 19;
if (numero < 18) {
    //ejecuta si es verdadero
    alert("el numero "+numero+" es menor")
}
else{
    //ejecutando la condicion si es falsa
    alert("el numero "+numero+" es mayor");
}

// condicional anidado

let rol = "alumno";

if (rol == "alumno") {
    alert("Bienvenido alumno");
}
else if (rol == "docente") {
    alert("Bienvenido docente");
}
else{
    alert("ese rol no existe");
}
*/

//if dentro de otro para un rango desde 5 a 10
/*
let num = 0;

if (num >= 5) {
    if (num <= 10) {
        alert(" esta dentro del rango");
    }
    else {
        alert("esta fuera del rango");
    }
}
else {
    alert("esta fuera del rango");
} */

//otra forma mas facil de hacerlo es

// let x = 17;
/*
if (x >= 5 && x <= 10) {
    alert(" esta dentro del rango");
}
else {
    alert("esta fuera del rango");
}
*/
//operadores asignacion (=) aritmeticos (+-*/ %) unitarios (++)
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// let llueve = true;
// console.log(llueve);
// console.log(!llueve);

//operadores condicionales == === <= >= !=

console.log('12' !== 12);

//operadores logicos && ||

let finde = false;
let es_feriado = false;
// or cumple una de las dos condiciones 
if (finde || es_feriado) {
    console.log("No es laborable hoy");
}
else{
    console.log("Es un dia laborable");
}

// y && se tiene que cumplir las dos condiciones

if (!finde && !es_feriado) {
    console.log("Es un dia laborable");
}
else{
    console.log("No es laborable hoy");
}

//condicional switch
/*
let dia = prompt("Ingrese el día"); 
switch (dia) {
    case "Lunes":
        console.log("Me levanto con un poco de fiaca");
        break;
    case "Viernes":
        console.log("Me levanto con muchas ganas porque viene el finde");
        break;

    default:
        console.log("Ese día no es valido");
        break;
}
*/
//true && true = true
// false && true = false
//true && false = false
//false && false = false

// true || false = true
// false || true = true
// true || true = true
// false || false = false

//bucles | estructuras repetitivas
/*
 let alumnos = [];
 alumnos [0] ="Cecilia";
 alumnos [1] ="Gustavo";
 alumnos [2] ="Luciana";
 alumnos [3] ="Alberto";
 alumnos [50] = "Ángel";

 //necesito estructura repetitiva que me llene del 4 al 49 con valor null
 alumnos = [4] = null;
 alumnos = [5] = null;
 alumnos = [6] = null;
 alumnos = [7] = null;
 //establesco variable x y la inicializo en 4
let x = 4;
//establesco primero rango de estructura repetitiva
let rango = x>=4 && x<50;
console.log(rango);
 while (x < 50) {
    // console.log(x);
    alumnos[x]=null;// se asigna valor null a x en
    x++;
    
}
 console.log(alumnos);
 */

/*
//tabla del 8
let numero = prompt("Ingresa tu numero para mostrar la tabla");
let num = 1; //empezamos en 1 la tabla hasta el 10 incluido
while (num <= 10) {
    console.log(numero+ 'x' +num+ ' = ' +numero*num);
    num++;// siempre poner esto para que nos sume la variable 
}
//salida 8 x 1 = 8 y asi hasta el 10
*/

//do while 
/*
let num2 = 10;

do {
    console.log(num2);
    num2++;
} while (num2 < 10);
*/
//For
/*
let numeros = [];
for (let a = 0; a < 10; a++) {
    numeros [a] = a*3;    
}

console.log(numeros);
*/
/*
let numIngresado = prompt("Ingrese su número aquí");

for (let i = 1; i < 10; i++) {
    
    console.log(numIngresado+ 'x' +i+ ' = ' +numIngresado*i);
}
*/

let numero = [];
let numIngresado = "";
while (numIngresado != '0') {
    numIngresado = prompt("Ingrese un número");
    console.log("La longitud es "+numero.length);
    if (numIngresado != '0') {
        numero[numero.length] =numIngresado;
    } //esto sirve para que no entre en el array el cero
}

console.log(numero);

//vimos bucles while, do while, for
 
