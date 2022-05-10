let positivos: number = 0;
let canTotal: number = 0;
let porcentaje: number = 0;
let numero: number = Number(prompt("Ingrese un número"));
while (numero !== 0) {
  if (numero > 0) {
    positivos++;
  }
  canTotal++;
  numero = Number(prompt("Ingrese un valor"));
}

if (canTotal > 0) {
  porcentaje = (positivos * 100) / canTotal;
  console.log( "Cantidad de positivos",positivos, " del ", porcentaje, " % del total ");
}
