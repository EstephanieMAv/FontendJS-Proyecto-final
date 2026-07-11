//funciones para enviar obj al array
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

//funcion para que se ocupe de renderizar las tarjetas
const renderizarProductos = () => {
  //Agarramos el div para meter las tarjetas
  const contenedor = document.getElementById("contenedor-tarjetas");

  fetch("./data/productos.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");

        const img = document.createElement("img");
        img.src = `./${producto.img}`;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const button = document.createElement("button");
        button.classList.add("btn", "bg-secondary", "text-dark");
        button.textContent = "Agregar al carrito";

        button.addEventListener("click", () => {
          agregarAlCarrito();
        });

        //Armar la estructura de la tarjeta
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(button);
        //Agregamos la tarjeta al DOM
        contenedor.appendChild(tarjeta);
      });
    })
    .catch((error) => console.log(error));
  //Sigo adentro de la funcion renderizar
};

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarProductos();
});
