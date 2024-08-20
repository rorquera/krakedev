const obtenerAleatorio = () => {
  let numeroAleatorio = generarNumeroAleatorio(1, 3);
  return numeroAleatorio;
};

const generarElemento = () => {
  let numero = obtenerAleatorio();
  let resultado;
  if (numero === 1) {
    resultado = 'piedra';
  } else if (numero === 2) {
    resultado = 'papel';
  } else if (numero === 3) {
    resultado = 'tijera';
  }
  return resultado;
};

const determinarGanador = (eleccionJugador1, eleccionJugador2) => {
  let resultado;
  if (eleccionJugador1 == 'piedra' && eleccionJugador2 == 'piedra') {
    resultado = 0;
  } else if (eleccionJugador1 == 'piedra' && eleccionJugador2 == 'papel') {
    resultado = 2;
  } else if (eleccionJugador1 == 'piedra' && eleccionJugador2 == 'tijera') {
    resultado = 1;
  } else if (eleccionJugador1 == 'papel' && eleccionJugador2 == 'piedra') {
    resultado = 1;
  } else if (eleccionJugador1 == 'papel' && eleccionJugador2 == 'papel') {
    resultado = 0;
  } else if (eleccionJugador1 == 'papel' && eleccionJugador2 == 'tijera') {
    resultado = 2;
  } else if (eleccionJugador1 == 'tijera' && eleccionJugador2 == 'piedra') {
    resultado = 2;
  } else if (eleccionJugador1 == 'tijera' && eleccionJugador2 == 'papel') {
    resultado = 1;
  } else if (eleccionJugador1 == 'tijera' && eleccionJugador2 == 'tijera') {
    resultado = 0;
  }

  return resultado;
};

const generarRuta = (nombre) => {
  return './imagenes/' + nombre + '.png';
};
