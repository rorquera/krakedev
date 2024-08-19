const validarPlaca = () => {
  let erroresEstructura;
  let placa = recuperarTexto('txtPlaca');
  let provincia;
  erroresEstructura = validarEstructura(placa);
  if (erroresEstructura === null) {
    mostrarTexto('lblResultadoPlaca', 'ESTRUCTURA VÁLIDA');
    mostrarTexto('lblValidacion', '');
    provincia = obtenerProvincia(placa);
    if (provincia != null && provincia != undefined) {
      mostrarTexto('lblResPlaca', placa);
      mostrarTexto('lblResProvincia', provincia);
    } else {
      mostrarTexto('lblResPlaca', '');
      mostrarTexto('lblResProvincia', 'PROVINCIA INCORRECTA');
    }
  } else {
    mostrarTexto('lblResultadoPlaca', 'ESTRUCTURA INCORRECTA');
    mostrarTexto('lblValidacion', erroresEstructura);
  }
};
