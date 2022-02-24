
/*=============================================
=Arreglo asociativo de imagenes coleccion de arreglos.
Como se declara arriba es una variable global,
toda la clase la ve, el objeto guarda solo las rutas
 a los png.=
=============================================*/

 //var imagenes = [];
 //No es primitivo, es un dato complejo
 //Instancias del objeto para obtener la imagen o archivo.

 // imagenes["cauchin"] = "img/vaca2.png";
 // imagenes["pokacho"] = "img/pollo2.png";
 // imagenes["tocinauro"] = "img/cerdo.png";

/*=====  End of Section comment block  ======*/


/*=============================================
=Esta variable es una instancia de la clase pakiman
el alert debe funcionar porque hemos creado el 
objeto cauchin,es decir hemos definido un nuevo objeto.=
=============================================*/

 var cauchin = new pakiman("cauchin",100, 30,"img/vaca2.png");
 var pokacho = new pakiman("pokacho", 88, 50,"img/pollo2.png");
 var tocinauro = new pakiman("tocinauro", 120, 40,"img/cerdo.png");

/*=====  End of Section comment block  ======*/


/*=============================================
          =Segunda forma de hacerlo=
=============================================*/

// var coleccion = [];

// coleccion.push(cauchin);
// coleccion.push(pokacho);
// coleccion.push(tocinauro);

//console.log(coleccion);

/*=====  End of Section comment block  ======*/


/*=============================================
     =  "Tercera forma de hacerlo." =
=============================================*/

// var coleccion = [];
// coleccion.push(new pakiman("cauchin",100, 30));
// coleccion.push(new pakiman("pokacho",80, 50));
// coleccion.push(new pakiman("tocinauro",120, 40));

/*=====  End of Section comment block  ======*/




/*=============================================
=Para recorrer el arreglo sea por los indices 
    o por el objeto utilizamos in y  of.=
=============================================*/
		
// for (var pakin of coleccion)
//  {
// 	pakin.mostrar();	
// 	console.log(coleccion);

//  }


/*=====  End of Section comment block  ======*/

/*=============================================
=Invoco la función con la instancia de la clase pakiman.=
=============================================*/
	pokacho.mostrar();
	cauchin.mostrar();
	tocinauro.mostrar();
/*=====  End of Section comment block  ======*/









