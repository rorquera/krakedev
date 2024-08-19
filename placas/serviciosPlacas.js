const validarEstructura = (placa) => {
  let error = null;
  if (!(placa.length >= 7 && placa.length <= 8)) {
    error = 'La placa debe tener entre 7 y 8 caracteres. \n';
  }
  if (!esMayuscula(placa.charAt(0))) {
    error = formatearError(error, 'La primera letra de la placa debe ser mayúscula.');
  }
  if (!esMayuscula(placa.charAt(1))) {
    error = formatearError(error, 'La segunda letra de la placa debe ser mayúscula.');
  }
  if (!esMayuscula(placa.charAt(2))) {
    error = formatearError(error, 'La tercera letra de la placa debe ser mayúscula.');
  }
  if (!esGuion(placa.charAt(3))) {
    error = formatearError(error, 'La cuarta letra de la placa debe ser un guión.');
  }
  if (!esDigito(placa.charAt(4))) {
    error = formatearError(error, 'La quinta letra de la placa debe ser un dígito.');
  }
  if (!esDigito(placa.charAt(5))) {
    error = formatearError(error, 'La sexta letra de la placa debe ser un dígito.');
  }
  if (!esDigito(placa.charAt(6))) {
    error = formatearError(error, 'La séptima letra de la placa debe ser un dígito.');
  }
  if (placa.length == 8 && !esDigito(placa.charAt(7))) {
    error = formatearError(error, 'La octava letra de la placa debe ser un dígito.');
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
