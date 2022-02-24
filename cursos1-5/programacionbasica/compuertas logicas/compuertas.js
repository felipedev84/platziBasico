var bancoCliente = "davivienda";
var cuentaCliente = true;
var bancoDestino = "bancolombia";
var cuentaDestino = true;
var monto = 1000000;
var saldo = 2000000;
var transaccion;
var hora = 20;

if(bancoCliente == bancoDestino)
{
	transaccion = 0;

}
else
{
	transaccion = 100;
}

if(cuentaCliente && cuentaDestino)
	{
		if((hora >= 9 && hora <= 12) || (hora >= 15 && hora <= 20))
			{
				if(saldo > monto + transaccion)
				{
					transferencia = saldo - (monto + transaccion) ;
					document.write("tu transaccion es : " +transferencia);
				}

				else
				{
					document.write("saldo insuficiente");
				}
			}


			else
			{
				document.write("No son horas para la transferencia");
			}

	}

	else
	{
		document.write("No existe la cuenta del cliente o de destino");
	}

