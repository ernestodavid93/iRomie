document.getElementById("btnLogin").addEventListener("click", function(e){

    let username = document.getElementById("username");
    let password = document.getElementById("password");
  

    console.log(username.value);
    console.log(password.value);
    

    ///// El siguiente código comprueba un usuario y pass mediante un POST
const data = {
  
  username: username.value,
  password: password.value,
 
  
  };

  

fetch("http://localhost:8081/api/login/", {
method: 'POST', // or 'PUT'
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify(data),
})
// .then(response => response.json())
//   .then(data => {
//     console.log('Success', data);
//    window.location.href = 'explore.html'
// })
// .catch((error) => {
  
// });
  
   .then(function(response) {
     console.log('response =', response);
     if (response.ok == true) {
       window.location.href = 'explore.html'       
     }
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
  
  
})
  

