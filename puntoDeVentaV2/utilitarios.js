mostrarImagen = function (idComponente, rutaImagen) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.src = rutaImagen;
};
mostrarTexto = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
};
mostrarTextoEnCaja = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.value = mensaje;
};

recuperarTexto = function (idComponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

recuperarInt = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  let valorEntero = parseInt(valorCaja);
  return valorEntero;
};

recuperarFloat = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  let valorFlotante = parseFloat(valorCaja);
  return valorFlotante;
};

const esProductoValido = (idComponente, idComponenteError) => {
  productoValido = false;
  if (document.getElementById(idComponente).value.trim().length === 0) {
    mostrarTexto(idComponenteError, 'Campo obligatorio');
    productoValido = false;
  } else {
    mostrarTexto(idComponenteError, '');
    productoValido = true;
  }
  return productoValido;
};

const esCantidadValido = (cantidad) => {
  cantidadValido = false;
  if (cantidad >= 0 && cantidad <= 100) {
    mostrarTexto('errTxtCantidad', '');
    cantidadValido = true;
  } else {
    mostrarTexto('errTxtCantidad', 'Debe ser entre 0 y 100');
    cantidadValido = false;
  }
  return cantidadValido;
};

const esPrecioValido = (precioProducto) => {
  precioValido = false;
  if (precioProducto >= 0 && precioProducto <= 50) {
    mostrarTexto('errTxtPrecio', '');
    precioValido = true;
  } else {
    mostrarTexto('errTxtPrecio', 'Debe ser entre 0 y 50');
    precioValido = false;
  }
  return precioValido;
};
