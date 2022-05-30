//algoritmo que permite cargar alumnos por teclado y sus notas de tres trimestres
//y permite obtener el promedio anual.

let cantidadAlumnos: number = Number(prompt("Ingrese la cantidad de alumnos"));
let notaAlum: number = cantidadAlumnos;
let alumnos: string[] = new Array(notaAlum);
let trimestreUno: number[] = new Array(notaAlum);
let trimestreDos: number[] = new Array(notaAlum);
let trimestreTres: number[] = new Array(notaAlum);
let promedio: number[] = new Array(notaAlum);
let notaFinal: number[] = new Array(notaAlum);
function cargarDatos(): void {
  for (let i: number = 0; i < notaAlum; i++) {
    alumnos[i] = prompt("Ingrese el nombre del alumno");
    trimestreUno[i] = Number(prompt("Ingrese la nota del primer trimestre"));
    trimestreDos[i] = Number(prompt("Ingrese la nota del segundo trimestre"));
    trimestreTres[i] = Number(prompt("Ingrese la nota del tercer trimestre"));
  }
}
function calcularPromedio(): void {
  for (let i: number = 0; i < notaAlum; i++) {
    notaFinal[i] = trimestreUno[i] + trimestreDos[i] + trimestreTres[i];
    promedio[i] = notaFinal[i] / 3;
  }
}
function mostrarPromedioFinal(): void {
  for (let i: number = 0; i < notaAlum; i++) {
    console.log(
      "Las notas de los tres trimestres del alumno:",
      alumnos[i],
      "son",
      trimestreUno[i],
      trimestreDos[i],
      trimestreTres[i],
      "Su promedio final es",
      promedio[i]
    );
  }
}

cargarDatos();
calcularPromedio();
mostrarPromedioFinal();
