let long: number = Number(prompt("Ingrese la longitud"));
let edadAlumnos: number[] = new Array(long);

function aleatorio(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
function cargarDatosAleatorios() {
  for (let i: number = 0; i < edadAlumnos.length; i++) {
    let edad: number = aleatorio(3, 7);
    edadAlumnos[i] = edad;
  }
}
function obtenerPromedio(): number {
  let promedio: number;
  let suma: number = 0;
  for (let i: number = 0; i < edadAlumnos.length; i++) {
    suma = suma + edadAlumnos[i];
  }
  promedio = suma / edadAlumnos.length;
  return promedio;
}

cargarDatosAleatorios();
console.log("Las edades ingresadas son");
for (let i: number = 0; i < edadAlumnos.length; i++) {
  console.log(edadAlumnos[i]);
}
cargarDatosAleatorios();
let promedioEdades: number = obtenerPromedio();
console.log("El promedio de las edades ingresadas es", promedioEdades);

//console.log(Math.random() * 100); //Tira numeros al azar del 0 al 0.99
//Math.floor me da la parte entera de un número entre 0 y 100.
