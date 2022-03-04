var arr = [];

window.onload = cargarEventos;

function cargarEventos(){
    
    document.getElementById("mostrar").addEventListener("click", mostrarTabla, false);
    document.getElementById("new").addEventListener("submit", enviarTabla, false);
}

function mostrarTabla(){
  var cuerpo = document.getElementById('propiedades');
  var full = "";

  for (let index = 0; index < arr.length; index++) {
       full += "<tr></td>" + arr[index].name +"<tr></td>" + "<tr></td>" + arr[index].category +"<tr></td>"+ "<tr></td>" + arr[index].phone +"<tr></td>" + "<tr></td>" + arr[index].costo +"<tr></td>" + "<tr></td>" + arr[index].ubicacion +"<tr></td>"+ "<tr></td>" + arr[index].habitaciones +"<tr></td>" + "<tr></td>" + arr[index].reglas +"<tr></td>" + "<tr></td>" + arr[index].servicios +"<tr></td>" + "<tr></td>" + arr[index].descripcion +"<tr></td>"+ "<tr></td>" + arr[index].fotos +"<tr></td>";
      
  }
  cuerpo.innerHTML = full;
}

function enviarTabla(event){
    event.preventDefault();
    var nameAdd = document.getElementById("name").value;
    var cateAdd = document.getElementById("categoria").value;
    var phoneAdd = document.getElementById("telefono").value;
    var costoAdd = document.getElementById("costo").value;
    var ubiAdd = document.getElementById("ubicacion").value;
    var habAdd = document.getElementById("habitaciones").value;
    var reglasAdd = document.getElementById("reglas").value;
    var serviAdd = document.getElementById("servicios").value;
    var desAdd = document.getElementById("descripcion").value;
    var fotosAdd = document.getElementById("fotos").value;

    var property = { name: nameAdd, category: cateAdd, phone: phoneAdd, costo: costoAdd, ubicacion: ubiAdd, habitaciones: habAdd, reglas: reglasAdd, servicios: serviAdd, descripcion: desAdd, fotos: fotosAdd };
    arr.push(property);
    console.log(arr);
}
