const validarEstructura = (placa) => {
  let error = null;
  if (!(placa.length >= 7 && placa.length <= 8)) {
    error = 'La placa debe tener entre 7 y 8 caracteres. \n';
  }
  if (!esMayuscula(placa.charAt(0))) {
    error = formatearError(
      error,
      'La primera letra de la placa debe ser mayúscula.'
    );
  }
  if (!esMayuscula(placa.charAt(1))) {
    error = formatearError(
      error,
      'La segunda letra de la placa debe ser mayúscula.'
    );
  }
  if (!esMayuscula(placa.charAt(2))) {
    error = formatearError(
      error,
      'La tercera letra de la placa debe ser mayúscula.'
    );
  }
  if (!esGuion(placa.charAt(3))) {
    error = formatearError(
      error,
      'La cuarta letra de la placa debe ser un guión.'
    );
  }
  if (!esDigito(placa.charAt(4))) {
    error = formatearError(
      error,
      'La quinta letra de la placa debe ser un dígito.'
    );
  }
  if (!esDigito(placa.charAt(5))) {
    error = formatearError(
      error,
      'La sexta letra de la placa debe ser un dígito.'
    );
  }
  if (!esDigito(placa.charAt(6))) {
    error = formatearError(
      error,
      'La séptima letra de la placa debe ser un dígito.'
    );
  }
  if (placa.length == 8 && !esDigito(placa.charAt(7))) {
    error = formatearError(
      error,
      'La octava letra de la placa debe ser un dígito.'
    );
  }

  return error;
};

const formatearError = (error, leyenda) => {
  if (error == null) {
    error = leyenda + '\n';
  } else {
    error += leyenda + '\n';
  }
  return error;
};

const obtenerProvincia = (placa) => {
  let nombreProvincia = null;
  switch (placa.charAt(0)) {
    case 'A':
      nombreProvincia = 'Azuay';
      break;
    case 'B':
      nombreProvincia = 'Bolívar';
      break;
    case 'U':
      nombreProvincia = 'Cañar';
      break;
    case 'C':
      nombreProvincia = 'Carchi';
      break;
    case 'X':
      nombreProvincia = 'Cotopaxi';
      break;
    case 'H':
      nombreProvincia = 'Chimborazo';
      break;
    case 'O':
      nombreProvincia = 'El Oro';
      break;
    case 'E':
      nombreProvincia = 'Esmeraldas';
      break;
    case 'W':
      nombreProvincia = 'Galápagos';
      break;
    case 'G':
      nombreProvincia = 'Guayas';
      break;
    case 'I':
      nombreProvincia = 'Imbabura';
      break;
    case 'L':
      nombreProvincia = 'Loja';
      break;
    case 'R':
      nombreProvincia = 'Los Ríos';
      break;
    case 'M':
      nombreProvincia = 'Manabí';
      break;
    case 'V':
      nombreProvincia = 'Morona Santiago';
      break;
    case 'N':
      nombreProvincia = 'Napo';
      break;
    case 'S':
      nombreProvincia = 'Pastaza';
      break;
    case 'P':
      nombreProvincia = 'Pichincha';
      break;
    case 'K':
      nombreProvincia = 'Sucumbíos';
      break;
    case 'Q':
      nombreProvincia = 'Orellana';
      break;
    case 'T':
      nombreProvincia = 'Tungurahua';
      break;
    case 'Z':
      nombreProvincia = 'Zamora Chinchipe';
      break;
    case 'Y':
      nombreProvincia = 'Santa Elena';
      break;
  }
  return nombreProvincia;
};

const obtenerTipoVehiculo = (placa) => {
  let tipoVehiculo = null;
  let segundaLetra = placa.charAt(1);

  if (segundaLetra === 'A' || segundaLetra === 'Z') {
    tipoVehiculo = 'Taxi/Autobus';
  } else if (segundaLetra === 'E') {
    tipoVehiculo = 'Gubernamental';
  } else if (segundaLetra === 'X') {
    tipoVehiculo = 'Uso Oficial';
  } else if (segundaLetra === 'S') {
    tipoVehiculo = 'Gobierno Provincial';
  } else if (segundaLetra === 'M') {
    tipoVehiculo = 'Municipal';
  } else {
    tipoVehiculo = 'Particular';
  }

  return tipoVehiculo;
};
