let cantidad:number=6;
let vector1:number[]= new Array(cantidad);
let numero:number;
let n:number;
let m:number;
function cargar(arreglo: number[], cantidad: number, numAzar: number) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    arreglo[i] =Number(prompt("ingrese los números",numAzar);
  }
}

function escribirEnUnaLinea(arreglo:number[], cantidad:number) {
  let i:number;
  let vector:string = "" ;
  for (i = 0 ; i<cantidad; i++) {
  vector += `${arreglo[i]} `
  }
  console.log (vector);
  }
function intercambiar(arreglo:number[], i:number, j:number) {
    let aux:number;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
    }
function comparar(arreglo : number[], i : number, j :
      number) : number {
      let comparacion : number;
      if (arreglo[i] === arreglo[j]) {
      comparacion = 0;
      } else if (arreglo[i] < arreglo[j]) {
      comparacion = -1;
      } else {
      comparacion = 1;
      }
      return comparacion;
    }
function burbuja(arreglo : number[], cantidad : number) {

let i : number, j : number;
for (i = 2 ; i < cantidad; i++) {
for (j = 0 ; j < (cantidad - 1); j++) {
if (comparar(arreglo, j, j+1) == 1 ) {
intercambiar(arreglo, j, j+1) ;
}
}
}
}
cargar(vector1,cantidad,numero);
escribirEnUnaLinea(vector1,cantidad);
burbuja(vector1,cantidad);
escribirEnUnaLinea(vector1,cantidad);
