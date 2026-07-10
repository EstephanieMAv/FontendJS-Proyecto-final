//Funcion que actualiza  el contador del carrito en el nav
export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

//Funcion para librerias
export const mostrarMensaje = (texto) => {
  alert(texto);
};
