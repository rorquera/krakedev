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

const cambiarClaseImagen = (idComponente, nombreClase) => {
  let cmpImagen = document.getElementById(idComponente);
  cmpImagen.className = nombreClase;
};

const recuperarTextoInterno = (idComponente) => {
  let componente;
  componente = document.getElementById(idComponente);
  return componente.innerText;
};

const generarNumeroAleatorio = (min, max) => {
  return parseInt(Math.random() * parseInt(max) + parseInt(min));
};