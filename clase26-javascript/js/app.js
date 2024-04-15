//metodos callbacks

//foreach

// let alumnos = ["Juan", "Alberto","Cecilia", "Felipe","Diego"];
// alumnos.push("Ignacio");
// alumnos = [...alumnos,"Lautaro"];
// console.log(alumnos);

//para recorrer el array usariamos un for
/*
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}
console.log("Con el forEach");
*/
//recibe una fx arrow o una funcion comun
/*
alumnos.forEach(function (alumno) {
    console.log(alumno);
})
*/
//podemos hacer copia original del array alumnos con el forEach con la funcion arrow

// alumnos.forEach(alumno=>console.log(alumno));

// metodo filter 
/*
let nuevoArray = alumnos.filter(alumno=>{
    if (alumno != "Lautaro") {
        return alumno;
    }
});
console.log(nuevoArray);
*/
/*
let numeros = [45,78,43,24];
let num=0;

let suma = numeros.filter(numero=>{
    num=num+numero;
    return num;
});
console.log(num);
*/
//otra forma de hacerlo mas apropiada es con el metodo reduce
/*
let suma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, num);

console.log(suma);
*/
//otra forma de escribirlo

// let suma = numeros.reduce((acumulador, numero)=>acumulador+numero,num)
// console.log(suma);


//metodo find

// console.log(alumnos.find(alumno=>alumno=="Felipe"));
// console.log(numeros.find(numero=>numero==24));

// diferencias entre find y filter
// console.log(numeros.find(numero=>numero>30));
// console.log(numeros.filter(numero=>numero>30));

// //metodo map
// console.log(numeros.map(numero=>numero>30));

// asi me crea una copia original del array
// console.log(numeros.map(numero=>numero));
// console.log(numeros.filter(numero=>numero));

//como usamos todos estos metodos en estas clases
//encuesta recibe varias preguntas de un array
class Encuesta {
    constructor(preguntas){
        this.preguntas=preguntas
    }
    mostrarPreguntas(){
        //para recorrer array de preguntas
       this.preguntas.forEach((pregunta,i) => {
        //uso el index i para que me diga que numero de pregunta es y +1 para que comienze desde 1 en adelante
            console.log(`${i+1}. ${pregunta.texto}`);
            // console.log((i+1)+" ."+pregunta.texto);
       });
    }
}
//propiedad de pregunta es el texto dentro
class Pregunta{
    constructor(texto){
        this.texto=texto;
    }
}

class PreguntaAbierta extends Pregunta{
    constructor(texto){
        super(texto);
    }
}
// let PreguntaAbierta1 = new Pregunta("¿Cuantos numeros hay?","Texto respueta 1")

//
class PreguntaOpcionMultiple extends Pregunta {
    constructor(texto,opciones){
        super(texto);
        this.opciones=opciones;
    }
    mostrarOpciones(){
        console.log("opciones");
        this.opciones.forEach((opcion,index) => {
            console.log(`${index+1}. ${opcion}`);
        });
    };
   
}
// let opcion = new PreguntaOpcionMultiple(false,true)
// console.log(opcion.Mostrarrespuesta1());
// console.log(PreguntaAbierta1);

let pregunta1 = new PreguntaAbierta("¿Cuál es su nombre?");
let pregunta2 = new PreguntaOpcionMultiple("¿Cuál es su color favorito de las siguientes opciones?", ["Rojo","Verde","Azul"]);
let encuesta = new Encuesta([pregunta1,pregunta2])
//mostramos las preguntas
encuesta.mostrarPreguntas();
//mostramos las opciones de pregunta opcion multiple que seria pregunta2
pregunta2.mostrarOpciones();









