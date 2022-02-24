var express = require("express");
var aplicacion = express();


aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
	resultado.send("este es el <strong> home </strong> ");
}

function cursos(peticion, resultado)
{
	resultado.send("Estos son los<strong> cursos </strong> ");
}

//metodo para hacer correr el servidor.

aplicacion.listen(8989);