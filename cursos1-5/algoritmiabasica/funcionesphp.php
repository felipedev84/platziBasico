<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	
<?php 
	
	function placesRecomendation($condition = '',$question = '' )
	{
		$weather = array("bogota"=>"cold","monteria"=>"hot","medellin"=>"mild");

		$ubication = array("Guajira"=>"North", "Leticia"=>"south","santander"=>"east", "antioquia"=>"west");

		$tour = array("santamarta"=>"mar", "vilavicencio"=>"llanos orientales","riohacha"=>"Desert", "Quindio"=>"valle");

		switch($condition)
		{
			case "weather":
			$search = $weather;
			break;

			case "ubication":
			$search = $ubication
			break;

			case "tour":
			$search = $tour
			break;

			default:
			echo "Welcome to Colombia";
		}
		echo "the perfect place is you".array_search($condition, $search)
	}

	placesRecomendation("weather", "cold")

 ?>
</body>
</html>
