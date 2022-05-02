let numero1: number = Number(prompt("Ingrese el primer número"));
let numero2: number = Number(prompt("Ingrese un segundo número"));
let primero, suma: number;
primero = numero1;
suma = 0;
for (let primero: number = numero1; primero <= numero2; primero++) {
  suma = suma + primero;
}
console.log("El resultado de la suma es", suma);
