// function addItemImg(itemImg){
//     const itemHTML =
//     '<img class="d-block w-100" src="'+itemImg.foto+'" alt="First slide"></img>';
//     // '<div class="" id="'+item.cartNu +'" style="width: 19rem;">';
// const itemsContainer = document.getElementById("item-img");
// itemsContainer.innerHTML = itemImgHTML;
// }

function addItem(item){


    //ENVIO DE TITULO
    const itemTitleHTML =
    '      <h2>'+item.titulo+'</h2><br><br>';
    const itemsContainerTitle = document.getElementById("item-title");
    itemsContainerTitle.innerHTML = itemTitleHTML;

    //ENVIO DE IMAGEN
    const itemImgHTML =
    '<img class="d-block w-100" src="'+item.foto+'" alt="First slide"></img>';
    const itemsContainerImg = document.getElementById("item-img");
    itemsContainerImg.innerHTML = itemImgHTML;

    //ENVIO DE DATOS

    const itemHTML =
    '<div class="" id="'+item.cartNu +'>\n'+
    '    <div class="card-body">\n'+
    '        <br><br>\n'+
    '      <h4><i>Precio: </i> '+item.precio+'</h4><br>\n'+
    '<h5> <i>Especificaciones: </i></h5><br>\n'+
    '      <div class="row">\n'+
    '          <div class="col-sm">\n'+
    '              <i class="fas fa-bed"> '+item.habitaciones+'</i>\n'+
    '            </div>\n'+
    '            <div class="col-sm">\n'+
    '              <i class="fas fa-bath"> '+item.sanitario+'</i>\n'+
    '            </div>\n'+
    '            <div class="col-sm">\n'+
    '              <i class="fas fa-car"> '+item.cochera+'</i>\n'+
    '            </div>\n'+
    '        </div>\n'+
    '        <br>\n'+
    '      <i class="fas fa-paw"> Si</i>\n'+
    '        <br><br>\n'+
    '        <p class="fas fa-map-marker-alt" style="color: black"> ' +item.ubicacion+'</p> \n'+
    '    <p class=" fas fa-house" style="color: black;"> '+item.descripcion+'</p>\n'+
    '    </div>\n'+
    '</div>';

const itemsContainer = document.getElementById("list-items");
itemsContainer.innerHTML = itemHTML;
    
}

addItem({

    'cartNu':'1',
    'titulo':'Habitacion cerca de chapu',
    'foto': './img/card1.jpg',
    'precio':'$4,999',
    'habitaciones':'1',
    'sanitario':'1',
    'cochera':'1',
    'ubicacion':'Justo Sierra no.145',
    'descripcion':'Habitacion de lugo con buena ubicacion'
    
});

// addItemImg({
//     'foto': './img/card1.jpg',
// });