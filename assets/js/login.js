document.getElementById("btnLogin").addEventListener("click", function(e){

    let username = document.getElementById("username");
    let password = document.getElementById("password");
  

    console.log(username.value);
    console.log(password.value);
    

    ///// El siguiente código comprueba un usuario y pass mediante un POST
const data = {
  
  nombre: username.value,
  precio: password.value,
 
  
  };

fetch("http://localhost:8081/api/login/", {
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