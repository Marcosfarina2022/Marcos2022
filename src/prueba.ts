//Programa que suma todos los números comenzando por un mayor y comenzando por un menor
let numero1: number = Number(prompt("Ingrese el primer número"));
let numero2: number = Number(prompt("Ingrese un segundo número"));
let suma: number;
let auxiliar: number = numero1;
numero2 = auxiliar;
suma = 0;
for (numero2 = numero1; numero2 <= numero1; numero2++) {
  suma = suma + numero2;
}
console.log("El resultado de la suma es", suma);
