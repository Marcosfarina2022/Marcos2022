//Resultado final de un producto que obtiene el 10% de descuento
//Ingresamos el precio del producto
let precio: number = Number(prompt("ingrese el precio del producto"));
//Porcentaje por el cual debemos calcular el descuento
let porcentaje: number = 0.1;
//Calculamos el descuento que tiene el producto
let descuentoaplicado: number = precio * porcentaje;
//Calculamos el precio final del producto menos el descuento aplicado
let resultadofinal: number = precio - descuentoaplicado;
//Mostramos el resultado final por consola
console.log("el precio final del producto es", resultadofinal);
