function addItem(item){
    const itemHTML =
    '<div class="hijo card cardCard" id="c'+item.cartNu +'" style="width: 18rem;">\n'+
    '   <img src="'+item.foto +'" class="cardImg img-fluid" alt="...">\n'+
    '    <div class="card-body">\n'+
    '      <h5 class="card-title">Precio '+item.precio+'</h5>\n'+
    '      <div class="row">\n'+
    '          <div class="col-sm">\n'+
    '              <i class="fas fa-bed">'+item.habitaciones+'</i>\n'+
    '            </div>\n'+
    '            <div class="col-sm">\n'+
    '              <i class="fas fa-bath">'+item.sanitario+'</i>\n'+
    '            </div>\n'+
    '            <div class="col-sm">\n'+
    '              <i class="fas fa-car">'+item.cochera+'</i>\n'+
    '            </div>\n'+
    '        </div>\n'+
    '        <br>\n'+
    '        <p>'+item.ubicacion+'</p> \n'+
    '    <p class="card-text">'+item.descripcion+'</p>\n'+
    '    <p class="cardL"><small >Last updated 3 mins ago</small></p>\n'+
    '    <a href="./view.html" class="btn btn-primary">Ver mas</a>\n'+
    '    </div>\n'+
    '</div>';
    
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
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

addItem({

    'cartNu':'2',
    'titulo':'Departamento por CUAAD',
    'foto': './img/card2.jpg',
    'precio':'$3,999',
    'habitaciones':'2',
    'sanitario':'1',
    'cochera':'1',
    'ubicacion':'Av Calzada Independencia no.1245',
    'descripcion':'Departamento amueblado para estudiantes del CUAAD'
    
});

addItem({

    'cartNu':'3',
    'titulo':'Habitacion cerca de CUCEI',
    'foto': './img/card3.jpg',
    'precio':'$4,999',
    'habitaciones':'1',
    'sanitario':'1',
    'cochera':'0',
    'ubicacion':'Av Revolucion no.345',
    'descsa': 'habitacion cerca del cucei amueblada'
    
});
    
addItem({

    'cartNu':'4',
    'titulo': 'Departamento',
    'foto': '/img/card4.jpg',
    'precio': '2100$',
    'habitaciones': '2',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Independencia no.299',
    'descripcion': 'Departamento con dos cuartos'
})

addItem({

    'cartNu':'5',
    'titulo': 'Rommie',
    'foto': '/img/card 5.jpg',
    'precio': '1000$',
    'habitaciones': '1',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Calzada Independencia no.423',
    'descripcion': 'Dormitorio para estudiante'
})


addItem({

    'cartNu':'6',
    'titulo': 'Habitacion por CUCEA',
    'foto': '/img/card6.jpg',
    'precio': '2500$',
    'habitaciones': '1',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Periferico Norte no.233',
    'descripcion': 'Habitacion para estudiante cerca de la univerdad cucea'
})

addItem({

    'cartNu':'7',
    'titulo': 'Rommie Cucei',
    'foto': '/img/card3.jpg',
    'precio': '1500$',
    'habitaciones': '2',
    'sanitario': '1',
    'cochera': '1',
    'ubicacion': 'Boulevard Marcelino Barragan no.63',
    'descripcion': 'Habitaciones para estudiantes disponibles'
})

addItem({

    'cartNu':'8',
    'titulo': 'Renta de departamento',
    'foto': '/img/card4.jpg',
    'precio': '3500$',
    'habitaciones': '2',
    'sanitario': '2',
    'cochera': '0',
    'ubicacion': 'Marcelino Barragan no.25',
    'descripcion': 'Habitaciones para estudiantes'
})

addItem({

    'cartNu':'9',
    'titulo': 'Casa para estudiante CUAAD',
    'foto': '/img/card 5.jpg',
    'precio': '2300$',
    'habitaciones': '4',
    'sanitario': '1',
    'cochera': '0',
    'ubicacion': 'Calzada Independencia no.2522',
    'descripcion': 'Casa amplia para compartir entre estudiantes'
})

addItem({

    'cartNu':'10',
    'titulo':'Habitacion cerca de chapu',
    'foto': './img/card6.jpg',
    'precio':'$4,999',
    'habitaciones':'1',
    'sanitario':'1',
    'cochera':'1',
    'ubicacion':'Justo Sierra no.145',
    'descripcion':'Habitacion de lugo con buena ubicacion'
})