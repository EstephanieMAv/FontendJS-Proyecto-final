import { guardarCarrito, obtenerCarrito, vaciarCarrito } from "./storage.js";
const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  //Convertimos a json antes de guardar con stringify
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  //Convertimos texto a js para obtener los datos
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarrito = () => {
  localStorage.removeItem(KEY);
};
