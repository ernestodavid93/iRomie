var checks = document.querySelectorAll('.form-check-input');
var boton = document.getElementById('btn1');

boton.addEventListener('click', function () {
    checks.forEach((e) => {
        if (e.checked == true) {

            console.log(e.id);
        }// if
    }); //foreach
});//boton listener
