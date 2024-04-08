//objetos

//propiedades
/*distanciaARecorrer, bateria, estacion de carga*/
/*
let carMarte ={
// nombre:"carMarte",
    carga:100,
    cantRuedas:12,
    tamanioMaximoMuestra:20,
    distanciaGanchos:100,
    distanciaMaxima:9, //distancia maxima a recorrer quedando con 10% de bateria
    cargaXmetro:5, //porcentaje de carga que se gasta por metro
    //metodo con dos parametros
    recoleccionMuestra:function (tamanio, distancia) {
        if (tamanio<this.tamanioMaximoMuestra) {
            if (distancia<this.distanciaGanchos) {
                return "La recolección de la muestra está en proceso"
            }else{
                return "La distancia es mayor a la distancia máxima"
            }
        }else{
            return "El tamaño es mayor al tamaño máximo"
        }
    },
    //metodo con un parametro
    calcularDistanciaARecorrer:function (distanciaARecorrer) {
        if (distanciaARecorrer<=this.distanciaMaxima) {
            let distanciaReal = distanciaARecorrer*2;
            let calculoCarga = this.carga-(this.cargaXmetro*distanciaReal);
            //actualizamos la carga que estaba en 100 al valor calculado
            this.carga=calculoCarga;
            return this.carga;
        }else{
            return "La distancia a recorrer supera la máxima";
        }
        
       
    }
}
console.log(carMarte);
*/
//pasamos como valores la distancia a recorrer y el valor original de carga que es 100
// console.log(carMarte.calcularDistanciaARecorrer(9,carMarte.carga));
//imprimimos valor actual de carga 
// console.log(carMarte.carga);
//imprimimos respuesta para metodo recoleccion de muestra
// console.log(carMarte.recoleccionMuestra(18,50));

//agregar propiedad nueva una vez cerrado el objeto
// carMarte.name="carMarte";

//una forma nueva para acceder a valores de un objeto
// console.log(carMarte.name);
// console.log(carMarte["name"]);
//tambien podemos asignar desde aqui un nuevo valor
// carMarte["name"]= "robotMarte";
// console.log(carMarte["name"]);

//Create Read Update Delete
//create
// carMarte.hora = "21:00";
//Read
// console.log(carMarte.hora);
//eliminar 
// delete carMarte.hora;
//Update
// console.log(carMarte);

//recorrer las propiedades de un objeto
/*
for (const cantRuedas in carMarte) {
    if (Object.hasOwnProperty.call(carMarte, cantRuedas)) {
        console.log(carMarte[cantRuedas]);
       
    }
}
*/
//otra forma de recorrer un objeto es
/*
let carro = Object.keys(carMarte);
console.log(carro);

for (let i = 0; i < carro.length; i++) {
    console.log(carro[i]);
}
*/
//esta forma de crear un objeto como venimos viendo se denomina NOTACION U OBJETO LITERAL

let curso = {
    nombre: "React",
    dias:[
        "Lunes", 
        "Miercoles", 
        "Viernes"
    ],
    alumnos:[
        {
            nombre:"Lautaro", 
            apellido:"Biñon", 
            email:"lautaro@hotmail.com", 
            direccion:{
                calle:"Paraguay", 
                altura:100, 
                piso:1, 
                depto:"4E", 
                ciudad:"Lules", 
                provincia:"Tucumán"
            }
        }
    ],
    enviarEmail:function name() {
        //guardamos los alumnos en este array
        let alumnos = [];
        //recorremos array de alumnos dentro del objeto curso
        for (let i = 0; i < this.alumnos.length; i++) {
            //a medida que recorra el array alumnos ira almacenandolos en la posicion i
            alumnos.push(this.alumnos[i].email)
        }
        return alumnos;

    }
}
// console.log(curso.enviarEmail());

//forma de crear un objeto con una funcion constructora o notacion constructora 

function Alumno(nombre, apellido, edad) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}

const joel = new Alumno("Joel","Rodriguez",25);
console.log(joel);

//construir objeto por medio de constructor Object

let docente = new Object();
docente.nombre = "Ángel";
docente["edad"] = 29;
console.log(docente);

//otra forma con el mismo object

let tutor = Object.create(docente);
tutor.nombre ="Luis";
tutor.edad = 34;
console.log(tutor);

//no se puede comparar entre objetos,solo entre propiedades y si solo tienen mismo valor da true
console.log(tutor==docente);

//objetos globales
//Object, arrays, function, boolean, number
//objetos de utilidades
//Math, date, RegExp
//objeto de error
//error

//math
//si qeremos qe nos retorne un numero cualquiera
console.log(Math.random()*10);
//si qeremos qe nos retorne un numero entero cualquiera sin decimales
console.log(Math.floor(Math.random()*10));
