var espacio = document.getElementById("dibujo");
var dibujo= espacio.getContext("2d");
var lineas = 30;
var l = 0;
var yi,xf;
var color2 = "#FAA";




/*=============================================
=  Para llamar la función, o invocar la funcion en el ciclo.   =
=============================================*/

while (l < lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	l = l + 1;
	dibujarLinea(color2, 0, yi, xf, 300);


}


/*=====  End of ciclo while. ======*/




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	dibujo.beginPath();
	dibujo.strokeStyle = color;
	dibujo.moveTo(xinicial,yinicial);
	dibujo.lineTo(xfinal,yfinal);
	dibujo.stroke();
	dibujo.closePath();
}









	