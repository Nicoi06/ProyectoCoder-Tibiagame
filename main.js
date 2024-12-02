// let bienvenida = "Bienvendos";
// console.log(bienvenida);


// // const
// //     $login = document.getElementById("login"),
// //     $username = document.getElementById("usuario"),
// //     $password = document.getElementById("contrasenia");

// // // if (user== "nicolas" && pass== "nico123")
// // // {
// // //         window.location.href= "../shop.html";
// // // }
// // // else 
// // // {
// // //     alert ("datos incorrectos")
// // // }

// // document.addEventListener ("click", (e)=>{
// // if (e.target === $login()){
// //     if($password.value !== "" && $username.value !== ""){
// //         e.preventDefault();
// //         window.location.href= "/shop.html";
// //     }
// // }
// // })





// let resp = confirm("Ya estas registrado ?");
// if (resp) {
// //si ya tiene una cuenta
//     let usuario = prompt("Ingrese su usuario");
//     let user = buscar_usuario(usuario);

//     if (user) {


//         alert("Bienvenid@ " + user.nombre + " " + user.contraseña);

//     } else {

//         alert("El usuario no existe")
//     }
// } 

// else { 
//     let resp = confirm("click en register para registrarse");
    
//     if (resp) {
//         //si el usuario quiere registrarse
//         let user = prompt("Ingrese usuario");
//         let contraseña = prompt("Ingrese contraseña")
//         let nombre = prompt("Ingrese nombre");
//         let apellido = prompt("Ingrese apellido");
        

//         //se valida si involucro toda la data
//         let msj = checkear_datos(user, contraseña, nombre, apellido);

//         if (msj == "") {

//             //creo un nuevo usuario
//             let usuario_nuevo = new Usuario(user,contraseña,nombre,apellido);

//             //lo guardo en localstorage
//             guardar_usuario(usuario_nuevo);

            
//         }else{

//             alert(msj)
//         }



//     }

// }



// function buscar_usuario(user) {


//     if (!localStorage.getItem(clave_usuarios)) {

//         return false;
//     }


//     let almacenados = JSON.parse(localStorage.getItem(clave_usuarios));
//     let encontrado = false;
//     let i = 0;

//     while (!encontrado && i != almacenados.length) {

//         if (almacenados[i].usuario == user) {

//             encontrado = almacenados[i];
//             //encontrado = new Usuario(almacenados[i])
//         }

//         i++;


//     }


//     return encontrado;




// }

// function checkear_datos(user ,contraseña, nombre, apellido) {

//     let msj = "";

//     if ((user) && (contraseña) && (nombre) && (apellido)) {

//         if (isNaN(apellido)){

//             window.location.href= "shop.html";
//         }

//     } else {

//         msj = "Debes ingresar todos los datos. ";


//     }

//     return msj ;


// }

// function guardar_usuario(usuario){

//     let item = localStorage.getItem(clave_usuarios);

//     if (item){
//         //actualizo la coleccion guardada.

//         let almacenados = JSON.parse(localStorage.getItem(clave_usuarios));
//         almacenados.push(usuario);

//         let coleccion = JSON.stringify(almacenados);
//         localStorage.setItem(clave_usuarios,coleccion);


//     }else{

//         //almaceno la primera vez
//         let almacenados = new Array();
//         almacenados.push(usuario);

//         let coleccion = JSON.stringify(almacenados);
//         localStorage.setItem(clave_usuarios,coleccion);


//     }


// }

const user=JSON.parse(localStorage.getItem('login_sucess')) || false 
if (!user){
    window.location.href= 'login.html'

}
const logout = document.querySelector('#logout')
logout.addEventListener('click', ()=>{
    alert ('hasta pronto')
    localStorage.removeItem('login_sucess')
    window.location.href= 'index.html'
})