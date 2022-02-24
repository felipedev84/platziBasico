

class planetas

{
	constructor(nombre, color, composicion, rutapng)
	{
		this.imagen = new Image();
		this.nombre = nombre;
		this.color = color
		this.composicion = composicion;

		this.imagen.src = rutapng;
	
	}


	hablar()
	{
		alert("nombre :"+this.nombre);
	}

	mostrar()
	{
		document.write("<p> ");

		document.body.appendChild(this.imagen);
		document.write("Nombre: <strong> "+this.nombre+ "</strong> <br />");
		document.write("Color: <strong> "+this.color + "</strong> <br />");
		document.write("Composición <strong> "+this.composicion + "</strong>");

		document.write("</p>");

	}	
}


/*=============================================
          =    Instanciamos.    =
=============================================*/





tierra = new planetas("tierra", "azul", "agua","img/tierra.png");
marte = new planetas("marte", "rojo", "dioxido_carbono", "img/marte.png");
jupiter = new planetas("jupiter", "verde", "hidrogeno_liquido", "img/jupiter.png");



/*=====  End of Section comment block  ======*/

var planetario = [];

planetario.push(tierra);
planetario.push(marte);
planetario.push(jupiter);


for(planeta of planetario)
{
	planeta.mostrar();
}

// tierra.mostrar();
// marte.mostrar();
// jupiter.mostrar();

// tierra.hablar();
// marte.hablar();
// jupiter.hablar();

