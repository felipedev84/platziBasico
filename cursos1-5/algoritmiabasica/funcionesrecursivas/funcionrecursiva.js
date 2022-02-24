
funcionRecursiva(10)

function funcionRecursiva(num)
{
	num = num - 1
	if(num > 0)
	{
		document.write(num)
		funcionRecursiva(num)
	}
	else
	{
		 document.write("feliz año")  
	}

}