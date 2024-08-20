const ejecutarPrueba1 = () => {
  let mensaje;
  mensaje = recuperarTexto('txtCadena');
  recorrerCadena(mensaje);
};

const recorrerCadena = (cadena) => {
  let caracter;
  for (let i = 0; i < cadena.length; i++) {
    caracter = cadena.charAt(i);
    console.log('Caracter: ' + caracter + ' Posicion: ' + i);
  }

  for (let i = 0; i <= cadena.length - 1; i++) {
    caracter = cadena.charAt(i);
    console.log('Caracter: ' + caracter + ' Posicion: ' + i);
  }
};

const ejecutarPrueba2 = () => {
  let mensaje;
  mensaje = recuperarTexto('txtCadena');
  cadenaInvertida = invertirCadena(mensaje);
  mostrarTexto('txtInvertido', cadenaInvertida);
};

const invertirCadena = (cadena) => {
  let cadenaInvertida='';
  for (let i = cadena.length - 1; i >= 0; i--) {
    caracter = cadena.charAt(i);
    cadenaInvertida = cadenaInvertida + caracter;
  }
  return cadenaInvertida;
};
