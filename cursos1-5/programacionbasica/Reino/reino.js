var imagenes = [];

imagenes["jesus"]="img/jesus.png";
imagenes["lucifer"]="img/diabla.png";
imagenes["angel"]="img/angel.png";


class Reino
{

	constructor(nombre, ataque, vida, poder)

	{
		this.imagen = new Image();
		this.nombre = nombre;
		this.ataque = ataque;
		this.vida = vida;
		this.poder = poder;

		this.imagen.src = imagenes[this.nombre];

	}


	hablar()
	{
		alert(this.nombre);
	}

	mostrar()
	{
		document.write("<p>");
		document.body.appendChild(this.imagen);
		document.write("Nombre <br/ > <strong> " +this.nombre + " </strong> <br />");
		document.write("Ataque: " +this.ataque);
		document.write("<br /> Vida: "+this.vida);
		document.write("<br /> Poder: <strong> " +this.poder+"</strong>");

		document.write("</p>");
	}


}


/*=============================================
	  = Instanciamos la clase Reino.  =
=============================================*/

	var jesucristo = new Reino("jesus", 500, 1000, "resucitar");
	var lucifer = new Reino("lucifer", 250, 1000, "tentar");
	var angel = new Reino("angel",400, 1000, "salvar");
	
	
	/*=====  End of Section comment block  ======*/


	/*=============================================
	=   Invocamos la función con la instancia.   =
	=============================================*/
		
		jesucristo.mostrar();
		lucifer.mostrar();
		angel.mostrar();
	
	
	/*=====  End of Section comment block  ======*/
