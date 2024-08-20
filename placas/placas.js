const validarPlaca = () => {
  let placa = recuperarTexto('txtPlaca');
  if (verificarEstructura(placa) !== null) return;
  verificarProvicia(placa);
  verificarTipoVehiculo(placa);
  verificarPicoYPlaca(placa);
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
  }
  return erroresEstructura;
};

const verificarProvicia = (placa) => {
  let provincia = obtenerProvincia(placa);
  if (provincia != null && provincia != undefined) {
    mostrarTexto('lblResProvincia', provincia);
  } else {
    mostrarTexto('lblResProvincia', 'PROVINCIA INCORRECTA');
  }
};

const verificarTipoVehiculo = (placa) => {
  let tipoVehiculo = obtenerTipoVehiculo(placa);
  if (tipoVehiculo != null && tipoVehiculo != undefined) {
    mostrarTexto('lblResVehiculo', tipoVehiculo);
    mostrarPlacaGeneral(placa);
  } else {
    mostrarTexto('lblResVehiculo', 'TIPO VEHICULO INCORRECTO');
  }
};

const verificarPicoYPlaca = (placa) => {
  mostrarTexto('lblResPicoPlaca', obtenerDiaPicoYPlaca(placa));
};

const mostrarPlacaGeneral = (placa) => {
  let txtProvincia = recuperarTextoInterno('lblResProvincia');
  let txtTipoVehiculo = recuperarTextoInterno('lblResVehiculo');
  if (
    txtProvincia != 'PROVINCIA INCORRECTA' &&
    txtTipoVehiculo != 'TIPO VEHICULO INCORRECTO'
  ) {
    if (txtTipoVehiculo === 'Taxi/Autobus') {
      cambiarClaseImagen('txtCabeceraPlaca', 'naranja');
      cambiarClaseImagen('div-placa', 'div-placa-container');
    } else if (txtTipoVehiculo === 'Gubernamental') {
      cambiarClaseImagen('txtCabeceraPlaca', 'amarillo');
      cambiarClaseImagen('div-placa', 'div-placa-container');
    } else if (txtTipoVehiculo === 'Uso Oficial') {
      cambiarClaseImagen('txtCabeceraPlaca', 'amarillo');
      cambiarClaseImagen('div-placa', 'div-placa-container');
    } else if (txtTipoVehiculo === 'Gobierno Provincial') {
      cambiarClaseImagen('txtCabeceraPlaca', 'verde');
      cambiarClaseImagen('div-placa', 'div-placa-container');
    } else if (txtTipoVehiculo === 'Municipal') {
      cambiarClaseImagen('txtCabeceraPlaca', 'verde');
      cambiarClaseImagen('div-placa', 'div-placa-container');
    } else if (txtTipoVehiculo === 'Particular') {
      cambiarClaseImagen('txtCabeceraPlaca', 'plateado');
      cambiarClaseImagen('div-placa', 'div-placa-container');
    }
    mostrarTexto('txtCabeceraPlaca', 'ECUADOR');
    mostrarTexto('txtNumPlaca', placa);
  } else {
    cambiarClaseImagen('txtCabeceraPlaca', '');
    cambiarClaseImagen('div-placa', '');
    mostrarTexto('txtCabeceraPlaca', '');
    mostrarTexto('txtNumPlaca', '');
  }
};

const limpiar = () => {
  mostrarTexto('txtCabeceraPlaca', '');
  mostrarTexto('txtNumPlaca', '');
  mostrarTexto('lblResVehiculo', '');
  mostrarTexto('lblResProvincia', '');
  mostrarTexto('lblValidacion', '');
  mostrarTexto('lblResPlaca', '');
  mostrarTextoEnCaja('txtPlaca', '');
  mostrarTexto('lblResultadoPlaca', '');
  mostrarTexto('lblResPicoPlaca', '');
  cambiarClaseImagen('txtCabeceraPlaca', '');
  cambiarClaseImagen('div-placa', '');
};
