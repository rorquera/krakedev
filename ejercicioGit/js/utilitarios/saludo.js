const saludar = () => {
  //Recupera nombre
  let nombre = recuperarTexto('txtNombre');
  //Recupera apellido
  let apellido = recuperarTexto('txtApellido');
};

const recuperarTexto = (idComponente) => {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;
  return valorIngresado;
};
