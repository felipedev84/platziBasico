var dibujo = document.getElementById("dibujo");
var espacio = dibujo.getContext("2d");
var lineas = 30;
var l = 0;
var xf,yi;
var color2 = "#FAA";


/*=============================================
=   Ciclo que itera las lineas por repeticion 
     va haciendo el dibujo.  =
=============================================*/

while(l < lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(color2, 0, yi, xf, 300);
	console.log(l);
	l= l + 1;

}

/*=====  End of Ciclo.  ======*/

dibujarLinea(color2,1,1,1,299);
dibujarLinea(color2,1,299,299,299);


function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
{
	espacio.beginPath();
	espacio.strokeStyle = color;
	espacio.moveTo(xinicial, yinicial);
	espacio.lineTo(xfinal, yfinal);
	espacio.stroke();
	espacio.closePath();


}



