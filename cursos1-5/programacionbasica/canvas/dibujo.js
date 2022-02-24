var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");
var lineas=30;
var l=0;
var yi,xf;
var colorcito="#FAA";
/* detalles de dibujo. */




/*=====Para llamar o invocar la función dentro del ciclo. ======*/

while(l<lineas)
{
	yi=10*l;
	xf=10*(l+1);
	dibujarLinea(colorcito, 0, yi, xf, 300);
	console.log("lineas: "+l);
	l=l+1;
}


dibujarLinea(colorcito,1,1,1,299);
dibujarLinea(colorcito,1,299,299,299);


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
	/* begingPath para arrancar los trazos prepara el papel donde va ir el lapiz.
para iniciar el trazo o arancar el dibujo. */
	lienzo.beginPath();
/* stroke es una variable para el color de la linea. */
	lienzo.strokeStyle = color;
/* moveTo es un metodo o función para preparar 
la linea hacia donde quiere moverse. */
	lienzo.moveTo(xinicial,yinicial);
/* es la funcion que permite crear una linea. */
	lienzo.lineTo(xfinal,yfinal);
/* es un método para trazar la linea. */
	lienzo.stroke();
/* Cierro el trazo para terminar el dibujo. */
	lienzo.closePath();
}

