//juego de preguntados

let preguntas= [
    {
      question: "Tiene el conocimiento y la experiencia necesaria para crear aplicaciones webs utilizando un stack de tecnologías.",
      choices: [
        "Developer Full Stack",
        "Developer Backend",
        "Developer Front End",
        "Developer Junior"
      ],
      answer: "Developer Full Stack"
    },
    {
      question: "Es la parte con la que interactua el cliente, es decir es la parte visual que utilizaran los usuarios y sus interacciones.",
      choices: ["Front End", "Backend"],
      answer: "Front End"
    },
    {
      question: "HyperText Markup Language: Define el significado y la estructura del contenido web",
      choices: ["Verdadero", "Falso"],
      answer: "Verdadero"
    }/*,
    {
      question: "Se utiliza para controlar el estilo y el diseño de las páginas web",
      choices: ["HTML", "JAVASCRIPT", "CSS", "Node"],
      answer: "CSS"
    },
    {
      question: "Lenguaje interpretado que se encargara de darle la funcionalidad a la página web",
      choices: ["HTML", "JAVASCRIPT", "CSS", "Node"],
      answer: "JAVASCRIPT"
    },
    {
      question: "Son herramientas que nos ayuda a optimizar el trabajo. Un marco de trabajo que nos brinda recursos para facilitarnos la creación de nuestra pagina",
      choices: ["FRAMEWORK", "HTML", "JAVASCRIPT", "CSS"],
      answer: "FRAMEWORK"
    },
    {
      question: "Es la parte que interactua con el servidor, hace de intermediario entre el front end y el servidor de base de datos.",
      choices: ["Front End", "Backend"],
      answer: "Backend"
    },
    {
      question: "Es un motor de ejecución de JavaScript que nos permite utilizar el lenguaje de programación javaScript en el backend",
      choices: ["Node", "Javascript", "CSS", "HTML"],
      answer: "Node"
    },
    {
      question: "¿Cuál es la diferencia principal entre un bucle for y un bucle while en JavaScript?",
      choices: [
       " a )El bucle for se utiliza para un número desconocido de iteraciones",
        " b ) El bucle while se utiliza cuando el número de iteraciones es conocido de antemano",
        " c ) Ambos bucles tienen la misma funcionalidad"
      ],
      answer: " b ) El bucle while se utiliza cuando el número de iteraciones es conocido de antemano"
    },
    {
      question: "¿Qué tipo de bucle se utiliza cuando el número de iteraciones es conocido de antemano?",
      choices: ["for", "while", "do while"],
      answer: "for"
    },
    {
      question: "Cómo se denomina la declaración utilizada para salir de un bucle antes de que se complete normalmente?",
      choices: ["continue", "exit", "break"],
      answer: "break"
    },
    {
      question: "¿Qué método se utiliza para crear un nuevo array aplicando una función a cada elemento del array original?",
      choices: ["concat", "map", "filter"],
      answer: "map"
    },
    {
      question: "¿Cuál es el método que invierte el orden de los elementos en un array?",
      choices: ["reverse", "flip", "invert"],
      answer: "reverse"
    },
    {
      question: "¿Qué método se utiliza para convertir un string a mayúsculas?",
      choices: ["toUpperCase", "upper", "capitalize"],
      answer: "toUpperCase"
    },
    {
      question: "¿Cuál es el método que retorna la posición de la primera ocurrencia de una subcadena en un string?",
      choices: ["locate", "find", "indexOf"],
      answer: "indexOf"
    }*/
  ]
// console.log(preguntas);


//6.d creamos variable global para seguir mostrando preguntas
let pregunta_numero = 0;

