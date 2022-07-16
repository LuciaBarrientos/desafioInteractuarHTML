// declaración de productos

class Producto {
    constructor (id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    }
}

const productos = [];

productos.push (new Producto (1, "remera", 1500));
productos.push (new Producto (2, "pantalon", 4000));
productos.push (new Producto (3, "buzo", 3500));
productos.push (new Producto (4, "camisa", 2500));

let carrito = document.createElement ("section");
document.body.append(carrito);
carrito.className = "carrito";

carrito.innerHTML = ` <b>Tu carrito de compras:</b>
                      <p>Tu carrito está vacío.</p>
                      <p class="btnCarrito" id="confirmar">Confirmar compra</p>
                      <p class="btnCarrito" id="vaciar">Vaciar carrito</p>`;

document.body.append(carrito);


for (const producto of productos) {
    let catalogo = document.createElement("div");
      
    catalogo.innerHTML =   `<b> ${producto.nombre}</b>
                            <p> $ ${producto.precio}</p>
                            <p class="btnComprar"> Comprar </p>`;
    document.body.append(catalogo);
}

