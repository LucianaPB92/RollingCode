// vimos bucles while do while for 
/*
let x = 0;
while (x < 10) {
    
    x++; //si pongo console log primero y despues el incremento me imprime variable 0 primero y despues el resto de los numeros, caso contrario toma desde el 1 
    console.log(x);
    
}
*/
/*
let a = 20;
do {
    a++
    console.log(a);
} while (a < 21);
*/
// for (variable inicial, condicion, incremento o decremento de variable){intrucciones o sentencias}
/*
for (let a = 0; a < 10; a++) {
    console.log(2*a);
    
}
*/
//arrays
//palabra reservada nombre operador de asignacion [valor,valor2...]

// let alumnos = ["Alberto", "Cecilia", "Diego", "Felipe", "Guillermo"]
// alumnos =["Lautaro"];
// console.log(alumnos.length);//para averiguar el largo del array
// alumnos [alumnos.length] = "Lautaro";//para poner en ultima posicion el nombre a partir del largo del array 
// alumnos [alumnos.length] = 123456;
// console.log(alumnos);
// alumnos.push("Luciana", "Juan", "Ignacio");

//objeto sirve para almacenar varios tipos de datos

//palabra reservada nombre operador de asignacion {clave:valor,...}

// let mouse = {color:"verde", cable:true, cantBotones:3}
// console.log(mouse);
// console.log(mouse.color);
/*
let curso = {
    nombre:"Html, css y Javascript",
    duracion:"3 meses", 
    horario:{
        hora:"19 a 21:30 hs", 
        dias:[
            "Lunes",
            "Miércoles"
        ]
    },
    docentes:["Luis","Angel"],
    alumnos:alumnos
}
console.log(curso.docentes[0]);
console.log(curso.docentes[1]);
*/
/*
for (let i = 0; i < curso.alumnos.length; i++) {
    console.log(curso.alumnos[i]);
    
}
for (let i = 0; i < curso.docentes.length; i++) {
    console.log(curso.docentes[i]);
    
}
*/
//tenemos la cafeteria y queremos mostrar los productos en la consola
/*
const cafeteria = [
    {nombre: "Café americano", categoria: "Bebida", cantidad: 20 },
    {nombre: "Croissant", categoria: "Alimento", cantidad: 15 },
    {nombre: "Tarta de manzana", categoria: "Postre", cantidad: 8 },
    {nombre: "Té verde", categoria: "Bebida", cantidad: 25 },
    {nombre: "Sandwich de pollo", categoria: "Alimento", cantidad: 10 },
    {nombre: "Brownie", categoria: "Postre", cantidad: 12 }
];
console.log(cafeteria);
for (let i = 0; i < cafeteria.length; i++) {
    console.log("producto:"+ cafeteria[i].nombre +" tipo:"+ cafeteria[i].categoria +" stock:"+ cafeteria[i].cantidad);   
}
*/
//crear un script para agregar mas productos
/*
const productos = [
    {nombre: "Manzanas", categoria: "Frutas", cantidad: 10 },
    {nombre: "Leche", categoria: "Lácteos", cantidad: 2 },
    {nombre: "Pan", categoria: "Panadería", cantidad: 5 },
    {nombre: "Zanahorias", categoria: "Verdulería", cantidad: 8 }
]
//primera forma para agregar al array en este caso un objeto en la ultima posicion
productos[productos.length] = {nombre: "Bananas", categoria: "Frutas", cantidad: 38 };
//metodo para agregar un elemento (objeto en este caso) al array en ultima posicion por medio de funcion push
productos.push({nombre: "Queso", categoria: "Lácteos", cantidad: 18 });
//siempre usamos dentro del array []el mismo tipo de datos
console.log(productos);
*/
//crear un script para guardar datos en el array productos con un prompt
//ventana emergente para confirmar si seguimos agregando o no
/*
let continuar = true;
do {
    continuar = confirm ("pulsa aceptar para agregar o cancelar");
// console.log(continuar);
// si el valor de continuar es true, es decir si aprieto aceptar en confirm se ejecuta el if
if (continuar) {
    let nombre = prompt("Ingresa el nombre");
    let categoria = prompt("categoría");
    let cantidad = Number(prompt("cantidad"));
    //con este if si no se completan los datos no se coloca en la lista
    if (nombre==null || categoria==null || cantidad==0 || Number.isNaN(cantidad)) {
        alert("Falta agregar alguno de los datos");
        continuar = confirm ("pulsa aceptar para agregar o cancelar");
    }else{
        productos.push({nombre:nombre, categoria:categoria, cantidad:cantidad})
    }
    
}
} while (continuar);
*/
// console.log(productos);

// let num = Number(prompt("ingrese su número"));
// console.log(num);// nos devuelve si el valor ingresado en NaN si ingresamos letras 
// console.log(Number.isNaN(num));//nos devuelve si es un numero o no como true o false

 
