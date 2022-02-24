
		 let cupoAutobus = 80
		 let precioTiquete = 10000

		 ventaTiquetes = prompt("Desea comprar algun ticket? (S/N")


		if(ventaTiquetes == 's')
		{
			comprarTiquetes()
		}
		else
		{
			document.write("Gracias por hacer uso de la aplicacion")
		}


		function comprarTiquetes()
		{
			transporte = 1

			if(transporte == 1)
			{
				 ciudadOrigen = prompt("ciudad origen")
				 ciudadDestino = prompt("ciudad destino")
				 tiquetesComprados = parseInt(prompt("cuantos boletos desea"))

				if( ( cupoAutobus - tiquetesComprados ) >=0 )
				{
					 pasajero = prompt("ingrese su nombre")
					 fecha = new Date()
					 total = precioTiquete * tiquetesComprados 
					 disponibles = cupoAutobus - tiquetesComprados

					document.write("<br/> Compra exitosa <br />")
					document.write("Pasajero: "+pasajero)
					document.write("fecha: "+fecha)  
					document.write("<br /> origen: "+ciudadOrigen)
					document.write(" <br /> Destino : "+ciudadDestino)   
					document.write("<br/ > totalapagar:"+ total)

					document.write("<br /> cupos disponibles: "+disponibles)
				}


					

			}


		}


