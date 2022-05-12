//Este programa es una calculadora que realiza las 4 operaciones básicas.
function dibujarLinea() {
  let linea: string = "-";
  for (let indice: number = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}
let resultado: number = 0;
let numero1: number = Number(prompt("Ingrese el número 1"));
let numero2: number = Number(prompt("Ingrese el numero 2"));
let opcion: number = Number(
  prompt(
    "ELIJA UNA OPCIÓN: 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir, cualquier otra opcion será invalida"
  )
);
switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    dibujarLinea();
    console.log("El resultado de la suma es", resultado);
    dibujarLinea();
    break;
  case 2:
    resultado = numero1 - numero2;
    dibujarLinea();
    console.log("El resultado de la resta es", resultado);
    dibujarLinea();
    break;

  case 3:
    resultado = numero1 * numero2;
    dibujarLinea();
    console.log("El resultado de la multiplicación es", resultado);
    dibujarLinea();
    break;
  case 4:
    resultado = numero1 / numero2;
    dibujarLinea();
    console.log("El resultado de la multiplicación es", resultado);
    dibujarLinea();
    break;
  default:
    dibujarLinea();
    console.log("La opción no es valida");
    dibujarLinea();
    break;
}
