class domicilio
{
	constructor(cliente, productos, cantidad, fecha, pedido)
	{
		this.cliente = prompt("ingrese su nombre: ");
		this.productos = prompt("solicite menu");
		this.cantidad = prompt("cantidad a pedir");
		this.fecha = new Date();
		this.pedido = prompt("pedido #");
	}


	hablar()
	{
		document.write("Nombre: "+this.nombre);
	}


	mostrar()
	{
		document.write("<p>");
		document.write("Cliente: "+this.cliente);
		document.write("Productos: "+this.productos);
		document.write("Cantidad : "+this.cantidad);
		document.write("Fecha: "+this.fecha);
		document.write("Pedidos: "+this.pedido);
		document.write("</p>");
	}
}


let menu1 = new domicilio("","",'','','');
let menu2 = new domicilio("","",'','','');
let menu3 = new domicilio("","",'','','');
let menu4 = new domicilio("","",'','','');


let entrega = [];
entrega.push(menu1);
entrega.push(menu2);
entrega.push(menu3);
entrega.push(menu4);


for(mesa of entrega)
{
	mesa.mostrar();
}