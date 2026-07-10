import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  //Usamos la funcion que pide el carrito al localStorage
  const carrito = obtenerCarrito();
  carrito.push(producto);

  //Usamos la funcion que guarda el carrito en el localStorage
  guardarCarrito(carrito);

  //Utilizamos la funcion ui que actualiza el numero de carrito
  actualizarContador(carrito);
  mostrarMensaje("Producto agregado!");
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  //Elimina un elemento del array
  carrito.splice(indice, 1);

  // Actualizamos carrito
  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje("Producto eliminado!");
};

export const vaciarCarrito = () => {
  vaciarCarrito();
  actualizarContador([]);
  mostrarMensaje("Carrito vaciado");
};
