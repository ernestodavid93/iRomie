let productos;
const URL_MAIN = 'http://localhost:8081/api/propiedades/';

function addItem(listItems){

    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {

            productos=json;


    Array.from(json).forEach((p, index) => {

    const cardSli = document.createElement("li");
    cardSli.setAttribute("class", "item");
    cardSli.innerHTML =
    `
    <!--product-box-->
    <div class="product-box">
      <!--Imagen-->
      <img src="/img/${p.foto}" class="cardImg img-fluid" alt="...">

      <!--Cuerpo de la tarjeta-->
      <div class="card-body">
        <h5 class="card-title">Precio $${p.precio} MXN</h5>
        <div class="row">
            <div class="col-sm">
              <i class="fas fa-bed">${p.habitaciones}</i>
            </div>
            <div class="col-sm">
              <i class="fas fa-bath">${p.banios}</i>
            </div>
            <div class="col-sm">
              <i class="fas fa-car">${p.cochera}</i>
            </div>
        </div>
        <br>
        <p class="fas fa-map-marker-alt">${p.direccion}</p> 
        <p class="card-text fas fa-house">${p.descripcion}</p>
        <p class="cardL"><small >Last updated 3 mins ago</small></p>
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary " id="btnVer_${p.id}" onclick="view(${index});">Ver</button>
            
        </div>
      </div>
    </div>`;
    const $listItem = document.getElementById("listItems");
    $listItem.appendChild(cardSli);

    }); // foreach
        });//then
    }).catch(function (err) {
        console.log(err);
    });
    //console.log(document.getElementById("item"));

}// addItem

window.addEventListener("load", function (){
    let div = document.getElementById("item");
    addItem(div);
   
});


function view(index) {
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML=productos[index].nombre;
    document.getElementById("productBodyModal").innerHTML=`${productos[index].descripcion}  <img class="bd-placeholder-img card-img-top" role="img" src="img/${productos[index].foto}" />
    <strong>$ ${productos[index].precio} MXN<strong>`;
    $("#productModal").modal("show");
    
}// view
<<<<<<< HEAD


=======
>>>>>>> 025dcbb46b2a48bf984e4fc41828d13c86ee3f75
