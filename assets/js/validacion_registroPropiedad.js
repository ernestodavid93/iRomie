//VALIDACION DEL FORMULARIO

const formulario = document.getElementById('new');
const inputs = document.querySelectorAll('#new select, input');

// const expresiones = {
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     telefono: /^\d{10}$/,  // 7 a 14 numeros.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     password: /^[a-zA-Z0-9\_\-]{8,16}$/ // /^.{8,12}$/ // 8 a 12 digitos.
// }

const campos = { //los campos por defecto seran false y mas adelante cambiaran a true si estan llenas
	nombre: false,
	precio: false,
	foto: false,
	direccion: false,
    municipio: false,
    banios: false,
    habitaciones: false,
    genero: false,
    cochera: false,
    descripcion: false
}


const validarFormulario = (e) => {
    
	switch (e.target.name) { //extrae el valor del name de cada input
		case "nombre":
			validarCampo(e.target, 'nombre');
		break;
		case "precio":
			validarCampo(e.target, 'precio');
		break;
		case "foto":
            validarCampo(e.target, 'foto');
		break;
		case "direccion":
			validarCampo(e.target, 'direccion');
		break;
		case "municipio":
			validarCampo(e.target, 'municipio');
		break;
        case "banios":
			validarCampo(e.target, 'banios');
		break;
        case "habitaciones":
			validarCampo(e.target, 'habitaciones');
		break;
        case "genero":
			validarCampo(e.target, 'genero');
		break;
        case "cochera":
			validarCampo(e.target, 'cochera');
		break;
        case "descripcion":
			validarCampo(e.target, 'descripcion');
		break;
	}
}

const validarCampo = (input, campo) => {
	if(input.value != ""){
        console.log("true")
        document.querySelector(`#grupo__${campo} i`).classList.remove('formulario__validacion-inactivo'); //desaparece el visibility para mostrar los siguientes icons
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

// //VALIDAR EL REPETIR CONTRASEÑA
// const validarPassword2 = () => {
// 	const inputPassword1 = document.getElementById('password'); //JALAMOS AMBOS PASSWORD
// 	const inputPassword2 = document.getElementById('password2');

// 	if(inputPassword1.value !== inputPassword2.value){ //COMPARAMOS si son distintos
        
//         document.querySelector(`#grupo__password2 i`).classList.remove('formulario__validacion-inactivo');
// 		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle'); //añade la tacha
// 		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');//borra la palomita
// 	/*	document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		*/campos['password'] = false; 
// 	} else {
//         document.querySelector(`#grupo__password2 i`).classList.remove('formulario__validacion-inactivo');
// 		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
// /*		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		*/campos['password'] = true;
// 	}

// 	if (inputPassword2.value == "") {
// 		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle'); //añade la tacha
// 	}
// }

inputs.forEach((input) => { //PARA HACER LA VALIDACION EN CADA INPUT AL PRESIONAR DENTRO Y FUERA 
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    //Si es correcto (true) todos los campos el mensaje aparecera activo
	if(campos.banios && campos.cochera && campos.descripcion && campos.direccion && campos.foto && campos.genero && campos.habitaciones && campos.municipio && campos.nombre && campos.precio){

		saveUsr();		
                                                                //añadir clase
		document.getElementById('formulario__mensaje-exito').classList.add ('formulario__mensaje-exito-activo');

		setTimeout(() => { //para despues definir el tiempo que durara el mensaje
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 2500);

		document.querySelectorAll('#new i').forEach((icono) => { //restablecer las flechas
			icono.classList.add('formulario__validacion-inactivo');
		}); 
		formulario.reset();
		campos.nombre = false;
		campos.precio = false;
		campos.foto = false;
		campos.direccion = false;
        campos.municipio = false;
		campos.banio = false;
		campos.habitaciones = false;
		campos.genero = false;
        campos.cochera = false;
		campos.descripcion = false;
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
	//ENVIO DE DATOS A LA BASE DE DATOS

    let nombre = document.getElementById("nombre");
    let precio = document.getElementById("precio");
    let foto = document.getElementById("foto");
    let direccion = document.getElementById("direccion");
    let municipio = document.getElementById("municipio");
    let banios = document.getElementById("banios");
    let habitaciones = document.getElementById("habitaciones");
    let genero = document.getElementById("genero");
    let cochera = document.getElementById("cochera");
    let descripcion =document.getElementById("descripcion")


    console.log(nombre.value);
    console.log(precio.value);
    console.log(foto.value);
    console.log(direccion.value);
    console.log(municipio.value);
    console.log(banios.value);
    console.log(habitaciones.value);
    console.log(genero.value);
    console.log(cochera.value);
    console.log(descripcion.value);

    ///// El siguiente código agrega un nuevo producto mediante un POST
const data = {
  
  nombre: nombre.value,
  precio: precio.value,
  foto: foto.value,
  direccion: direccion.value,
  municipio: municipio.value,
  banios: banios.value,
  habitaciones: habitaciones.value,
  genero: genero.value,
  cochera: cochera.value,
  descripcion: descripcion.value
  
  };

        fetch("http://localhost:8081/api/propiedades/", {
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

}; //saveUsr


// //ENVIO DE DATOS A LA BASE DE DATOS
// document.getElementById("btnSend").addEventListener("click", function(e){

//     let nombre = document.getElementById("nombre");
//     let precio = document.getElementById("precio");
//     let foto = document.getElementById("foto");
//     let direccion = document.getElementById("direccion");
//     let municipio = document.getElementById("municipio");
//     let banios = document.getElementById("banios");
//     let habitaciones = document.getElementById("habitaciones");
//     let genero = document.getElementById("genero");
//     let cochera = document.getElementById("cochera");
//     let descripcion =document.getElementById("descripcion")


//     console.log(nombre.value);
//     console.log(precio.value);
//     console.log(foto.value);
//     console.log(direccion.value);
//     console.log(municipio.value);
//     console.log(banios.value);
//     console.log(habitaciones.value);
//     console.log(genero.value);
//     console.log(cochera.value);
//     console.log(descripcion.value);

//     ///// El siguiente código agrega un nuevo producto mediante un POST
// const data = {
  
//   nombre: nombre.value,
//   precio: precio.value,
//   foto: foto.value,
//   direccion: direccion.value,
//   municipio: municipio.value,
//   banios: banios.value,
//   habitaciones: habitaciones.value,
//   genero: genero.value,
//   cochera: cochera.value,
//   descripcion: descripcion.value
  
//   };

// fetch("http://localhost:8081/api/propiedades/", {
// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })
// .then(response => response.text())
// .then(data => {
// console.log('Success:', data);
// })
// .catch((error) => {
// console.error('Error:', error);
// });


//   })
