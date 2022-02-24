class conjunto
{
	constructor(nombre, direccion, zona, rutapng)
	{
		this.imagen = new Image();
		this.nombre = nombre;
		this.direccion = direccion;
		this.zona = zona;
		this.imagen.src = rutapng;

	}

	hablar()
	{
		alert("nombre: "+this.nombre);
	}


	mostrar()
	{
		document.write("<p>");
		document.body.appendChild(this.imagen);
		document.write("Nombre <strong>"+this.nombre + "</strong> <br />");
		document.write("Dirección: <strong> "+this.direccion +"</strong> <br />");
		document.write("Zona: <strong> "+this.zona + "</strong>");
		document.write("</p>");
	}


}

casa1 = new conjunto("almendros","Mz3 c22", "Rural", "img/casa.png");
casa2 = new conjunto("la esperanza", "M10 c23", "campestre", "img/casa2.png");
casa3 = new conjunto("el diamante", "m12 c22", "urbana","img/casa3.png");

var lotes = [];

lotes.push(casa1);
lotes.push(casa2);
lotes.push(casa3);


for(var rancho of lotes)
{
	rancho.mostrar();
}

