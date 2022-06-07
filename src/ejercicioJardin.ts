let infantes: number = Number(prompt("Ingrese el número de infantes"));
let aulaAzul: number = 40;
let aulaVerde: number = 35;
let aulaAmarilla: number = 30;
let sala: string;

function calcularBancosVacios(): string {
  if (infantes <= aulaAmarilla) {
    sala = "Sala Amarilla";
  } else if (infantes <= aulaVerde) {
    sala = "Sala Verde";
  } else if (infantes <= aulaAzul) {
    sala = "Sala Azul";
  } else {
    sala = "No hay mas lugar";
  }

  return sala;
}
console.log(calcularBancosVacios());
