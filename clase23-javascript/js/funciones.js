//declaramos la funcion de tipo "declarada"
/*
function calculadora(ope, num, num2) {
    // console.log(typeof ope, typeof num, typeof num2);
    switch (ope) {
        case '+':
            return num+num2;
        case '-':
            return num-num2;
        case '*':
            return num*num2;
        case '/':
            return num/num2;
        default:
            return "No es una operación válida"
            
    }
}
*/
//invocamos a la funcion declarada y tambien imprimimos el resultado
//calculadora('+', 14, 25);
/*
let resultado = calculadora('+', 14, 25);
console.log(resultado);
 */
//otra forma mas sencilla y con menos lineas es (es más recomendable usar el switch):
/*
function calculadora(ope, num, num2) {
    if (ope == '+') {
        return num + num2
    }else if (ope == '-'){
        return num - num2
    }else if (ope == '*'){
        return num * num2
    }else if (ope == '/'){
        return num / num2
    }else {
        return "No es una operación válida"
    }
}
//formas de imprimir el resultado:
let resultado = calculadora('+', 14, 25);
let resultado = calculadora('-', 14, 25);
let resultado = calculadora('*', 14, 25);
let resultado = calculadora('/', 14, 25);
console.log(resultado);

//segunda forma
console.log(calculadora('+',14,25));
console.log(calculadora('-',14,25));
console.log(calculadora('*',14,25));
console.log(calculadora('/',14,25));

 */

//métodos de arrays
/*
let numeros = [14,25,36,89,47,5,88,16];

function buscarEnArray(arr,valor) {
    return arr.includes(valor);
}
console.log(buscarEnArray(numeros,14));
*/
//otra forma de hacerlo es con un for dentro y que recorra el array hasta encontrar el valor
/*
function buscarEnArray(arr,valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == valor) {
            return true;
        }
    }
    return false;
}
console.log(buscarEnArray(numeros,14));
*/
//una vez declarada funcion puedo seguir usandola con otros arrays sin volver a declararla. es generica

// let nombres =["Luis", "Ángel", "Cecilia", "Alberto", "Gonzalo"];
// console.log(buscarEnArray(nombres, "Luis"));

//método para contar propiedades de objeto
/*
let alumno={
    nombre: "Felipe",
    edad: 25,
    apellido: "Sarco",
    direccion: "Tucumán"
}

function contarPropiedades(obj) {
    // return Object.keys(obj).length
    //si sacamos el .length nos devuelve el array de las propiedades
    // return Object.keys(obj)
    //si colocamos .entries en vez de .keys nos devolvera un array por cada propiedad
    return Object.entries(obj)
}
console.log(contarPropiedades(alumno));
*/
//metodo para juntar dos arrays
/*
function concatenarArrays(arr, arr2) {
    return arr.concat(arr2)
    //si quiero agregar un array en ultima de posicion de un array
    // return arr.push(arr2)
    
}

console.log(concatenarArrays(numeros,nombres));
*/
//si quiero agregar un array en ultima de posicion de un array
// concatenarArrays(numeros,nombres);
// console.log(numeros);

//método para obtener posicion de un valor dentro de array
// console.log(nombres.indexOf("Cecilia"));

//método para eliminar un valor dentro de un array 
/*
function eliminarRegistroArray(arr,valor) {
    //si esta o no el valor
    let esta = arr.includes(valor);
    // return esta
    if (esta) {
        //capturamos la posicion 
        let pos = arr.indexOf(valor)
        //metodo para eliminar el registro 
        arr.splice(pos,1)
        return arr
    }
}
*/
//si esta o no el valor
// console.log(eliminarRegistroArray(nombres,"Luis"));
// console.log(nombres);
// //metodo para desordenar u ordenar de manera alfabetica
// console.log(nombres.sort());
// //metodo para colocar nombres de manera inversa en lista
// console.log(nombres.reverse());

//método para encontrar en un array de objetos una propiedad, si existe o no
/*
const productos = [
    {nombre: "Manzanas", categoria: "Frutas", cantidad: 10 },
    {nombre: "Leche", categoria: "Lácteos", cantidad: 2 },
    {nombre: "Pan", categoria: "Panadería", cantidad: 5 },
    {nombre: "Zanahorias", categoria: "Verdulería", cantidad: 8 }
]

function esManzanas(fruta) {
    return fruta.nombre === "Manzanas"
}
console.log(productos.find(esManzanas));
*/
//métodos de strings

//para saber la longitud del string o cantidad de caracteres
// let str = "Hola como están?";
// console.log("La longitud del texto es "+str.length);
// //para saber la posicion  de un caracter
// console.log(str.indexOf("a"));
// //para buscar un termino dentro de un string
// console.log(str.search("como"));
// //para armar un string o cadena como un array
// console.log(str.split(" "));
// //para poner en mayusculas un string
// console.log(str.toLocaleUpperCase());
// //para poner en minusculas un string 
// console.log(str.toLocaleLowerCase());

//funciones declaradas

// console.log(saludar("Luis","Perez"));
/*
function saludar(nombre, apellido) {
    return nombre+" "+apellido;
}
*/
//funciones expresadas

let despedirse = function (nombre, apellido) {
    return "Adios "+nombre+" "+apellido;
}
console.log(despedirse("Luis","Perez"));