// fetch("../data.json")
// .then(response=>response.json())
// .then()
// .catch()

let dataJson = {
    "usuarios":[
      {
        "nombre":"Luis Navas",
        "email":"lpipnavas@gmail.com",
        "clave":"123456"  
      },
      {
        "nombre":"Julián Alvarez",
        "email":"julianalvarez@gmail.com",
        "clave":"123456"  
      },
      {
        "nombre":"Messi",
        "email":"messi@gmail.com",
        "clave":"123456"  
      }
    ] 
};
//ingresamos en variable con objeto usuarios,al array en posicion de objeto numero 0 el cual tiene la propiedad email

// console.log(dataJson.usuarios[0].email);

//local storage

//setItem
//con JSON.stringify() convertimos un array u objeto de js en una cadenan json de string 
// localStorage.setItem('usuarios',JSON.stringify(dataJson));


//2. ocultar elemento de html excepto boton de ingresar 
//2.a mostrar estos solo si usuario y contraseña estan correctos

let vista = `
<h1 class="bg-dark text-center text-white m-3 p-3">Localstorage y formularios</h1>
<div class="row">
  <div class="col-6 d-flex justify-content-center">
  </div>
  <div class="col-6">
    <h2>Lista</h2>
  </div>
</div>
`;

//getItem
//1. capturamos datos del formulario en html
//1.a en funcion anonima colocamos e como parametro para manejar el evento

document.querySelector("#form").addEventListener("submit",function (e) {
  //1.b manejamos el evento que tiene por default el formulario q es enviar los datos
  e.preventDefault();
  //1.c capturamos los datos que ingresamos de los input con selector CSS
  // guardamos sus valores en variable email y clave
  let email = document.querySelector("input[name=email]").value;
  let clave = document.querySelector("input[name=clave]").value;
  //2.a recorremos el objeto
  //esto es igual a let data solo que esta hecho con arrow function
  /*
  dataJson.usuarios.find(usuario =>{
  //2.c validamos si datos ingresados son iguales a datos del objeto dataJson
    if (email == usuario.email && clave == usuario.clave) {
      ingresa = true;
      usuario= usuario;
    }
  });
  */
  //2.b recorremos datos del objeto con metodo find a ver si coinciden con datos ingresados
  //cada vez que recorra el array si encuentra coincidencia guardara el objeto en usu
  //2.c guardamos dentro de variable data el resultado de return usu y nos devolvera el objeto
  let data = dataJson.usuarios.find(function (usu) {
    if (email == usu.email && clave == usu.clave) {
      //nos guardara el objeto coincidente previamente guardado en usu en data
      return usu;
    }
  });
  
  //2.d validamos si data es distinta de undefined para que muestre lo que esta en vista y un alert
  //2.e caso contrario si data es undefined nos mostrara un alert
  if (data != undefined) {
    alert("Hola "+data.nombre+" te damos la bienvenida");
    //3. capturamos boton close  del formulario y agregar un evento .click
    let btn = document.querySelector("#btn-cerrar");
    //4.a llamamos a funcion p/que guarde bajo la clave usuario los valores de data
    guardarData("usuario",data);
    setTimeout(() => {
      document.querySelector(".container").innerHTML+=vista;
      btn.click();
    }, 2000);
  }else{
    alert("Los datos ingresados no son correctos");
  }
})
//4. guardar objeto dentro de local storage
// item representa a cada usuario y data son los valores dentro de cada usuario
//5.b creamos evento onload para llamar a funcion capturar data y la validamos
window.onload=function () {
  if (capturarData("usuario") != null) {
    let data = capturarData("usuario");
    let container = document.querySelector(".container");
    container.innerHTML+=vista;
    //6.para desloguearse y eliminar datos de local storage creamos boton primero
    //6.a agregamos evento onclick a boton cerrar
    container.innerHTML+="<button onclick='cerrar()' class='btn btn-primary' >Cerrar</button>";
    alert("Hola "+data.nombre+" te damos la bienvenida");
  }
}
//6.b creamos funcion cerrar
function cerrar() {
  window.localStorage.removeItem("usuario");
  alert("Gracias por tu visita!");
  //esto hara que desaparezca todo lo del container al hacer clic en cerrar
  document.body.innerHTML=`
  <div class="container">
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Ingresar
  </button>

</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="">
              <h1 class="text-center" >Ingresar</h1>
          </div>
          <div class="d-flex justify-content-end">
              <button type="button" class="btn  text-danger" data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div class="modal-body d-flex justify-content-center">
              <form action="" id="form" class="w-75 bg-dark bg-opacity-25" method="get">
                  <div class="m-4">
                      <label class="form-label" for="email">Email</label>
                      <input class="form-control" name="email" type="text" id="email">
                  </div>
                  <div class="m-4">
                      <label class="form-label" for="clave">Clave</label>
                      <input class="form-control" name="clave" type="password" id="clave">
                  </div>
                  <div class="m-4">
                      <button class="btn btn-dark bg-dark bg-opacity-50" type="submit">Ingresar</button>
                  </div>
              </form>
          </div>
          <div class="modal-footer">
              <button id="btn-cerrar" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
          </div>
      </div>
  </div>
</div>
  `;
}

function guardarData(item,data) {
  window.localStorage.setItem(item,JSON.stringify(data));
}
//5. si hay un item presente en el local storage le damos la bienvenida directamente al usuario
//5.a para eso creamos una funcion para recuperar o capturar esa data primero
function capturarData(item) {
  return JSON.parse(window.localStorage.getItem(item));
}



// console.log(JSON.stringify({nombre:"Luis", apellido:"Navas"}));
// console.log(JSON.parse(localStorage.getItem("usuario")));
