let dimension: number = Number(prompt("Ingrese la dimensión los arreglos");
let arreglo1: number[] = new Array(dimension);
let arreglo2: number[] = new Array(dimension);
let arreglo3: number[] = new Array(dimension);

function aleatorio(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
function cargarDatosAleatorios(arreglo:number[]) {
  let cargarDatos:number;
  for (let i: number = 0; i < arreglo.length; i++) {
    cargarDatos= aleatorio(0, 99);
 arreglo[i]=  cargarDatos
  }
}
function sumarArreglos(a1:number[], a2:number[]) {
  for (let i: number = 0; i < a1.length; i++) {
    arreglo3[i] = a1[i] + a2[i];
  }
}
cargarDatosAleatorios(arreglo1);
cargarDatosAleatorios(arreglo2);
sumarArreglos(arreglo1,arreglo2);
console.log("Las sumas de los números ingresason son");
for (let i: number = 0; i < arreglo1.length; i++) {
  console.log(arreglo3[i]);
}