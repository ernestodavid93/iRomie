const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{10}$/,  // 7 a 14 numeros.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9\_\-]{8,16}$/ // /^.{8,12}$/ // 8 a 12 digitos.
}

const campos = { //los campos por defecto seran false y mas adelante cambiaran a true si cumplen con las expresiones
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}


const validarFormulario = (e) => {
    
	switch (e.target.name) { //extrae el valor del name de cada input
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
        console.log("true")
        document.querySelector(`#grupo__${campo} i`).classList.remove('formulario__validacion-inactivo');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		campos[campo] = true; //cambiamos a true al cumplir con la expresion
	} else {
        console.log("false")
        document.querySelector(`#grupo__${campo} i`).classList.remove('formulario__validacion-inactivo');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
	/*	document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo'); 
		*/campos[campo] = false;  
	}
}

//VALIDAR EL REPETIR CONTRASEÑA
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password'); //JALAMOS AMBOS PASSWORD
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){ //COMPARAMOS si son distintos
        
        document.querySelector(`#grupo__password2 i`).classList.remove('formulario__validacion-inactivo');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle'); //añade la tacha
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');//borra la palomita
	/*	document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		*/campos['password'] = false; 
	} else {
        document.querySelector(`#grupo__password2 i`).classList.remove('formulario__validacion-inactivo');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
/*		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		*/campos['password'] = true;
	}

	if (inputPassword2.value == "") {
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle'); //añade la tacha
	}
}

inputs.forEach((input) => { //PARA HACER LA VALIDACION EN CADA INPUT AL PRESIONAR DENTRO Y FUERA 
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    //Si es correcto (true) todos los campos el mensaje aparecera activo
	if(campos.nombre && campos.password && campos.correo && campos.telefono){

		saveUsr();		
                                                                //añadir clase
		document.getElementById('formulario__mensaje-exito').classList.add ('formulario__mensaje-exito-activo');

		setTimeout(() => { //para despues definir el tiempo que durara el mensaje
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 2500);

		document.querySelectorAll('#formulario i').forEach((icono) => { //restablecer las flechas
			icono.classList.add('formulario__validacion-inactivo');
		}); 
		formulario.reset();
		campos.password = false;
		campos.nombre = false;
		campos.correo = false;
		campos.telefono = false;
       	//setInterval("location.reload()",2550); //recargar la pagina

	} else { //mensaje de campos incompletos
        
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

        setTimeout(() => { //definir el tiempo que durara el mensaje
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 3000);
	}
}); 

// Lista de Usuarios
//document.querySelector('#btnS').addEventListener('click', saveUsr);

function saveUsr() {
	var qNombre = document.querySelector('#txtName').value,
		qTelefono = document.querySelector('#txtPhone').value,
		qEmail = document.querySelector('#inputEmail3').value,
		qPass = document.querySelector('#password2').value;
	addUsr(qNombre, qTelefono, qEmail, qPass);

}; //fin lista usuarios 