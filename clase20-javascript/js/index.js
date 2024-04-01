// alert("Estamos bien vinculados");
// console.log("estamos ready");
// variables declararlas
// let nombre;
// let apellido = "Apellido";
// let suma = 5+40;
// let llueve = true;
// nombre = "Jorge";
// let edad = 51; //cambiamos valor de variable
// console.log(nombre);
// //tipos de variables string numericos booleanos undefined null objects
// edad = "Julio";
// console.log(edad);

// edad = Number (prompt("Escribe tu edad"));
// console.log(edad);
// console.log(typeof 51);
// // console.log(Number(edad) + 20);

//condicionales

// if (edad >= 18) {
//     alert("Puedes entrar al boliche");
// }else{
//     alert("Eres menor no puedes entrar");
// }
// console.log("Hola mi nombre es: " + nombre + " y tengo " + edad + " años de edad");

// let lampara = "enchufada";
// let esta_quemada = true;
// let esta_enchufada = false;
// if (esta_enchufada) {
//     if(lampara == "quemada"){
//         alert("cambiar el foco");
//     }
//     else{
//         alert("comprar lampara nueva");
//     }
// }
// else{
//     alert("conecta la lampara");
// }

//suma resta multiplicacion y division

// let num = 20;
// let num2 = 433;
// let resultado = num + num2;
// console.log(resultado);
// let resultadoDos = num - num2;
// console.log(resultadoDos);
// let resultado_tres = num * num2;
// console.log(resultado_tres);
// let resultadoCuatro = num / num2;
// console.log(resultadoCuatro);

//numero par o impar 

// let numero = prompt("ingrese el numero");
// let numeroNumber = Number(numero);
// console.log(Number.isNaN(numeroNumber)); //funcion Number.isNaN para validad si no es un numero valor ingresado
// if (numeroNumber%2 == 0) {
//     alert("el número " +numeroNumber+ " es par");
// }
// else{
//     alert("el número " +numeroNumber+ " es impar");
// }
/*
let usuario = "gustavo";

if (usuario == "Cecilia") {
    console.log("Bienvenida "+usuario);
}
else if (usuario == "Luciana") {
    console.log("Bienvenida "+usuario);
}
else if (usuario == "Gustavo") {
    console.log("Bienvenido "+usuario);
} 
else if (usuario == "Joel") {
    console.log("Bienvenido "+usuario);
} 
else{
    alert("Tu nombre no esta registrado");
}
console.log('21' == 21);
console.log('21' === 21);
*/

// let seguir = confirm("¿Desea seguir navegando?");
// if (seguir) {
//     alert("Muy bien, gracias por preferirnos");
// }
// else {
//     alert("Salir, gracias por visitarnos");
// }

//crea un script para generar una piramide

//1
//12
//123
//1234
/*
let num = '  1';
console.log(num);
num = num+2;
console.log(num);
num = num+3;
console.log(num);
num = num+4;
console.log(num);
num = num+5;
console.log(num);
*/
/*
console.log('  1  ');
console.log(' 123  ');
console.log('12345  ');
*/

 /**array */
 //formas de declarar un array
 let alumno = []; //vacio
 let array = ['Luis', 'González', 34, 'Paraguay 930', true];  //inicializado con valores
 array [5] = "Juana";
//  console.log(array[2]);
console.log(array);
// array [array.length] = "otro valor nuevo";
array [30] = "otro valor nuevo";
console.log(array);

let numeros = [14,25,36,48,78];
let nombres = ["Juan", "Luciana", "Gonzalo"];
console.log("Hola soy "+nombres[0]+" y tengo " +numeros[2]+ " años");

//almacenando datos nuevos con funcion push
nombres.push("Gustavo");
nombres.push("otro nombre");
console.log(nombres);
//para eliminar ultimo dato almacenado con funcion pop
nombres.pop();
console.log(nombres);

