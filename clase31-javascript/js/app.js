//CRUD
//trabajamos con clases

//1.reamos una clase empresa 
class Empresa {
    nombre;
    constructor(nombre){
        this.nombre=nombre;

    }
    recaudacionTotal(){
        
    }
    cantVecesRecorrida(){

    }
}

//2.creamos clase reserva

class Reserva extends Empresa{
    codigo;
    cantPasajeros;
    estacionInicial;
    estacionFinal;
    precioPorEstacion=70;
    constructor(nombre,cantPasajeros,estacionInicial,estacionFinal){
        super(nombre);
        this.codigo=Date.now();
        this.cantPasajeros=cantPasajeros;
        this.estacionInicial=estacionInicial;
        this.estacionFinal=estacionFinal;
    }
    //funcionalidad para capturar precio total de reserva
    capturarPrecio(){
        return this.cantPasajeros*(this.capturarDistancia(this.estacionInicial,this.estacionFinal)*this.precioPorEstacion)
    }
    capturarDistancia(inicio,fin){
        return Math.abs(inicio-fin)
    }
}
//4.creamos array vacio con reservas
let reservas = [];
/*
//3.creo reserva nueva
let reserva = new Reserva("Trenes Argentinos",3,9,1);
//5. guardamos reservas generadas dentro de array
//reservas.push(reserva);
//otra forma de guardar es de esta forma
reservas=[...reservas,reserva];
console.log(reservas);
//otra forma de guardar reserva es usando tambien el sprint operator y generando nueva reserva pasando datos
//asi como esta funciona perfectamente el date.now() pero en caso de no funcionar introducimos estas lineas en un set time out
setTimeout(() => {
    reservas = [...reservas, new Reserva("Trenes argentinos",5,1,9)];
    console.log(reservas);
}, 2000);
*/
//CREATE
//3. creamos una funcion para generar nueva reserva que se lallamo en boton de reservar viaje

function crearReserva() {
    //3.a capturamos elementos del DOM
    let pasajeros = document.querySelector("#pasajeros").value;
    let inicio=document.querySelector("#EstacionInical").value;
    let fin=document.querySelector("#EstacionFinal").value;
    //3.b creamos nueva reserva guardada dentro de variable rs
    let rs = new Reserva("Trenes Argentinos",Number(pasajeros),Number(inicio),Number(fin));
    //3.c propiedad adicional de instancia reserva en la qe obtenemos monto total de la reserva
    rs.monto=rs.capturarPrecio();
    //3.d propiedad adicional a rs para decir que la reserva al ser creada no esta cerrada todavia
    rs.cerrado=false;
    //3.e guardamos rs ademas de reservas previas en array reservas
    reservas=[...reservas,rs];
    //llamamos a la funcion mostrar reservas
    mostrarReservas(reservas)
}
//4. capturamos div root para mostrar reservas en html creando una funcion mostrarReservas

function mostrarReservas(array) {
    let elemento = document.getElementById("root");
    let titulo ="Reserva";
    elemento.innerHTML=`
    <table>
        <thead>
            <tr>
                <th>${titulo}</th>
                <th>Desde</th>
                <th>Hasta</th>
                <th>Monto</th>
                <th>Modificar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody id="cuerpo"></tbody>
    </table>
    `;
    //4.a llamamos a funcion capturarData que tome como parametro el array
    capturarData(array);
}

//4.b creamos funcion capturar data que tenga como parametro params que seria el array 
//READ porque leemos datos del array reservas 

function capturarData(params) {
    //4.c capturamos tbody de tabla de arriba
    let cuerpo = document.querySelector("#cuerpo");
    //6.e con esto limpiamos codigo y evitamos duplicar acciones,agregamos un span con un loader(indicador de carga)
    cuerpo.innerHTML=`<span class="loader"></span>`;
    //6.f retrasar ejecucion del codigo por dos segundos
    setTimeout(()=>{
        //limpia el contenido del cuerpo nuevamente y desaparece el indicador de carga 
        cuerpo.innerHTML="";
        //4.d recorremos el array reservas bajo nombre de params y por cada item guardamos los valores correspondiente a cada th    
        params.forEach((item)=>{
            cuerpo.innerHTML+=`
            <tr>
                <td class="${item.cerrado?"cerrado":"abierta"}">${item.codigo}</td>
                <td>${capturarNombre(item.estacionInicial)}</td>
                <td>${capturarNombre(item.estacionFinal)}</td>
                <td>${item.monto}</td>
                <td><button class="btn btn-success" onclick="modificarData(${item.codigo})">Cerrar Viaje </button></td>
                <td><button class="btn btn-danger" onclick="del(${item.codigo})"> X </button></td>
            </tr>
            `;
        })
    },2000)
}
//UPDATE
//6. creamos funcion modificarData
//6.a agregamos boton para cerrar viaje en inner html de capturar data 
//6.b como parametro usamos la propiedad codigo que nos permite identificar cada una de las reservas

function modificarData(codigo) {
    //6.c en r se almacena cada una de las reservas que el forEach recorre  y en i nos guarda el index o posicion
    reservas.forEach((r,i)=>{
        if (r.codigo==codigo) {
            //con reservas en esa posicion i la propiedad cerrado se vuelve true y realmente se cierra reserva
            reservas[i].cerrado=true;
        }
    })
    //6.d llamamos a capturarData asi se actualizen al hacer click en el boton
    capturarData(reservas)
}

//DELETE
//7.creamos funcion del y agregamos un boton para eliminar reserva en capturarData
function del(codigo) {
    //7.a creamos variable que almacenara resultado de filtrar array reservas
    let nuevaData=reservas.filter(r=>{
    //7.b r.codigo es cada codigo de cada reserva dentro del array
    //7.c si un r.codigo es distinto al codigo de la reserva que quiero eliminar retorna true o r
    //7.d excluye el codigo del array y al retornar true me guarda el o los codigos que sean distintos al que quiero eliminar en nueva Data
        if (r.codigo!=codigo) {
          return r  
        }
    })
    //7.e guardamos nuevaData en array reservas y actualizamos array
    reservas = nuevaData;
    //7.f llamamos a capturarData para que refresque y actualize la data y pasamos array modificado 
    capturarData(reservas)
}

//5.para que no nos muestre numeros en item. estacion final e inicial creamos funcion para capturar nombres de estas
//5.a llamamos a capturarNombre dentro de td de estacion inicial y final en funcion capturarData

function capturarNombre(num) {
    //vamos a recibir un numero de acuerdo a la estacion que elijamos
    switch (num) {
        case 1:
            return "Buenos Aires";
        case 2:
            return "Zarate";
        case 3:
            return "Rosario Sur";
        case 4:
            return "Rosario Norte";
        case 5:
            return "Galvez";
        case 6:
            return "Rafaela";
        case 7:
            return "Sunchales";
        case 8:
            return "La banda";
        case 9:
            return "San Miguel";
    
        default:
            break;
    }
    return 
}