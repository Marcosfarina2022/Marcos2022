/*Hacer un programa que simule la compra que hace un cliente en un
supermercado. El cliente va tener que ingresar por teclado la
CANTIDAD de productos que va a llevar, los PRODUCTOS que va
a comprar, el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.
Finalizada la compra, el programa va a mostrar por pantalla el
detalle de la compra, productos, cantidad, precio unitario y precio
total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led*/

let cantProductos: number = Number(
  prompt("ingrese la cantidad de productos que desea comprar")
);
let listaProducto: string[] = new Array(cantProductos);
let precioProducto: number[] = new Array(cantProductos);
let cantidadProducto: number[] = new Array(cantProductos);
let precioTotal: number = 0;

function cargarProductos(arregloProducto: string[]): void {
  for (let i: number = 0; i < arregloProducto.length; i++) {
    arregloProducto[i] = prompt("ingrese el producto " + i + " al carrito ");
  }
}
function cargarPrecioProducto(arregloPrecio: number[]): void {
  let precio: number = 0;
  for (let i: number = 0; i < arregloPrecio.length; i++) {
    precio = Number(
      prompt(" ingrese el precio del producto " + listaProducto[i])
    );
    while (precio <= 0) {
      precio = Number(
        prompt(" ingrese el precio del producto " + listaProducto[i])
      );
    }
    arregloPrecio[i] = precio;
  }
}

function cargarCantidadProducto(arregloCantidad: number[]): void {
  let cantidad: number = 0;
  for (let i: number = 0; i < arregloCantidad.length; i++) {
    cantidad = Number(
      prompt(
        " ingrese la cantidad del producto " +
          listaProducto[i] +
          " que va a comprar "
      )
    );
    while (cantidad <= 0) {
      cantidad = Number(
        prompt(
          " ingrese el precio del producto " +
            listaProducto[i] +
            " que va a comprar "
        )
      );
    }
    arregloCantidad[i] = cantidad;
  }
}

function mostrarDetalleCompra(): void {
  console.log("El detalle de la compra realizada es el siguiente:");
  for (let i: number = 0; i < cantProductos; i++) {
    console.log(
      cantidadProducto[i],
      " unidades de " + listaProducto[i] + " a un precio unitario de ",
      precioProducto[i],
      " es = ",
      precioProducto[i] * cantidadProducto[i]
    );
  }
}

function calcularPrecioTotal(
  arregloPrecioTotal: number[],
  arregloStock: number[]
): number {
  let total: number = 0;
  for (let i: number = 0; i < arregloPrecioTotal.length; i++) {
    total = total + arregloPrecioTotal[i] * arregloStock[i];
  }
  return total;
}

function participarTorneo(): void {
  if (precioTotal > 3000) {
    console.log("Por el importe gastado, el cliente participa por un 0 KM");
  } else if (precioTotal > 2000) {
    console.log(
      "Por el importe gastado, el cliente participa por una moto 0 KM"
    );
  } else if (precioTotal > 1000) {
    console.log("Por el importe gastado, el cliente participa por un TV LED");
  } else {
    console.log("Por el importe gastado, el cliente no participa por nada");
  }
}

cargarProductos(listaProducto);
cargarPrecioProducto(precioProducto);
cargarCantidadProducto(cantidadProducto);
mostrarDetalleCompra();
precioTotal = calcularPrecioTotal(precioProducto, cantidadProducto);
console.log("El precio total por la compra realizada es", precioTotal);
participarTorneo();
