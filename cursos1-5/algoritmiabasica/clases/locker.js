class locker
{
	constructor(usuario, numeroCasillero, fecha, valorHora, numeroHoras, totalPagar)
	{
		this.usuario = prompt("Nombre de usuario");
		this.numeroCasillero = prompt("Número de casillero");
		this.fecha = new Date();

		this.valorHora = prompt("saldo por hora");
		this.numeroHoras = prompt("ingrese el tiempo que estuvo");

		this.totalPagar = this.valorHora * this.numeroHoras;

	}


	hablar()
	{
		document.write("Nombre: "+this.usuario);
	}

	mostrar()
	{
		document.write("<p>");
		document.write("Usuario: "+this.usuario);
		document.write("casillero: "+this.numeroCasillero);
		document.write("Fecha: "+this.fecha);
		document.write("horas guardada: "+this.numeroHoras);
		document.write("Total a pagar: "+this.totalPagar);
		document.write("</p>");
	}

}


let cupo1 = new locker("",'','','');
let cupo2 = new locker("",'','','');
let cupo3 = new locker("",'','','');


let parking = [];
	parking.push(cupo1);
	parking.push(cupo2);
	parking.push(cupo3);


for(reserva of parking)
{
	reserva.mostrar();
}



