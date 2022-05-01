//máximo de 3 intentos para colocar la clave correcta
let intentos: number = 1;
let claveingresada: string;
while (intentos <= 3 && claveingresada !== "eureka") {
  claveingresada = prompt("Ingreseclave");
  intentos++;
}
if (claveingresada === "eureka") {
  console.log("La clave ingresada es correcta");
} else {
  console.log("lo sentimos ha agotado todos sus intentos");
}
