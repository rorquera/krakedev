const frutas = ['pera', 'manzana', 'banana'];

const probarBusqueda = () => {
  const frutaIngresada = recuperarTexto('lblFruta');
  let frutaEncontrada = buscar(frutaIngresada);
  if (frutaEncontrada != null) {
    alert(frutaEncontrada + ' existe en el cesto!!');
  } else {
    alert('No existe la fruta');
  }
};

const buscar = (fruta) => {
  let frutaEncontrada = null;
  for (let i = 0; i < frutas.length; i++) {
    if (fruta === frutas[i]) {
      frutaEncontrada = frutas[i];
      break;
    }
  }
  return frutaEncontrada;
};
