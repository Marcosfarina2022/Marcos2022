//Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
//Se debe permitir obtener el promedio anual (es decir, de sus tres notas)
//de un alumno (ingresado por el usuario)
//Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información

let promedio: number = 0;
let cantidadAlumnos: number = Number(prompt("Ingrese la cantidad de alumnos"));
let notaAlum: number = cantidadAlumnos;
let alumnos: string[] = new Array(notaAlum);
let trimestreUno: number[] = new Array(notaAlum);
let trimestreDos: number[] = new Array(notaAlum);
let trimestreTres: number[] = new Array(notaAlum);
let notaFinal: number[] = new Array(notaAlum);

for (let i: number = 0; i < notaAlum; i++) {
  alumnos[i] = prompt("Ingrese el nombre del alumno");
  trimestreUno[i] = Number(prompt("Ingrese la nota del primer trimestre"));
  trimestreDos[i] = Number(prompt("Ingrese la nota del segundo trimestre"));
  trimestreTres[i] = Number(prompt("Ingrese la nota del tercer trimestre"));
}
for (let i: number = 0; i < notaAlum; i++) {
  notaFinal[i] = trimestreUno[i] + trimestreDos[i] + trimestreTres[i];
  promedio = notaFinal[i] / 3;
  console.log("El promedio final del alumno", alumnos[i], "es", promedio);
}
