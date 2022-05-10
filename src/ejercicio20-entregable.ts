//Cantidad y Distribución de Positivos
//Declaramos las variables
let positivos: number = 0;
let canTotal: number = 0;
let porcentaje: number = 0;
//Ingresamos un número por teclado
let numero: number = Number(prompt("Ingrese un número"));
//Mientras el número ingresado sea diferente a 0 va a comenzar si es 0 corta el programa
while (numero !== 0) {
  //Armo un bucle con la condición de que número sea mayor que 0 y cuento los positivos
  if (numero > 0) {
    positivos++;
  }
  //Tambíen por otro lado voy contando todos los números que se ingresan
  canTotal++;
  numero = Number(prompt("Ingrese un valor"));
}
//realizo el cálculo del porcentaje de positivos ingresado sobre el total.
if (canTotal > 0) {
  porcentaje = (positivos * 100) / canTotal;
  console.log(
    "Cantidad de positivos",
    positivos,
    " del ",
    porcentaje,
    " % del total "
  );
}
