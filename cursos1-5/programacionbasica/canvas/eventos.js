/* crea un objeto con variables costantes */


var teclas = {
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39,
};

console.log(teclas);

document.addEventListener("keyup",dibujarTeclado);
var cuadro = document.getElementById("area_dibujo");
var papel = cuadro.getContext("2d");
/*=============================================
	Section para definir el centro del canvas 
=============================================*/

var x = 150;
var y = 150;

dibujarLinea("red",149,149,151,151, papel);


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle=color;
	lienzo.lineWidth=3;
/* Define un punto desde donde arrancar el trazo. */
	lienzo.moveTo(xinicial,yinicial);
/*es una funcion para trazar una linea */
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();

}


	/*=============================================
	=            una forma de hacer el evento.            =
	=============================================*/
	// if (evento.keyCode == teclas.UP)
	//  {
	//  	console.log("TODO BIEN");
	//  }
				
	
	/*=====  End of Section comment block  ======*/
	
	
	function dibujarTeclado(evento)
	{	
		var color2 = "blue";
		var movimiento = 3;
		
		switch(evento.keyCode)
	 {
	 	case teclas.UP:
	 	dibujarLinea(color2, x, y, x, y - movimiento, papel);
	 	y = y - movimiento;
	 	break;
	 	case teclas.DOWN:
	 	dibujarLinea(color2, x, y, x, y + movimiento, papel);
	 	y = y + movimiento;
	 	break;
	 	case teclas.LEFT:
	 	dibujarLinea(color2, x, y, x - movimiento, y, papel );
	 	x = x - movimiento;
	 	break;
	 	case teclas.RIGHT:
	 	dibujarLinea(color2, x, y, x  + movimiento, y, papel);
	 	x = x + movimiento;
	 	break;
	 	
	 }          


	}

	




	
	
	
