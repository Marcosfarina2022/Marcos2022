//Programa que suma dos arreglos de iguales dimensiones.
function sumar(){
  let arregloResultado: number[] = new Array(6);
  for (let indice = 0; indice < 6; indice++) {
    arregloResultado[indice] = arreglo1[indice] + arreglo2[indice];
    sumaArreglos = arregloResultado[indice];
    console.log(
      sumaArreglos,
      "se obtiene de sumar",
      arreglo1[indice],
      "y",
      arreglo2[indice]
    );
  }
}
let arreglo1: number[] = new Array(6);
for (let indice = 0; indice < 6; indice++) {
  arreglo1[indice] = Number(prompt("Ingrese los 6 valores del primer arreglo"));
}
let arreglo2: number[] = new Array(6);
for (let indice = 0; indice < 6; indice++) {
  arreglo2[indice] = Number(
    prompt("Ingrese los 6 valores del segundo arreglo")
  );
}
let sumaArreglos: number = 0;
sumar();
