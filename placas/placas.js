const validarPlaca = () => {
  let placa = recuperarTexto('txtPlaca');
  verificarEstructura(placa);
  verificarProvicia(placa);
  verificarTipoVehiculo(placa);
};

const verificarEstructura = (placa) => {
  let erroresEstructura;
  erroresEstructura = validarEstructura(placa);
  if (erroresEstructura === null) {
    mostrarTexto('lblResultadoPlaca', 'ESTRUCTURA VÁLIDA');
    mostrarTexto('lblResPlaca', placa);
    mostrarTexto('lblValidacion', '');
  } else {
    mostrarTexto('lblResultadoPlaca', 'ESTRUCTURA INCORRECTA');
    mostrarTexto('lblValidacion', erroresEstructura);
    return;
  }
};

const verificarProvicia = (placa) => {
  let provincia = obtenerProvincia(placa);
  if (provincia != null && provincia != undefined) {
    mostrarTexto('lblResProvincia', provincia);
  } else {
    mostrarTexto('lblResPlaca', '');
    mostrarTexto('lblResVehiculo', '');
    mostrarTexto('lblResProvincia', 'PROVINCIA INCORRECTA');
  }
};

const verificarTipoVehiculo = (placa) => {
  let tipoVehiculo = obtenerTipoVehiculo(placa);
  if (tipoVehiculo != null && tipoVehiculo != undefined) {
    mostrarTexto('lblResVehiculo', tipoVehiculo);
  } else {
    mostrarTexto('lblResPlaca', '');
    mostrarTexto('lblResProvincia', '');
    mostrarTexto('lblResVehiculo', 'TIPO VEHICULO INCORRECTO');
  }
};
