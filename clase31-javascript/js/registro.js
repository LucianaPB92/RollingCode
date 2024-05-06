/*
function registrarse(event) {
    event.preventDefault();
    let form = document.querySelector(".form");
    console.log(form);
}
*/
//2. creamos array vacio que contenga usuarios

let users = [
    {id:2, email:"lpipnavas@gmail.com",password:"123"}
];

//1.capturamos datos del form
let form = document.querySelector(".form");
let inputEmail =  document.querySelector("input[id=email]");
let mensaje =document.querySelector("#emailExiste");
//4. agreagamos un evento al input email para validar email
inputEmail.addEventListener("focusout",validarEmail)
form.addEventListener("submit",function (e) {
    e.preventDefault();
    let email = inputEmail.value;
    let password = document.querySelector("input[id=password]").value;
    console.log(email,password);
   
})

//CREATE


function validarEmail() {
    //capturamos valor de email al registrarse
    let email = inputEmail.value;
    //recorremos array users para validar si email ingresado es igual a alguno ya registrado
    users.forEach((user)=>{
        if(user.email== email){
            mensaje.innerText="El email existe!"
            setTimeout(()=>{
                mensaje.innerText=""
                inputEmail.value=""
            },2000) 
        }
    })
    
}
//3. creamos funcion crearUsuario