//7.creamos un modal dentro de una variable para mostrar resultados 
let modal=`   <!-- Button trigger modal -->
<div class="d-flex justify-content-center">
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Mostrar Resultados de las respuestas
</button>
<div>
<div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="text-center" id="exampleModalLabel">Comparación de respuestas</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <ul type="none" class="modal-b"></ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

//8. creamos una variable con un array para guardar las respuestas

let answers = [];
//10. creamos variable global vacia para guardar preguntas correctas

let answerCorrect = "";

//1. necesitamos mezclar las preguntas 
function mezclar (array) {
    //para que me tome las preguntas desde la ultima que es 14 hasta 0 en reversa
    //n= 14
    let n = array.length-1;
    //recorremos el array con un for
    for (let i = n; i >= 0; i--) {
        //para guardar un numero entero de forma aleatoria
        let aleatorio = Math.floor(i*Math.random());
        //almaceno valor de elemento actual original en posicion i en variable temp
        let temp = array[i];
        //reemplazo valor original de elemento en posicion i con nuevo valor  en posicion aleatoria
        array[i]=array[aleatorio];
        //asigna valor original de elmento en posicion i a elemento en  posicion aleatoria.
        array[aleatorio]=temp;
    }
    return array
}

// 2. guardamos dentro de array preguntas el array desordenado
preguntas = mezclar(preguntas);
// console.log(preguntas);

//3. crear estructura en html con bootstrap
//a.uso el evento onload para que una vez cargada la pagina se ejecute la funcion
//b.capturo solo div container para colocar preguntas de un lado y respuestas del otro lado
//6. agregamos evento onclick a boton e invocamos funcion siguiente()
//8.a agregamos un form dentro de div opciones con un id "form"
//8.b dentro de form al boton le colocamos tipo submit
//8.c agregamos un span despues de form y debajo agregamos un div con id answer

window.onload= function () {
    document.body.innerHTML=`
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h2 class="text-center bg-info bg-opacity-25">Pregunta</h2>
            <p id="question"></p>
          </div>
          <div class="col-6">
           <h2 class="text-center bg-danger bg-opacity-25">Opciones</h2>
           <form id="form">
             <ul id="choices"></ul>
             <button type="submit" class="btn btn-success" id="next">Siguiente</button>
           </form>
           <span></span>
           <div id="answer"></div>
          </div>
        </div>
      </div>
    `;
  //5. llamamos a funcion mostrar preguntas.
  //no se llama despues de creada la funcion porque no mostraria nada ya que se ejecutaria antes de window.onload
  //por esta razon se la llama aqui dentro
  //9. capturamos el formulario y agregamos el evento onclick por medio de addEventListener
  document.querySelector("#form").addEventListener("submit",function (e) {
    e.preventDefault();
    //if para validar si pregunta esta seleccionada o no y que se hace de acuerdo a eso
    
    //capturamos pregunta e imprimimos en consola solamente el texto 
    let question = document.querySelector("#question");
    // console.log(question.innerText);
    //capturamos input y con el :checked capturamos opcion seleccionada
    let input = document.querySelector("input[name=answer]:checked");
    // guardamos la respuesta correcta capturando su id
    let answer = document.querySelector("#answer");
    //con el .value en consola nos mostrara el valor del input seleccionado
    // console.log(input.value);
    //con if validamos si respuesta esta seleccionada o no x medio del input
    if (input != null) {
      //para que siga añadiendo preguntas 
      pregunta_numero++;
      //guardamos valores de pregunta y mi respuesta dentro de array como objetos 
      answers.push({
        question:question.innerText,
        myAnswer:input.value,
        answer:answer.innerText})
      //validamos con un if el corte para mostrar 
      if (pregunta_numero < preguntas.length) {
        //mientras no pase la longitud seguira mostrando preguntas
        mostrarPregunta(pregunta_numero)
      }else{
        //validamos las respuestas que tengo seleccionadas contra las respuestas correctas
        //mostrar resultados finales con un modal
        alert("Terminaste la prueba")
       //15. validamos opciones seleccionadas por medio de una funcion que llamamos aqui
        validarRespuestas();
      }
    }else{
      //capturamos el span del div y colocamos dentro un div que avise en caso de no seleccionar respuesta 
      document.querySelector("span").innerHTML=`
      <div class="m-3 text-danger">
      Debes de elegir una opción
      </div>
      `;
    }
  })

  mostrarPregunta(pregunta_numero)
}

//4. necesitamos capturar elemento p del DOM con id question
//a. creamos funcion para ir mostrando las preguntas

function mostrarPregunta(index) {
    //b.capturamos dentro de variable el elemento p con id question
    let question = document.querySelector("#question");
    //c.capturamos el elemento ul dentro con id choices dentro de variable
    let choices = document.querySelector("#choices");
    //11. almacenamos en variable dentro de array preguntas y en posicion index el objeto answer
    answerCorrect=preguntas[index].answer;
    //12. capturamos objeto answer por medio de su id en el div
    let answer = document.querySelector("#answer");
    //14. ocultamos respuesta correcta por medio de style
    answer.style.opacity =0;
    //13.por medio de innerHTML la respuesta correcta. esta se vera bajo el boton siguiente
    answer.innerHTML = answerCorrect;
    //f. mostramos dentro de question la pregunta x medio de innerHTML
    // accedemos a la propiedad question dentro cada objeto {}
    question.innerHTML=`${preguntas[index].question}`;
    //d.recorremos dentro de array de preguntas el array choices
    //dentro de choice se ira guardando cada opcion cada vez que se recorra el array
    //6 b. con este codigo limpiamos choices al hacer click hacia la siguiente pregunta
    choices.innerHTML="";
    preguntas[index].choices.forEach(function (choice,index) {
      //segundo parametro siempre es el indice 
      //e.cada vez que recorra el array choices ira agregando el si guiente codigo html gracias al +=
      //boton para seleccionar la opcion
      //value me guarda la opcion seleccionada en choice para luego compararla con la respuesta correcta
      //colocamos index como id y como valor para el for para que cada input sea especifico y correspondiente a cada label
      //  dentro de label va el texto de la opcion
      //para poder seleccionar opcion al hacer click en el texto de la opcion usamos el for
        choices.innerHTML+=`
        <li>
          <input id='${index}' type="radio" name="answer" value='${choice}'/>
          <label for='${index}'>
            ${choice}
          </label>
        </li>
        `
    })
}
//16. creamos funcion validarRespuestas

function validarRespuestas() {
  console.log(answers);
  let corrects = 0;
  let cantPreguntas = 0;
  let messageFinal = "";
  answers.forEach((response)=>{
    cantPreguntas++;
    if (response.answer==response.myAnswer) {
      corrects++;
      //para ir guardando en mensaje final respuesta correcta y la seleccionada
      messageFinal+=`
      <li class=" bg-success text-white p-4 m-4">
      ${response.question}<p>Tu respuesta: <strong>${response.answer}</strong></p>
      </li>
      `;
    }else{
      //esto es para guardar en mensaje final respuesta seleccionada incorrecta y mostrar respuesta correcta
      messageFinal+=`
      <li class=" bg-danger text-white p-4 m-4">
      ${response.question}<p>Tu respuesta: <strong>${response.myAnswer}</strong></p>
      <p>Respuesta correcta: <strong>${response.answer}</strong></p>
      </li>
      `;
    }
  })
  //19.hacemos desaparecer elementos del body finalizado el juego y abierto el modal 
  //19.a capturamos el body para eso y ocultamos elementos de preguntas y opciones
  let body = document.body;
  body.innerHTML=`
  <div class="d-flex justify-content-center">
    <div>
      <p class="m-4 p-3 bg-danger bg-opacity-25">
      Cantidad de preguntas: ${cantPreguntas} respuestas correctas: ${corrects}
      </p>
      <p class="m-4 p-3 bg-info bg-opacity-25">
      Tu porcentaje: ${corrects*100/cantPreguntas}%
      </p>
    </div>
  </div>
  `;
  //17.capturamos modal y lo mostramos
  body.innerHTML+=modal
  //18. capturamos elemento ul del modal y que muestre mensaje final
  document.querySelector(".modal-b").innerHTML+=messageFinal;
}
