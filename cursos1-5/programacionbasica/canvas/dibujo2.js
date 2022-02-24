/*  Donde esta el canvas el atributo id=area 
esta en el documento en dibujo2.html  */
var d = document.getElementById("area");
/* area de dibujo */
var lienzo = d.getContext("2d");
console.log(lienzo);

/* Para llamar a la función.
para dibujar una linea. */
dibujarLinea("#AFA",0,0,10,300);
dibujarLinea("#AFA",0,10,20,300);
dibujarLinea("#AFA",0,20,30,300);
dibujarLinea("#AFA",0,30,40,300);
dibujarLinea("#AFA",0,40,50,300);
dibujarLinea("#AFA",0,50,60,300);
dibujarLinea("#AFA",0,60,70,300);
dibujarLinea("#AFA",0,70,80,300);
dibujarLinea("#AFA",0,80,90,300);
dibujarLinea("#AFA",0,90,100,300);
dibujarLinea("#AFA",0,100,110,300);
dibujarLinea("#AFA",0,1100,120,300);

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

