//Verifica que un número ingresado por teclado es par o inpar y si es 0
//que vuelva a ingresar otro número
let numero: number = Number(prompt("Ingrese un número"));
while (numero <= 0) {
  let numero: number = Number(prompt("Ingrese otro número distinto a 0"));
}
if (numero % 2 === 0) {
  console.log("El numero ingresado es par");
} else {
  console.log("El numero ingresado es inpar");
}
