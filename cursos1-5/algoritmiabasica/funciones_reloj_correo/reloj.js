
/*=============================================
=   Para hacer el reloj hacemos uso del objeto DATE() de javascript  =
=============================================*/

function reloj()
		{
			var date = new Date();
			horas = date.getHours();
			minutos = date.getMinutes();
			segundos = date.getSeconds();

/* Ahora  combinamos los resultados con el formato */

			formatoHora = horas +" : "+minutos+" : "+segundos;


/* Por último colocamos en el campo de texto del formulario el valor actual de la hora. */
			
			document.form_reloj.reloj.value = formatoHora;

/* funcion setTimeout();
La línea de código para llamarse a si misma,
La sentencia es una simple llamada a la función
 y el retardo es de 1000 milisegundos (un segundo).
*/
			
			setTimeout("reloj()",1000);

		}


/*=====  End of Section comment block  ======*/