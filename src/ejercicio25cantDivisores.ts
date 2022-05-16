/*Implemente un método llamado cantidadDeDivisores que 
reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, 
por lo que la respuesta debería ser 5 */

//Función para saber si el numero ingresado es múltiplo
function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}
//Función que cuenta la cantidad de divisores que tiene un número ingresado por teclado
function cantidadDeDivisores(numero: number): number {
  let contador: number = 0;
  for (let indice = 0; indice <= numero; indice++) {
    if (esMultiplo(numero, indice) === true) {
      contador++;
    }
  }
  return contador;
}
let numero: number = Number(prompt("Ingrese un numero"));

console.log(
  "El numero",
  numero,
  "Tiene:",
  cantidadDeDivisores(numero),
  "divisores"
);
