let carrito = {
  precioTotal: 0,
  productos: [],
};

const productosDelSuper = [
  { nombre: "Queso", precio: 10, categoria: "lacteos" },
  { nombre: "Gaseosa", precio: 5, categoria: "bebidas" },
  { nombre: "Cerveza", precio: 20, categoria: "bebidas" },
  { nombre: "Arroz", precio: 7, categoria: "alimentos" },
  { nombre: "Fideos", precio: 5, categoria: "alimentos" },
  { nombre: "Lavandina", precio: 9, categoria: "limpieza" },
  { nombre: "Shampoo", precio: 3, categoria: "higiene" },
  { nombre: "Jabon", precio: 4, categoria: "higiene" },
];

const agregarProducto = (nombre, unidades) => {
  const mercaderia = productosDelSuper.find((producto) => producto.nombre === nombre);
  
  const productoEnCarrito = carrito.productos.find((producto) => producto.nombre === nombre);

  if (mercaderia) {
    if (productoEnCarrito) {
      carrito.precioTotal -= productoEnCarrito.precio * productoEnCarrito.unidades;
      productoEnCarrito.unidades += unidades;
    } else {
      carrito.productos.push({
        nombre: mercaderia.nombre,
        precio: mercaderia.precio,
        unidades: unidades,
      });
    }
    carrito.precioTotal += mercaderia.precio * unidades;
  } 
  else {
    console.log(
      "El producto no está en la lista de productos del supermercado"
    );
  }
};


const borrarProducto = (nombre) => {
    const productoIndex = carrito.productos.findIndex(producto => producto.nombre === nombre);

    if (productoIndex === -1) {
        console.log("El producto no se encuentra en el carrito");
        return;
    }
    
    const productoBorrar = carrito.productos[productoIndex];
    carrito.productos.splice(productoIndex, 1);  
    carrito.precioTotal -= productoBorrar.precio * productoBorrar.unidades;
};

agregarProducto("Jabon", 2);
agregarProducto("Shampoo", 3);
console.log(carrito);


borrarProducto("Jabon");
console.log(carrito);
