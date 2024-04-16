//juego de 3 en linea
//5. capturamos el padre del div principal 
document.body.style.display="flex";
document.body.style.justifyContent="center";

// 1. capturamos el div con el id contenedor
let tablero = document.getElementById("contenedor");

//2. le colocamos estilo
tablero.style.backgroundColor="black";
tablero.style.width="450px";
tablero.style.height="450px";
tablero.style.display="flex";
tablero.style.flexWrap="wrap";
tablero.style.boxSizing="border-box";

//13. creamos un array de cuadros multidimensional
//cada null representa un cuadro

let arrayCuadros = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

//3. creamos 9 divs dentro de div principal
//7. onclick con funcion jugar nos mostrara un alert cada vez que apretemos sobre un cuadro
//8. colocar id a div cuadro
//9. para agregar un numero a cada cuadro y que se vaya incrementando scamos del for el index y usamos template strings
//10. colocamos this dentro de jugar para hacer referencia a cada elemento del tablero
for (let i = 0; i < 9; i++) {
    tablero.innerHTML+=`<div id='cuadro${i}' onclick='jugar(this)' class='cuadro'></div>`;
}

//4. colocamos estilo a los divs,primero capturamos los div y los recorremos con un for

let cuadros = document.getElementsByClassName("cuadro");

for (let index = 0; index < cuadros.length; index++) {
    cuadros[index].style.backgroundColor="white";
    cuadros[index].style.width="148px";
    cuadros[index].style.height="148px";
    cuadros[index].style.border="1px solid yellow";
    cuadros[index].style.fontSize="120px";
    cuadros[index].style.display="flex";
    cuadros[index].style.justifyContent="center";
    cuadros[index].style.alignItem="center";
}

//12. necesitamos crear una variable y que se cambie al hacer click con una funcion
let letra= "X";

function cambiarLetra() {
    if (letra=="X") {
        letra = "O";
    }else{
        letra ="X";
    }
}

//6. creamos una funcion para que al hacer clic nos muestre una x o una O
//11. estamos indicando el objeto o es decir cada cuadro, y queremos ver en el aler el id del objeto
function jugar(o){
    //capturamos el id del elemento
    let elemento = document.getElementById(`${o.id}`);
    //o.id.length-1 accede al ultimo valor del id que seria el numero
    //13. para saber a que numero de cuadro le estamos dando click hacemos un log y luego creamos variable
    //14. creamos un switch que va a ir asignando el valor del cuadro ya sea X u O 
    //15. deshabilitar cuadro al hacer click para que no cambie la letra una vez clickeado
    let cuadro = o.id[o.id.length-1];
    switch (cuadro) {
        case '0':
            if (arrayCuadros[0][0]!=null) {
                //esto hace que se salga de toda la funcion
                return false;
            }else{
                arrayCuadros[0][0]=letra;
            }
            break;
        case '1':
            if (arrayCuadros[0][1]!=null) {
                return false;
            }else{
                arrayCuadros[0][1]=letra;
            }
            break;
        case '2':
            if (arrayCuadros[0][2]!=null) {
                return false;
            }else{
                arrayCuadros[0][2]=letra;
            }
            break;
        case '3':
            if (arrayCuadros[1][0]!=null) {
                return false;
            }else{
                arrayCuadros[1][0]=letra;
            }
            break;
        case '4':
            if (arrayCuadros[1][1]!=null) {
                return false;
            }else{
                arrayCuadros[1][1]=letra;
            }
            break;
        case '5':
            if (arrayCuadros[1][2]!=null) {
                return false;
            }else{
                arrayCuadros[1][2]=letra;
            }
            break;
        case '6':
            if (arrayCuadros[2][0]!=null) {
                return false;
            }else{
                arrayCuadros[2][0]=letra;
            }
            break;
        case '7':
            if (arrayCuadros[2][1]!=null) {
                return false;
            }else{
                arrayCuadros[2][1]=letra;
            }
            break;
        case '8':
            if (arrayCuadros[2][2]!=null) {
                return false;
            }else{
                arrayCuadros[2][2]=letra;
            }
            break;
        
        default:
            break;
    }

    elemento.innerText=letra;
    //llamamos al metodo despues de colocar la letra
    cambiarLetra();
    //vamor a imprimir el array cada vez que se ejecute con valores almacenados previamente dados por el switch
    console.log(arrayCuadros); 
}






