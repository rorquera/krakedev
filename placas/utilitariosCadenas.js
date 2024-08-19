const esMayuscula = (caracter) => {
  let caracterMayuscula;
  let codigo = caracter.charCodeAt(0);
  if (codigo >= 65 && codigo <= 90) {
    caracterMayuscula = true;
  } else {
    caracterMayuscula = false;
  }
  return caracterMayuscula;
};

const esDigito = (caracter) => {
  let caracterDigito;
  let codigo = caracter.charCodeAt(0);
  if (codigo >= 48 && codigo <= 57) {
    caracterDigito = true;
  } else {
    caracterDigito = false;
  }
  return caracterDigito;
};

const esGuion = (caracter) => {
  let caracterGuion;
  let codigo = caracter.charCodeAt(0);
  if (codigo === 45) {
    caracterGuion = true;
  } else {
    caracterGuion = false;
  }
  return caracterGuion;
};
