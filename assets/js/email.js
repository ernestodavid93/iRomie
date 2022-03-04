const btn = document.querySelector('button')
const inputs = document.querySelector('form')

btn.addEventListener('click', () => {
    const nombre = (inputs.elements["nombre"].value).trim()
    const correo = (inputs.elements["correo"].value).trim()
    const mensaje = (inputs.elements["mensaje"].value.trim())
    const telefono = (inputs.elements["telefono"].value).trim()
    if (!nombre.length > 0 || !correo.length > 0 || !mensaje.length > 0 || !telefono.length > 0) {
        alert("Todos los campos son obligatorios")
        return
    }
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "6e05853e6064c3",
        Password: "f8cf8f8989aee2",
        To: "Rent.A.Home.E6@gmail.com",
        From: correo,
        Subject: "Contactanos",
        Body: mensaje + "<br>" + nombre + "<br>" + telefono + "<br>" +correo
    }).then(mensaje => alert("Mensaje enviado con éxito"))
})