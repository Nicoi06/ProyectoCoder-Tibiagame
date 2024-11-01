let bienvenida = "Bienvendos";
console.log(bienvenida);

function loguear () 
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("contrasenia").value;

if (user== "nicolas" && pass== "nico123")
{
        window.location.href= "index.html";
}
else 
{
    alert ("datos incorrectos")
}


}