const probarAtributos = () => {
  let persona = {
    nombre: 'Pedro',
    apellido: 'Morales',
    edad: 24,
    estVivo: true,
  };

  console.log(persona.nombre);
  console.log(persona.edad);
  if (persona.estVivo === false) {
    console.log('no esta vivo');
  } else {
    console.log('esta vivo');
  }
};

const crearProducto = () => {
  let producto1 = {
    nombre: 'manzana',
    precio: 2.5,
    stock: 2,
  };

  let producto2 = {
    nombre: 'pera',
    precio: 12.5,
    stock: 7,
  };

  console.log(producto1.nombre);
  console.log(producto2.precio);

  if (producto1.stock == producto2.stock) {
    console.log('Ambos productos tienen el mismo stock');
  } else if (producto1.stock > producto2.stock) {
    console.log('Producto 1 tiene mayor stock');
  } else if (producto1.stock < producto2.stock) {
    console.log('Producto 2 tiene mayor stock');
  }
};
