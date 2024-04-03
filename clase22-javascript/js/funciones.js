//crear aplicacion que tenga una calculadora
/*
let num=4;
let num2=3;
let suma= num+num2;

document.write("El resultado de la suma de: "+num+" y "+num2+" es: "+suma);
*/
//para evitar repetir la suma muchas veces en caso de lo q ue necesite uso funciones

//palabra reservada function nombre (parametro si es que hay){ instrucciones }
//declaracion de la funcion como primer paso
function suma(num, num2) {
    let resultado = num+num2;
    return "El resultado de la suma de: "+num+" y "+num2+" es: "+resultado
}
function resta(num, num2) {
    let resultado = num-num2;
    return "El resultado de la resta de: "+num+" y "+num2+" es: "+resultado
}
function multi(num, num2) {
    let resultado = num*num2;
    return "El resultado de la multiplicacion de: "+num+" y "+num2+" es: "+resultado
}
function div(num, num2) {
    let resultado = num/num2;
    return "El resultado de la division de: "+num+" y "+num2+" es: "+resultado
}

//invocar o llamar a la funcion como segundo paso
/*
alert("Hola");
console.log("Hola");*/
// suma(4,7);
//en document write puedo usar codigo html
document.write("<p>"+suma(4,7)+"</p>");
document.write(resta(4,7));
document.write("<p>"+multi(4,7)+"</p>");
document.write("<p>"+div(4,7)+"</p>");

//metodo: función  guardada dentro de objeto como valor de una propiedad

let mouse ={
    color:"verde",
    cable:true,
    moverCursor:function () {
        alert("se movió el mouse");
    }
}
//como accedo al metodo
mouse.moverCursor()

