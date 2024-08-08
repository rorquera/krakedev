const saludar = () => {
  //Recupera nombre
  let nombre = recuperarTexto('txtNombre');
  //Recupera apellido
  let apellido = recuperarTexto('txtApellido');
  //Recupera edad
  let edad = recuperarInt('txtEdad');
  //Recupera estatura
  let estatura = recuperarFloat('txtEstatura');
  //Mostrar texto
  mostrarTexto('lblResultado', '¡Bienvenido ' + nombre + ' ' + apellido + '!');
  //Mostrar imagen
  mostrarImagen('imgSaludo', '../img/jackSparrow.gif');
};

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
