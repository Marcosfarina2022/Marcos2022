let usuario: string = "Juan";
let clave: string = "ClaveJuan";
let ingreseusuario: string = String(prompt("Ingrese el nombre de usuario"));
let ingreseclave: string = String(prompt("Ingrese la clave"));
if (ingreseusuario === usuario && ingreseclave === clave) {
  console.log("El usuario se registró correctamente");
} else {
  console.log("Error de registro");
}
