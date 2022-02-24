/* Creacion de Objetos.. */


var documento = document.getElementById("villa");
var papel = documento.getContext("2d");
/* estamos creando la etiqueta img 
es una instancia de la clase Image es un nuevo objeto 
estamos creando una nueva definicion de objeto.*/

var fondo = {
	url:"img/casa3.png",
	cargarOK: false
};


var vaca = {

	url:"img/vaca2.png",
	cargaOK: false
}

var cantidad = aleatorio(1, 50);

fondo.imagen = new Image();
/* se le pasa la url por el atributo src, si yo quiero agregar la fuente
de la imagen ala variable mapa*/
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);


vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);




function cargarFondo()
{
	fondo.cargarOK = true;
	dibujar();
}


function cargarVaca()
{

	vaca.cargarOK = true;
	dibujar();
}

function dibujar()
{

	if (fondo.cargarOK) 
	{
		papel.drawImage(fondo.imagen,0,0);

	}
	console.log(cantidad);
	for (var v=0; v < 10; v++ ) 
	{
		var x = aleatorio(0,7);
		var y = aleatorio(0,7);
		var x = x * 60;
		var y = y * 60;
		papel.drawImage(vaca.imagen,x,y);

	}

	
}

/* Permite escoger un valor entre un punto de inicio y uno de llegada. */


function aleatorio(min,maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}