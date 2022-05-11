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
    "Ingrese 1 para sumar, 2 para restar, cualquier otra opcion es invalida"
  )
);
if (opcion === 1) {
  resultado = numero1 + numero2;
  dibujarLinea();
  console.log("El resultado de la suma es", resultado);
  dibujarLinea();
} else if (opcion === 2) {
  resultado = numero1 - numero2;
  dibujarLinea();
  console.log("El resultado de la resta es", resultado);
  dibujarLinea();
} else {
  dibujarLinea();
  console.log("La opción no es valida");
  dibujarLinea();
}
