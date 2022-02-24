class tienda
	
{

	constructor(nombre, cantidad, tipo, valorUnitario,  valorTotal, iva, valorTotalPagar, descuento,  total)
	{
		this.nombre = prompt("ingrese nombre producto");
		this.cantidad = prompt("cantidad a llevar");
		this.tipo = tipo;
		this.valorUnitario = parseInt(prompt("ingrese su precio "));

		
		this.valorTotal = this.valorUnitario * this.cantidad;
		this.iva = this.valorTotal * 0.19;
		this.valorTotalPagar = this.valorTotal + this.iva;
		this.descuento = this.valorTotalPagar * 0.2;
		this.total = this.valorTotalPagar - this.descuento;
	
		
	}


	hablar()
	{
		alert("Mi nombre: "+this.nombre);
	}


	mostrar()
	{
		document.write("<p>");
		document.write("Nombre: "+this.nombre);
		document.write("Cantidad: "+this.cantidad);
		document.write("Tipo:"+this.tipo);
		document.write("Valor unitario: "+this.valorUnitario);
		document.write("Valortotal: "+this.valorTotal);
		document.write("Iva:"+this.iva);
		document.write("TotalPagarIva: "+this.valorTotalPagar);
		document.write("Descuento :"+this.descuento);
		document.write("Total con descuento: "+this.total);
		document.write("</p>");
	}





}

	 prenda1 = new tienda("",'',"clasica",'');
	 prenda2 = new tienda("",'',"urbana",'');
	 prenda3 = new tienda("",'',"otoño",'');
	 prenda4 = new tienda("",'',"primavera",'');

	var ropa = [];

	ropa.push(prenda1);
	ropa.push(prenda2);
	ropa.push(prenda3);
	ropa.push(prenda4);

	for(dress of ropa)
	{
		dress.mostrar();
	}



