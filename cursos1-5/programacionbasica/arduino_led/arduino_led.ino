int amarillo = 13;
int rojo = 7;
int milisegundos = 100;

void setup() 
{
  // put your setup code here, to run once:
  pinMode(amarillo, OUTPUT);
  pinMode(rojo, OUTPUT);
  

}

void loop()
{
  // put your main code here, to run repeatedly:
  digitalWrite(amarillo, HIGH);
   digitalWrite(rojo, LOW);
  delay(milisegundos);
  digitalWrite(amarillo, LOW);
  digitalWrite(rojo, HIGH);
  delay(milisegundos * 2);

}
