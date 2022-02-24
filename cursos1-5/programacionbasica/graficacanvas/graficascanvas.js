var documento = document.getElementById("dibujo");
var dibujo = documento.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

var color = "#FAA";
while(l < lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(color, 0, yi, xf, 300);
	l = l + 1;
}

dibujarLinea(color, 1, 1, 1, 299);
dibujarLinea(color, 1, 299, 299, 299);


color2 = "green";
for(l = 0; l < lineas ; l++)
{
	yi = 10 * (l + 1);
	xf = 10 * l;
	dibujarLinea(color2, 300, yi, xf, 0);
}

dibujarLinea(color2, 299, 299, 299, 1);
dibujarLinea(color2, 299, 1, 1, 1);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	dibujo.beginPath();
	dibujo.strokeStyle = color;
	dibujo.moveTo(xinicial, yinicial);
	dibujo.lineTo(xfinal, yfinal);
	dibujo.stroke();
	dibujo.closePath();
}