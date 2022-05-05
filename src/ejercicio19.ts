let sueldo: number = Number(prompt("Ingrese su sueldo"));
let porcentaje: number = 0;
let sueldoConAumento: number = 0;
if (sueldo > 0 && sueldo <= 15000) {
  sueldoConAumento = 1;
}
if (sueldo > 15000 && sueldo <= 20000) {
  sueldoConAumento = 2;
}
if (sueldo > 20000 && sueldo <= 25000) {
  sueldoConAumento = 3;
}

switch (sueldoConAumento) {
  case 1:
    porcentaje = sueldo * 1.2;
    sueldoConAumento = porcentaje;
    console.log("El aumento de sueldo es de", sueldoConAumento);
    break;
  case 2:
    porcentaje = sueldo * 1.1;
    sueldoConAumento = porcentaje;
    console.log("El aumento de sueldo es de", sueldoConAumento);
    break;
  case 3:
    porcentaje = sueldo * 1.05;
    sueldoConAumento = porcentaje;
    console.log("El aumento de sueldo es de", sueldoConAumento);
    break;

  default:
    console.log("No le corresponde aumento");
    break;
}
