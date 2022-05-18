//Crear un programa con una funcion que reciba por parametro
//su nombre y apellido y lo imprima por consola.
function mostrarApellidoyNombre(
  nombre: string,
  apellido: string,
  mostrar: string
): string {
  mostrar = nombre + " " + apellido;
  return mostrar;
}

let resultado: string = 0;
let nom: string = prompt("Ingrese su nombre");
let apell: string = prompt("Ingrese el apellido");
resultado = mostrarApellidoyNombre(nom, apell, resultado);
console.log("El nombre y apellido ingresado es:", resultado);
