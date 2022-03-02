document.getElementById("btnS").addEventListener("click", function(e){

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let telefono = document.getElementById("telefono");
    let descripcion = document.getElementById("descripcion");
  

    console.log(username.value);
    console.log(password.value);
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(telefono.value);
    console.log(descripcion.value);
    

    ///// El siguiente código comprueba un usuario y pass mediante un POST
const data = {
  
  username: username.value,
  password: password.value,
  nombre: nombre.value,
  apellido: apellido.value,
  telefono: telefono.value,
  descripcion: descripcion.value,
  
  };

fetch("http://localhost:8081/api/user/", {
method: 'POST', // or 'PUT'
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify(data),
})
.then(response => response.text())
.then(data => {
console.log('Success:', data);
})
.catch((error) => {
console.error('Error:', error);
});

  })