const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  //Convertimos a json antes de guardar con stringify
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  //Convertimos texto a js para obtener los datos
  return JSON.parse(localStorage.getItem(KEY)) || [];
  return carrito.filter((p) => p);
};

export const vaciarCarrito = () => {
  localStorage.removeItem(KEY);
};
