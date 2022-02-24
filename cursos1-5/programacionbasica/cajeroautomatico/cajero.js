class Billete
{
	constructor(valor, cantidad)
	{
		this.valor = valor;
		this.cantidad = cantidad;
	}
}


function entregarDinero()
{	
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	for (var bi of caja) 
	{
		if(dinero > 0)
		{
			division = Math.floor(dinero / bi.valor);

			if(division >  bi.cantidad)
			{
				papeles = bi.cantidad;
			}
			else
			{
				papeles = division;
			}

				entregado.push( new Billete (bi.valor, papeles) );
				dinero = dinero - (bi.valor * papeles);

		}
	}

	if(dinero > 0)
	{

		resultado.innerHTML="no hay nada.";
	}
	else
	{
		for(var e of entregado)
		{
			if(e.cantidad > 0)
			{
				resultado.innerHTML = resultado.innerHTML + e.cantidad + "billetes de $ " + e.valor + "<br />";	
			}
			
		}
	}

	
}

var caja = [];
var entregado = [];
caja.push( new Billete(50,3) );
caja.push( new Billete(20,2) );
caja.push( new Billete(10,2) );

var dinero = 0;
var division = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click",entregarDinero);