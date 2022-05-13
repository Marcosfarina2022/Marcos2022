function calculoPotencia() {
  resultado = base ** exponente;
  if (exponente === 0) {
    resultado = 1;
  } else {
    console.log("El resultado de los valores ingresados es:", resultado);
  }
}
let resultado: number = 0;
let base: number = Number(prompt("Ingrese la base"));
let exponente: number = Number(prompt("Ingrese el exponente"));
if (exponente >= 0) {
  calculoPotencia();
} else {
  console.log("El exponente ingresado es invalido");
}
