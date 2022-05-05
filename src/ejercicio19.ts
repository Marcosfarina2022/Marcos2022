//El siguiente ejercicio calcula el porcentaje de aumento que tendrán los empleados
let sueldo: number = Number(prompt("Ingrese su sueldo"));
let porcentaje: number = 0;
let sueldoSinAumento: number = 0;
let sueldoConAumento: number = 0;
//Rangos de sueldos para saber cuanto de incremento le va a corresponder al empleado
if (sueldo > 0 && sueldo <= 15000) {
  sueldoSinAumento = 1;
}
if (sueldo > 15000 && sueldo <= 20000) {
  sueldoSinAumento = 2;
}
if (sueldo > 20000 && sueldo <= 25000) {
  sueldoSinAumento = 3;
}

switch (sueldoSinAumento) {
  //El empleado recibe un 20% de aumento
  case 1:
    sueldoConAumento = sueldo * 1.2;
    console.log("El aumento de sueldo es de 20%");
    console.log("Usted tiene un aumento de sueldo de", sueldoConAumento);
    break;
  //El empleado recibe un 10% de aumento
  case 2:
    sueldoConAumento = sueldo * 1.1;
    console.log("El aumento de sueldo es de 10%");
    console.log("Usted tiene un aumento de sueldo de", sueldoConAumento);
    break;
  //El empleado recibe un 5% de aumento
  case 3:
    sueldoConAumento = sueldo * 1.05;
    console.log("El aumento de sueldo es de 5%");
    console.log("Usted tiene un aumento de sueldo de", sueldoConAumento);
    break;
  //El empleado no recibe ningun aumento
  default:
    console.log("No le corresponde aumento");
    break;
}
