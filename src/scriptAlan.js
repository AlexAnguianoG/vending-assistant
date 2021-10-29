const productos = [
  { nombre: "Agua", precio: "10", categoria: "Bebidas", posicion: "10" },
  { nombre: "Fuze Tea", precio: "18", categoria: "Bebidas", posicion: "11" },
  { nombre: "Gatorade", precio: "20", categoria: "Bebidas", posicion: "12" },
  { nombre: "Oreo", precio: "16", categoria: "Galletas", posicion: "20" },
  { nombre: "Emperador", precio: "14", categoria: "Galletas", posicion: "21" },
  { nombre: "Chips Ahoy", precio: "14", categoria: "Galletas", posicion: "22" },
  { nombre: "Tostitos", precio: "18", categoria: "Papitas", posicion: "30" },
  { nombre: "Doritos", precio: "15", categoria: "Papitas", posicion: "31" },
  { nombre: "Takis", precio: "15", categoria: "Papitas", posicion: "32" },
  { nombre: "Cheetos", precio: "15", categoria: "Papitas", posicion: "32" },
  { nombre: "M&M", precio: "15", categoria: "Chocolates", posicion: "40" },
  { nombre: "Bubu Lubu", precio: "16", categoria: "Chocolates", posicion: "41" },
  { nombre: "Kinder Delice", precio: "10", categoria: "Chocolates", posicion: "42" },
  { nombre: "Skittles", precio: "14", categoria: "Dulces", posicion: "50" },
  { nombre: "Halls", precio: "16", categoria: "Dulces", posicion: "51" },
  { nombre: "Jollyrancher", precio: "10", categoria: "Dulces", posicion: "52" },
];

const productosConStock = [];

const categorias = [];
productos.forEach((producto) => {
  if (!categorias.includes(producto.categoria)) {
    categorias.push(producto.categoria);
  }
});

const patronProductos = productos.map((p) => `${p.nombre.toLowerCase()}~${p.nombre.toLowerCase()}`).join("|");

// ----- COMANDOS ----- //

intent("Que productos (hay|tienes) (disponibles|en|) (existencia|la|) (maquinita|maquina|) (expendedora|)", async (p) => {
  const categoriasProductos = categorias.map((p) => p).join(", ");
  p.play(voice("es"), `Tenemos ${categoriasProductos}, de cuál quieres saber los productos?`);

  const categoriaSeleccionada = await p.then(elegirCategoria);

  const productosCategoria = productos
    .filter((p) => p.categoria.toLowerCase().includes(categoriaSeleccionada.toLowerCase()))
    .map((p) => p.nombre)
    .join(", ");

  p.play(voice("es"), `De ${categoriaSeleccionada} tenemos ${productosCategoria}`);
});

intent(
  `Cuanto (cuesta|cuestan) (la|las|el|los) $(PRODUCTO~ ${patronProductos})`,
  `Que precio (tiene|tienen) (la|las|el|los) $(PRODUCTO~ ${patronProductos})`,
  `Cual es el precio (de|del) (la|las|los|) $(PRODUCTO~ ${patronProductos})`,
  `Cuanto (cuesta|cuestan) (la|las|el|los) $(PRODUCTO_INEXISTENTE* .*)`,
  `Que precio (tiene|tienen) (la|las|el|los) $(PRODUCTO_INEXISTENTE* .*)`,
  `Cual es el precio (de|del) (la|las|los|) $(PRODUCTO_INEXISTENTE* .*)`,
  (p) => {
    if (p.PRODUCTO_INEXISTENTE) {
      p.play(voice("es"), `No contamos con ${p.PRODUCTO_INEXISTENTE.value}`);
      return;
    } else {
      const productoSolicitado = p.PRODUCTO.label.toLowerCase();
      const productoEncontrado = productos.find((m) => m.nombre.toLowerCase().includes(productoSolicitado));
      p.play(voice("es"), `El producto ${productoSolicitado} cuesta $${productoEncontrado.precio} pesos`);
    }
  }
);

intent(`(Quiero|Despachame|Dame|Comprar|Un|Unos|) (un|unos|una|unas) $(PRODUCTO~ ${patronProductos}) (por favor|)`, `(Quiero|Despachame|Dame|Comprar|Un|Unos|) $(PRODUCTO_INEXISTENTE* .*)`, (p) => {
  if (p.PRODUCTO_INEXISTENTE) {
    p.play(voice("es"), `No contamos con ${p.PRODUCTO_INEXISTENTE.value}`);
    return;
  } else {
    const productoSolicitado = p.PRODUCTO.label.toLowerCase();
    const productoEncontrado = productos.find((producto) => producto.nombre.toLowerCase().includes(productoSolicitado));
    p.play(voice("es"), `Se seleccionó ${productoEncontrado.nombre}, realice el pago de ${productoEncontrado.precio} pesos. Gracias, hasta luego`);
  }
});

const elegirCategoria = context(() => {
  const patronCategorias = categorias.map((p) => p).join("|");
  intent(`(De|Dime|) (que|) $(CATEGORIA~ ${patronCategorias}) (hay|tienes|)`, (p) => p.resolve(p.CATEGORIA.value));
});
