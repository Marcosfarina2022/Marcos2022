//crear una función que reciba un valor numerico y devuelva true si es par
//o false si es falso con retorno
function parOInpar(numero: number): boolean {
  let resultado: boolean;
  if (numero % 2 === 0) {
    resultado = true;
    return resultado;
  } else {
    resultado = false;
    return resultado;
  }
}
let r: number = 0;
let valor: number = Number(prompt("Ingrese un valor"));
r = parOInpar(valor);
console.log("El resultado del valor ingresado es:", r);
