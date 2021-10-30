// const productos = [
//   { nombre: "Agua", precio: "10", categoria: "Bebidas" },
//   { nombre: "Fuze Tea", precio: "18", categoria: "Bebidas" },
//   { nombre: "Gatorade", precio: "20", categoria: "Bebidas" },
//   { nombre: "Oreo", precio: "16", categoria: "Galletas" },
//   { nombre: "Emperador", precio: "14", categoria: "Galletas" },
//   { nombre: "Chips Ahoy", precio: "14", categoria: "Galletas" },
//   { nombre: "Tostitos", precio: "18", categoria: "Papitas" },
//   { nombre: "Doritos", precio: "15", categoria: "Papitas" },
//   { nombre: "Takis", precio: "15", categoria: "Papitas" },
//   { nombre: "Cheetos", precio: "15", categoria: "Papitas" },
//   { nombre: "M&M", precio: "15", categoria: "Chocolates" },
//   { nombre: "Bubu Lubu", precio: "16", categoria: "Chocolates" },
//   { nombre: "Kinder Delice", precio: "10", categoria: "Chocolates" },
//   { nombre: "Skittles", precio: "14", categoria: "Dulces" },
//   { nombre: "Halls", precio: "16", categoria: "Dulces" },
//   { nombre: "Jollyrancher", precio: "10", categoria: "Dulces" },
// ];

// const productosConStock = [];

// const categorias = [];
// productos.forEach((producto) => {
//   if (!categorias.includes(producto.categoria)) {
//     categorias.push(producto.categoria);
//   }
// });

// const patronProductos = productos.map((p) => `${p.nombre.toLowerCase()}~${p.nombre.toLowerCase()}`).join("|");

// const patronCategorias = categorias.map((p) => `${p.toLowerCase()}~${p.toLowerCase()}`).join("|");

// // ----- COMANDOS ----- //

// intent("(Dime|Cuentame|) (que|cuales) productos (hay|tienes|estan|se encuentran) (disponibles|en|) (existencia|la|) (maquinita|maquina|) (expendedora|)", async (p) => {
//   const categoriasProductos = categorias.map((p) => p).join(", ");
//   p.play(voice("es"), `Tenemos ${categoriasProductos}, de cuál quieres saber los productos?`);

//   const categoriaSeleccionada = await p.then(elegirCategoria);

//   const productosCategoria = productos
//     .filter((p) => p.categoria.toLowerCase().includes(categoriaSeleccionada.toLowerCase()))
//     .map((p) => p.nombre)
//     .join(", ");

//   p.play(voice("es"), `De ${categoriaSeleccionada} tenemos ${productosCategoria}`);
// });

// intent(`(De que|Que|Cuales|Tienes|) $(CATEGORIA~ ${patronCategorias}) (tienes|hay|) (en la maquinita|en la maquina|en la maquina expendedora|)`, `(De que|Que|Cuales|Tienes|)  $(CATEGORIA_INEXISTENTE* .*) (tienes|hay|) (en la maquinita|en la maquina|en la maquina expendedora|)`, (p) => {
//   if (p.CATEGORIA_INEXISTENTE) {
//     p.play(voice("es"), `La maquina no cuenta con ${p.CATEGORIA_INEXISTENTE.value}`);
//     return;
//   } else {
//     const categoriaSolicitada = p.CATEGORIA.label.toLowerCase();
//     const productosCategoria = productos
//       .filter((p) => p.categoria.toLowerCase().includes(categoriaSolicitada.toLowerCase()))
//       .map((p) => p.nombre)
//       .join(", ");
//     p.play(voice("es"), `De ${categoriaSolicitada} tenemos ${productosCategoria}`);
//   }
// });

// intent(
//   `Cuanto (cuesta|cuestan|) (la|las|el|los) $(PRODUCTO~ ${patronProductos})`,
//   `Que precio (tiene|tienen|) (la|las|el|los) $(PRODUCTO~ ${patronProductos})`,
//   `Cual es el precio (de|del) (la|las|los|) $(PRODUCTO~ ${patronProductos})`,
//   `Cuanto (cuesta|cuestan|) (la|las|el|los) $(PRODUCTO_INEXISTENTE* .*)`,
//   `Que precio (tiene|tienen|) (la|las|el|los) $(PRODUCTO_INEXISTENTE* .*)`,
//   `Cual es el precio (de|del) (la|las|los|) $(PRODUCTO_INEXISTENTE* .*)`,
//   (p) => {
//     if (p.PRODUCTO_INEXISTENTE) {
//       p.play(voice("es"), `La maquina no cuenta con ${p.PRODUCTO_INEXISTENTE.value}`);
//       return;
//     } else {
//       const productoSolicitado = p.PRODUCTO.label.toLowerCase();
//       const productoEncontrado = productos.find((m) => m.nombre.toLowerCase().includes(productoSolicitado));
//       p.play(voice("es"), `El producto ${productoSolicitado} tiene un costo de ${productoEncontrado.precio} pesos`);
//     }
//   }
// );

// intent(`(Selecciona|Quiero|Despachame|Dame|Comprar|Un|Unos|) (un|unos|una|unas|) $(PRODUCTO~ ${patronProductos}) (por favor|)`, `(Selecciona|Quiero|Despachame|Dame|Comprar|Un|Unos|) $(PRODUCTO_INEXISTENTE* .*)`, (p) => {
//   if (p.PRODUCTO_INEXISTENTE) {
//     p.play(voice("es"), `La maquina no cuenta con ${p.PRODUCTO_INEXISTENTE.value}`);
//     return;
//   } else {
//     const productoSolicitado = p.PRODUCTO.label.toLowerCase();
//     const productoEncontrado = productos.find((producto) => producto.nombre.toLowerCase().includes(productoSolicitado));
//     p.play(voice("es"), `Se seleccionó ${productoEncontrado.nombre}, ahora realice el pago de ${productoEncontrado.precio} pesos. Gracias, hasta luego`);
//   }
// });

// const elegirCategoria = context(() => {
//   const patronCategorias = categorias.map((p) => p).join("|");
//   intent(`(De|Dime|que|) (Que|) $(CATEGORIA~ ${patronCategorias}) (hay|tienes|)`, (p) => p.resolve(p.CATEGORIA.value));
// });
