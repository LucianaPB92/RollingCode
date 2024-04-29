//promesas
/*
let promesa = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        reject("No se cumplio la promesa");
    },2000)
})
console.warn(promesa);
*/
//promesa tiene 3 momentos : pending resolve reject

const heroesMarvel = [
    {
        nombre: "Iron Man",
        id: 1,
        poder: "Tecnología avanzada y armadura de combate"
    },
    {
        nombre: "Spider-Man",
        id: 2,
        poder: "Agilidad sobrehumana y sentido arácnido"
    },
    {
        nombre: "Thor",
        id: 3,
        poder: "Fuerza sobrehumana, control del trueno y martillo mágico"
    },
    {
        nombre: "Hulk",
        id: 4,
        poder: "Fuerza descomunal y regeneración rápida"
    },
    {
        nombre: "Black Widow",
        id: 5,
        poder: "Maestría en combate cuerpo a cuerpo y habilidades de espionaje"
    },
    {
        nombre: "Captain America",
        id: 6,
        poder: "Fuerza, agilidad y habilidades de liderazgo"
    },
    {
        nombre: "Black Panther",
        id: 7,
        poder: "Fuerza, agilidad y habilidades de lucha mejoradas por la tecnología de Wakanda"
    },
    {
        nombre: "Doctor Strange",
        id: 8,
        poder: "Maestría en artes místicas y manipulación de la realidad"
    },
    {
        nombre: "Captain Marvel",
        id: 9,
        poder: "Vuelo, fuerza sobrehumana y energía cósmica"
    },
    {
        nombre: "Scarlet Witch",
        id: 10,
        poder: "Manipulación de la realidad y habilidades telequinéticas"
    }
];

//creamos funcion y qe nos de datos por medio del id o el nombre   
/*
const buscarHeroeId=(id)=>heroesMarvel.find(heroe=>heroe.id==id);
// console.log(buscarHeroeId(10));

//creamos una funcion para la promesa

const buscarHeroe=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //creamos constante donde almacenamos heroe y llamamos a la fx buscarHeroe 
           const heroe = buscarHeroeId(id);
           //validacion con heroe
           if (heroe) {
            resolve(heroe)
           }else{
            reject ({msg:"No se encontro el héroe con ese Id"})
           }
        }, 2000);
    })
};
//llamamos a fx promesa
buscarHeroe(1)
.then((response)=>console.log(response))
.catch(error => console.error(error))
*/
let url = "https://backend-clase.onrender.com/api/products";
//capturamos div principal guardandolo en una variable
let principal = document.querySelector("#principal");

fetch(url)
//primer then para manipular los datos por medio de javascript
//segundo then para imprimir resultado en consola
.then(response=>response.json())
.then(data =>{
//recorremos data.productos con un forEach
data.productos.forEach((producto) => {
    principal.innerHTML+=`<li><img src="${producto.src}">${producto.name}</li>`;
});

})
.catch(error=>console.error(error));

