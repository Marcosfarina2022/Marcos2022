let precio: number = Number(prompt("Ingrese el precio del producto"));
let cantidad: number = Number(prompt("Ingrese la cantidad del producto"));
let precioproducto: number = precio * cantidad;
if (precioproducto > 1000) {
  let descuento: number = precioproducto * 0.1;
