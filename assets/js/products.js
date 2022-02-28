let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN ='http://localhost:8081/api/propiedades/';
function addItems(div_Productos) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {
            console.log(json);
            console.log(json.length);
            productos=json;
            Array.from(json).forEach((p, index) => {
                div_Productos.innerHTML += `
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="bd-placeholder-img card-img-top" role="img" src="/img/${p.foto}" />
                            <p class="card-text"><strong>${p.nombre}</strong></p>
                            
                            <p class="card-text">Baños: ${p.banios}</p>
                            <p class="card-text">Habitaciones: ${p.habitaciones}</p>
                            <p class="card-text">Genero: ${p.genero}</p>
                            <div class="card-body">
                            <p class="card-text">Direccion: ${p.direccion}</p>
                            <p class="card-text">Municipio: ${p.municipio}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" id="btnVer_${p.id}" onclick="view(${index});">Ver</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                                    </div>
                                    <small class="text-muted">$ ${p.precio} MXN</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }); // foreach
        });//then
    }).catch(function(err) {
        console.log(err);
    });
    console.log(document.getElementById("div_Productos"));
   
}// addItems

window.addEventListener("load", function (){
    let div = document.getElementById("div_Productos");
    addItems(div);
   
});

function view(index) {
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML=productos[index].nombre;
    document.getElementById("productBodyModal").innerHTML=`${productos[index].descripcion}  <img class="bd-placeholder-img card-img-top" role="img" src="img/${productos[index].url_Imagen}" />
    <strong>$ ${productos[index].price} MXN<strong>`;
    $("#productModal").modal("show");
}// view