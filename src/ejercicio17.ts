let numero1:number=Number(prompt("Ingrese el primer número"));
let numero2:number=Number(prompt("Ingrese el segundo número"));
let indice, suma, auxiliar : number;
indice = numero1;
if (numero1 > numero2) {
auxiliar = numero1;
numero1 = numero2;
numero2 = auxiliar;
}
suma = 0;
for (indice = numero1; indice <= numero2; indice++) {
suma = suma + indice;
}
console.log ( "El resultado de la suma es: ", suma );