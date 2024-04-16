// setInterval
/*
let time = 0;
setInterval(function () {
    time++
    console.log(time);
}, 1000);
*/
//clearInterval
/*
let time = 0;
let miTime = setInterval(function () {
    time++
    console.log(time);
    if (time == 10) {
        clearInterval(miTime)
    }
},1000)
*/
//set Timeout
/*
setTimeout(() => {
    console.log("Hola a todos");
    window.location.reload(true);
}, 2000);
*/
//capturando el elemento del DOM

//getElementById ('id');

let principal = document.getElementById("contenedor")
// console.log(principal); 

//podemos cambiar el contenido y agregar estilos 

principal.style.backgroundColor="red";
principal.style.color="white";
principal.style.display="inline";
//si no tenemos el position absolute no se movera el div, si lo sacamos no se solapara con el resto de los elementos
// principal.style.position="absolute";
principal.style.left="50px";
let posInicial=50;
function moverElemento() {
    //hacemos q corra el elmento 50px
    posInicial+=50;
    // estilo left sea igual a la posInicial y concatenamos posicion con px
    principal.style.left=posInicial+"px";
    console.log("moviendo el elemento");
}
//para que se mueva por cada segundo 50px
//si pongo los parentesis dentro me mostrara resultado, si no los pongo se ejecutara cada segundo la funcion
// setInterval(moverElemento,1000)
//otra forma de hacerlo es con una funcion anonima o callback
/*
setInterval(function () {
    moverElemento()
},1000);
*/

//objeto document
/*
for (let i = 0; i < 20; i++) {
    //agregamos 20 veces el elemento p
    document.body.innerHTML+="<p>Estamos agregando este elemento </p>";
}
*/
// querySelector ('#id');

// getElementByClassName ('classname');
let cajas = document.getElementsByClassName("caja");
console.log(cajas);

for (let index = 0; index < cajas.length; index++) {
    cajas[index].innerHTML="Hola a todos";
    
}

cajas[0].style.backgroundColor="red";
cajas[0].style.innerText="Hola a todos";
cajas[1].style.backgroundColor="yellow";
cajas[2].style.backgroundColor="blue";

//podemos hacer desaparecer elementos con set interval y opacity
let num = 1;
let opacidad = setInterval(() => {
    //disminuye variable en veinte milesimas 
    num-=.20;
    //este valor num va a ir cambiando la opacidad
    cajas[0].style.opacity=num;
    
    //cortamos el intervalo con el clear interval y num.toFixed (2) para que la comparacion sea precisa en dos decimales.
    if (num.toFixed(2)==0.2) {
        clearInterval(opacidad)
    }
}, 1000);

let numeroRandom =Math.random()*10
console.log(numeroRandom.toFixed(2));



