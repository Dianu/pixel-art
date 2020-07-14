var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


//Variables globales
var colorActual;
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;
  })
);


function crearPaletaDeColores () {
  for(var i=0; i<nombreColores.length; i++) {
    var nuevoDiv = document.createElement('div'); 
    nuevoDiv.className = 'color-paleta';
    nuevoDiv.style.backgroundColor= nombreColores[i];
    paleta.appendChild(nuevoDiv);
  }
}

var cantidadPixeles = 1750;

function crearGrillaPixeles () {
  for(var i=0;i<cantidadPixeles;i++) {
    var nuevoPixel = document.createElement('div');
    nuevoPixel.id = 'pixel'+i;
    nuevoPixel.className='pixeles';
    grillaPixeles.appendChild(nuevoPixel);
  }
}

crearPaletaDeColores();
crearGrillaPixeles();

// Selecciona un color de la paleta y lo muestra en el indicador de color
var indicadorDeColor = document.getElementById("indicador-de-color");

paleta.addEventListener("click", modificarColorPincel);

// Cambia el color del pincel
function modificarColorPincel(e) {
  indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
}

// Pinta un pixel de la grilla 
grillaPixeles.addEventListener("click", modificarColorGrilla);

function modificarColorGrilla(e) {
  e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}

//Pintar varios pixeles de la grilla manteniendo apretado el mouse
//Verifica si el mouse está o no presionado
var estadoDelMouse = false;
grillaPixeles.addEventListener('mousedown', mouseApretado);
window.addEventListener('mouseup', mouseLiberado);

function mouseApretado(e) {
  estadoDelMouse = true;
  pintarVariosPixelesEnGrilla(e);
}

function mouseLiberado(e) {
  estadoDelMouse = false;
}

function pintarVariosPixelesEnGrilla(e) {
  if (estadoDelMouse == true) {
    e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  }
}

function agregarEventListenerPixeles(){
  for(var i=0; i<cantidadPixeles; i++){
    var pixel = document.querySelector('#pixel'+i);
    pixel.addEventListener('mouseover',pintarVariosPixelesEnGrilla);
  }
}

agregarEventListenerPixeles();

//Borrar la grilla con animación
var $pixelesGrilla = $("#grilla-pixeles div");
jQuery(document).ready(function() {
  $("#borrar").click(function() {
    $pixelesGrilla.animate({"background-color": "white"}, 800);
  });
});

//Elegir superheroe
jQuery(document).ready(function() {
  $(".imgs img").click(function() {
    // referencia a la imagen en la cual hice click
    var imgActual = $(this);
    // attributo id de la imagen
    var attrId = imgActual.attr("id");
    cargarSuperheroe(eval(attrId)); 
  });
});

//Guardar imagen
$("#guardar").click(function () {
  guardarPixelArt();
});   

