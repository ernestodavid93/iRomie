function addItem(item){
    const cardSli = document.createElement("li");
    cardSli.setAttribute("class", "item");
    cardSli.innerHTML =
    
    '<!--product-box-->\n'+
    '<div class="product-box">\n'+
    '  <!--Imagen-->\n'+
    '  <img src="'+item.foto +'" class="cardImg img-fluid" alt="...">\n'+

    '  <!--Cuerpo de la tarjeta-->\n'+
    '  <div class="card-body">\n'+
    '    <h5 class="card-title">Precio '+item.precio+'</h5>\n'+
    '    <div class="row">\n'+
    '        <div class="col-sm">\n'+
    '          <i class="fas fa-bed">'+item.habitaciones+'</i>\n'+
    '        </div>\n'+
    '        <div class="col-sm">\n'+
    '          <i class="fas fa-bath">'+item.sanitario+'</i>\n'+
    '        </div>\n'+
    '        <div class="col-sm">\n'+
    '          <i class="fas fa-car">'+item.cochera+'</i>\n'+
    '        </div>\n'+
    '    </div>\n'+
    '    <br>\n'+
    '    <p class="fas fa-map-marker-alt"> '+item.ubicacion+'</p> \n'+
    '    <p class="card-text fas fa-house"> '+item.descripcion+'</p>\n'+
    '    <p class="cardL"><small >Last updated 3 mins ago</small></p>\n'+
    '    <a href="./view.html" class="btn btn-primary">Ver mas</a>\n'+
    '  </div>\n'+
    '</div>';

    const $listItems = document.getElementById("listItems");
    $listItems.appendChild(cardSli);
}

addItem({
    'id':'1',
    'foto': './img/card1.jpg',
    'precio':'$4,999',
    'habitaciones':'1',
    'sanitario':'1',
    'cochera':'1',
    'ubicacion':'Justo Sierra no.145',
    'descripcion':'Habitacion de lujo con buena ubicacion'
});

addItem({
    'id':'2',
    'foto': './img/card2.jpg',
    'precio':'$3,999',
    'habitaciones':'2',
    'sanitario':'1',
    'cochera':'1',
    'ubicacion':'Av Calzada Independencia no.1245',
    'descripcion':'Departamento amueblado para estudiantes del CUAAD'
});

addItem({
    'id':'3',
    'foto': './img/card3.jpg',
    'precio':'$4,999',
    'habitaciones':'1',
    'sanitario':'1',
    'cochera':'0',
    'ubicacion':'Av Revolucion no.345',
    'descsa': 'habitacion cerca del cucei amueblada'
    
});
    
addItem({
    'id':'4',
    'foto': '/img/card4.jpg',
    'precio': '2100$',
    'habitaciones': '2',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Independencia no.299',
    'descripcion': 'Departamento con dos cuartos'
})

addItem({
    'id':'5',
    'foto': '/img/card 5.jpg',
    'precio': '1000$',
    'habitaciones': '1',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Calzada Independencia no.423',
    'descripcion': 'Dormitorio para estudiante'
})


addItem({
    'id':'6',
    'foto': '/img/card6.jpg',
    'precio': '2500$',
    'habitaciones': '1',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Periferico Norte no.233',
    'descripcion': 'Habitacion para estudiante cerca de la univerdad cucea'
})

addItem({
    'id':'7',
    'foto': '/img/card3.jpg',
    'precio': '1500$',
    'habitaciones': '2',
    'sanitario': '1',
    'cochera': '1',
    'ubicacion': 'Boulevard Marcelino Barragan no.63',
    'descripcion': 'Habitaciones para estudiantes disponibles'
})

addItem({
    'id':'8',
    'foto': '/img/card4.jpg',
    'precio': '3500$',
    'habitaciones': '2',
    'sanitario': '2',
    'cochera': '0',
    'ubicacion': 'Marcelino Barragan no.25',
    'descripcion': 'Habitaciones para estudiantes'
})

addItem({
    'id':'9',
    'foto': '/img/card 5.jpg',
    'precio': '2300$',
    'habitaciones': '4',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Calzada Independencia no.2522',
    'descripcion': 'Casa amplia para compartir entre estudiantes'
})

addItem({
    'id':'10',
    'foto': './img/card6.jpg',
    'precio':'$4,999',
    'habitaciones':'1',
    'sanitario':'1',
    'cochera':'1',
    'ubicacion':'Justo Sierra no.145',
    'descripcion':'Habitacion de lujo con buena ubicacion'
})