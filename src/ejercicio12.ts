let numero: number;
let cadena: string = "";
for (numero = 1; numero <= 100; numero++) {
  if (numero % 2 === 0 || numero % 3 === 0) {
    cadena = cadena + numero + "";
  }
}
console.log(cadena);
