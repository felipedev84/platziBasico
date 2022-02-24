var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
/* añadir un escuchador de eventos. */

boton.addEventListener("click",dibujoporclick);

/*  Donde esta el canvas el atributo id=area */
var d = document.getElementById("area");
/* area de dibujo */
var ancho = d.width;
var lienzo = d.getContext("2d");



function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle=color;
/* Define un punto desde donde arrancar el trazo. */
	lienzo.moveTo(xinicial,yinicial);
/*es una funcion para trazar una linea */
	lienzo.lineTo(xfinal,yfinal);

	lienzo.stroke();
	lienzo.closePath();

}

function dibujoporclick()
{
	var lineas =  parseInt(texto.value);
	var l = 0;
	var yi,xf;
	var color2 = "#FAA";
	var espacio = ancho/lineas;

	/* Para llamar a la función.
	para dibujar una linea. */
	
	for (l = 0; l < lineas; l++)
	 {
		/* Explicación: 
	1. las variables yi y xf salen de
	un patron  el cuál indica que sus valores cambian por eso de ahí sale
	 la sgte ecuación. 

	 2. el numero 10, surge de la divisio 300/30. */

	
	yi = espacio * l;
	xf = espacio * (1 + l);

	/* Cuando llegue aqui va invocar los métodos de la función. */
	dibujarLinea(color2,0,yi,xf,300);
	console.log("lineas: "+l);
	

	}
	/* se dibuja una nueva linea para la parte vertical izquierda 
   y la linea inferior. del canvas */
	/* lineavertical */
	dibujarLinea(color2,1,1,1,299);
	/* linea horizontal. */
	dibujarLinea(color2,1,299,299,299);
	
}


