class pakiman
{
	//constructor(nombre, vida, ataque, rutapng)
	constructor(nombre, vida, ataque, rutapng)
	{
		this.imagen = new Image();
		this.nombre = nombre;
		this.vida = vida;
		this.ataque = ataque;

		//this.imagen.src = imagenes[this.nombre];
		this.imagen.src = rutapng;
	}

	hablar()
	{
		alert(this.nombre);
	}

	mostrar()
	{
		document.write("<p>");
		document.body.appendChild(this.imagen);
		document.write("Nombre <br /> <strong> " + this.nombre + "</strong> <br />");
		document.write("Vida: " + this.vida + "<br />");
		document.write("Ataque: " + this.ataque);
		document.write("</p>");
	}
}