console.log("estamos en node");
const PI =3.1416;
const numeros =[];
numeros.push(14);
console.log(numeros);
const alumno ={};
alumno.nombre="gustavo";
console.log(alumno);
const suma = (a,b)=>a+b
console.log(suma(4,3));
//template string
let saludo = `Hola, ${alumno.nombre}`;
console.log(saludo);
//objetos literales
const obj = {
    nombre: "Mi nombre",
    apellido: "Mi apellido",
    dni:12354689,
    direccion:{calle:"mi calle", altura:"mi numero",piso:"mi piso"},
    equiposFavoritos:["equipo1","equipo2"],
    mostrarNombreCompleto:function () {
        return `${this.nombre} ${this.apellido}`
    }
}
obj.nombre="Luis";
console.log(obj.mostrarNombreCompleto());

//metodos de array

const alumnos =["Luciana","Gustavo","Joel","Joel","Alberto"]
const buscarAlumno = alumnos.find(function (alumno) {
    return alumno ==="Luciana"
})
console.log(buscarAlumno);
/*
console.log(obj);
console.log(numeros.reverse());*/

let misNumeros=[14,5,6,9,7,8,4]
function potencia() {
    return misNumeros.map(numero=>numero*numero)
}
console.log(potencia());

function Name(nombre) {
    this.nombre=nombre
    
}

const miName=nombre=>`Hola como te va mi nombre es ${nombre}`
console.log(miName("LUis"));
let alum =new Name("Julián");


console.log(alum);
let objeto = new Object();
objeto.id=89
console.log(objeto);
objeto.activo=true

if (objeto.activo) {
    console.log("Esta permitido entrar al sitio");
}else{
    console.log("No estás activo comunicate con el administrador");
}
let activo=objeto.activo
console.log(activo?"Esta permitido entrar al sitio":"No estás activo comunicate con el administrador");