var checks = document.querySelectorAll('.form-check-input');
var boton = document.getElementById('btn1');

boton.addEventListener('click', function () {
    checks.forEach((e) => {
        if (e.checked == true) {

            console.log(e.id);
        }// if
    }); //foreach
});//boton listener


// function chkLog() {
// 	//ENVIO DE DATOS A LA BASE DE DATOS

//     let username = document.getElementById("username");
//     let password = document.getElementById("password");
    


//     console.log(username.value);
//     console.log(password.value);
    

//    const login = {
  
//   username: username.value,
//   password: password.value
  
//   };
    
//     fetch('http://localhost:8081/api/login/',
//         {
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application/json',
           
//         }, 
//             body: JSON.stringify(login),
//         })
//         .then(response => response.json())
//         .then(login => {
//             console.log('Success:', login);
            
//         })
//         .catch((error) => {
//         console.error('Error:', error);
//         });

// }; //login