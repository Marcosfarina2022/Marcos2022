//Programa que suma todos los números comenzando por un mayor y comenzando por un menor
let numero1: number = Number(prompt("Ingrese el primer número"));
let numero2: number = Number(prompt("Ingrese un segundo número"));
let primero, suma: number;
primero = numero1;
suma = 0;
if (numero1 > numero2) {
  for (let primero: number = numero1; primero >= numero2; primero--) {
    suma = suma + primero;
  }
} else {
  for (let primero: number = numero1; primero <= numero2; primero++) {
    suma = suma + primero;
  }
}
console.log("El resultado de la suma es", suma);
