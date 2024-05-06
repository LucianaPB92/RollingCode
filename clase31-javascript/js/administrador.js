function leerUsuarios() {
    let usuarios =localStorage.getItem("usuarios");
    return JSON.parse(usuarios);
}

function crearUsuarios(data) {
    window.localStorage.setItem("usuario",JSON.stringify(data));
}

function modificarUsuarios(id, nuevosDatos) {
    let usuario = leerUsuarios;

}

function eliminarUsuario(id) {
    let usuarios = leerUsuarios();
    let nuevosUsuarios = usuarios.filter((usuario)=>{
        if (usuario.id != id) {
            return usuario;    
        }
    })
    crearUsuarios(nuevosUsuarios);
    mostrarUsuarios()
}

function mostrarUsuarios() {
    let adminRoot = document.getElementById("adminRoot");
    let usuarios = leerUsuarios();
    usuarios.array.forEach(usuario => {
        adminRoot.innerHTML+=`
        <li>${usuario.email} <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button></li>
        `
        mostrarUsuarios();
    });
   
}
mostrarUsuarios();