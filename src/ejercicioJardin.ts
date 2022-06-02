//La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
//Dado un número de infantes ingresado por el usuario, el programa deberá
//determinar el aula que minimice la cantidad de bancos vacíos
//La salida del algoritmo es el color que identifica al aula asignada
//Ejemplo: si la cantidad de personas de un curso es 34,
//entonces el aula a asignar será la Verde.
//El aula Amarilla no puede ser asignada porque la cantidad de personas es menor
//a la cantidad de bancos disponibles.
//El aula Azul es descartada porque quedan más bancos inutilizados que
//en el aula Verde (6 versus 1).

let infantes: number = Number(prompt("Ingrese el número de infantes"));
let aulaAzul: number = 40;
let aulaVerde: number = 35;
let aulaAmarilla: number = 30;
let sala: string;

function calcularBancosVacios(): string {
  while (infantes <= 0) {
    infantes = Number(prompt("Ingrese nuevamente el número de infantes"));
    if (infantes <= aulaAmarilla) {
      sala = "Sala Amarilla";
    } else if (infantes <= aulaVerde) {
      sala = "Sala Verde";
    } else if (infantes <= aulaAzul) {
      sala = "Sala Azul";
    } else {
      sala = "No hay mas lugar";
    }
  }
  return sala;
}

console.log(calcularBancosVacios());
