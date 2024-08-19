const validarPlaca = () => {
  let erroresEstructura;
  erroresEstructura = validarEstructura(recuperarTexto('txtPlaca'));
  if (erroresEstructura === null) {
    mostrarTexto('lblResultadoPlaca', 'ESTRUCTURA VÁLIDA');
    mostrarTexto('lblValidacion', '');
  } else {
    mostrarTexto('lblResultadoPlaca', 'ESTRUCTURA INCORRECTA');
    mostrarTexto('lblValidacion', erroresEstructura);
  }
};
