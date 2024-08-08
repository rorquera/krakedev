const recuperarTexto = (idComponente) => {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

const recuperarInt = (idComponente) => {
  let valorCaja = recuperarTexto(idComponente);
  let valorEntero = parseInt(valorCaja);
  return valorEntero;
};

const recuperarFloat = (idComponente) => {
  let valorCaja = recuperarTexto(idComponente);
  let valorFlotante = parseFloat(valorCaja);
  return valorFlotante;
};

const mostrarTexto = (idComponente, mensaje) => {
  let componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
};

const mostrarImagen = (idComponente, rutaImagen) => {
  let componente = document.getElementById(idComponente);
  componente.src = rutaImagen;
};

const mostrarTextoEnCaja = (idComponente, valor) => {
  let componente = document.getElementById(idComponente);
  componente.value = valor;
};
