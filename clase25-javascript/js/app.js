//crear un juego
//notacion literal de objeto
const juego ={
    altura:'300px',
    ancho:'300px',
    personaje:[{visible:true,vidas:5,puntos:0}],
    enemigos:[{visible:true, animacion:true, resistencia:true}],
    saltar:function (p) {
        p.pos.y=+10; 
    },
    caminar:function (p) {
        p.pos.x=+10;
    }
}
//notacion constructora
//con funcion constructora
/*
function Clientes(nombre,apellido,direccion,telefono) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.direccion=direccion;
    this.telefono=telefono;
}
//creo objeto a partir de funcion, es decir instanciamos la funcion
let carmenRamirez = new Clientes("Carmen","Ramirez","Callao 530","1170314256");
//lamo al objeto en consola
console.log(carmenRamirez);
//para acceder a las propiedades en particular
console.log(carmenRamirez.apellido);
*/
//con el constructor object

const obj = new Object();
obj.name="Juego";
obj["numero"]=1425;
console.log(obj);

let juego2 = Object.create(obj);
juego2.name="Mario";
juego2.puntos=1232165;
console.log(juego2);

//clases

class Vehiculo{
    //ruedas,velocidades,volante
    constructor(ruedas,velocidades,volante){
        this.ruedas=ruedas;
        this.velocidades=velocidades;
        this.volante=volante;
    }
}

const vehiculo = new Vehiculo(4,5,true);
// console.log(vehiculo);

//creamos clases que hereden propiedades y metodos de clase padre

class Auto extends Vehiculo{
    constructor(ruedas,velocidades,volante,marca){
       super(ruedas,velocidades,volante);
       this.marca=marca;
    }
}

let auto = new Auto(4,5,true,"Renault");
console.log(auto);
let auto2 = new Auto(4,5,true,"Fiat");
console.log(auto2);
let auto3 = new Auto(4,5,true,"Chevrolet");
console.log(auto3);

class Moto extends Vehiculo {
    constructor(ruedas,velocidades,volante,marca){
        super(ruedas,velocidades,volante);
        this.marca=marca;
    }
}

let moto = new Moto (2,3,true,"Yamaha");
console.log(moto);

//clase con metodos

class Cafetera{
    static id=0;
    #azucar;
    constructor(cafe,agua){
        this.cafe=cafe;
        this.agua=agua;
        Cafetera.id=Cafetera.id+1;
        this.id=Cafetera.id;
        this.#azucar=2;
    }
    prepararCafe(){
        if (this.cafe) {
            if (this.agua) {
              return "Espere un momento, su café se está preparando con "+this.#azucar+" cubos de azúcar";  
            }else{
                return "No tiene agua!"
            }
        }else{
            return "No tiene café!"
        }
    }
    agregarCafe(){
        // this.cafe=true;
        //cambiamos valor de this cafe con prop privada e invertimos valor recibido
        this.cafe=this.#cambiarValor(this.cafe)
        return "Se está agregando café"
    }
    agregarAgua(){
        this.agua=true;
        return "Se está agregando agua"
    }
    agregarAzucar(){
        this.#azucar=this.#azucar+1;
        return "Se está agregando un cubo de azúcar"
    }
    #cambiarValor(val){
        //el valor recibido lo invertira y lo devolvera al revez
        return !val
    }
}

let cafe = new Cafetera (true,false);
let cafe2 = new Cafetera (false,true);

console.log(cafe.prepararCafe());
console.log(cafe.agregarAgua());
console.log(cafe.agregarAzucar());
console.log(cafe.prepararCafe());
//nos aparecera el valor de id a traves del objeto
// console.log(cafe.id);
//nos aparecera el objeto con el id dentro
// console.log(cafe);
//para poder mostrar propiedad encapsulada id en la consola
// console.log(Cafetera.id);
//me retornara false porque puse como valor false
console.log(cafe2.prepararCafe());
//me retornara true porque se invierte valor con prop privada
console.log(cafe2.agregarCafe());
//agregamos azucar y se sumara 2 cubo de azucar aparte de los 2 que vienen x defecto
console.log(cafe2.agregarAzucar());
console.log(cafe2.agregarAzucar());
//retornara el proceso de la preparacion de cafe 2 con 4 cubos de azucar
console.log(cafe2.prepararCafe());

class Empresa {
    #cuil;
    #nombre;
    #telefono;
    #direccion;
    #codigoP;
    constructor(cuil,nombre,telefono,direccion,codigoP){
        this.#cuil=cuil;
        this.#nombre=nombre;

    }
    getCuil(){
        return this.#cuil;
    }
    getNombre(){
        return this.#nombre;
    }
    setCuil(cuil){
        this.#cuil=cuil;
    }
    setNombre(nombre){
        this.#nombre=nombre;
    }
}

let empresa = new Empresa(283645698,"Rolling Code");
console.log(empresa.getCuil());
//con esto cambiamos el valor del cuil
empresa.setCuil(2345368759)
console.log(empresa.getCuil());
console.log(empresa.getNombre());
