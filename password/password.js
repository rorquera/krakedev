const validarPassword = (validarPassword) => {
  let validaciones = '';
  if (validarPassword.length < 8) {
    validaciones = 'La longitud mínima debe ser de 8 caracteres.\n';
  }
  if (validarPassword.length > 16) {
    validaciones += 'La longitud máxima debe ser de 16 caracteres.\n';
  }
  if (!verificarMayuscula(validarPassword)) {
    validaciones += 'El password debe contener al menos una letra mayúscula.\n';
  }
  if (!verificarDigito(validarPassword)) {
    validaciones += 'El password debe contener al menos una un dígito.\n';
  }
  if (!verificarCaracterEspecial(validarPassword)) {
    validaciones +=
      'El password debe contener al menos un caracter especial.\n';
  }
  return validaciones;
};

const ejecutarValidacion = () => {
  let resultado;
  resultado = validarPassword(recuperarTexto('txtPassword'));
  mostrarTexto('txtValidaciones', resultado);
};

const verificarMayuscula = (validarPassword) => {
  let tieneLetraMayuscula = false;
  for (let i = 0; i < validarPassword.length; i++) {
    if (esMayuscula(validarPassword.charAt(i))) {
      tieneLetraMayuscula = true;
    }
  }
  return tieneLetraMayuscula;
};

const verificarDigito = (validarPassword) => {
  let tieneDigito = false;
  for (let i = 0; i < validarPassword.length; i++) {
    if (esDigito(validarPassword.charAt(i))) {
      tieneDigito = true;
    }
  }
  return tieneDigito;
};

const verificarCaracterEspecial = (validarPassword) => {
  let tieneCaracterEspecial = false;
  for (let i = 0; i < validarPassword.length; i++) {
    if (esCaracterEspecial(validarPassword.charAt(i))) {
      tieneCaracterEspecial = true;
    }
  }
  return tieneCaracterEspecial;
};
