let puntosUsuario = 0;
let puntosComputador = 0;

const jugar = (seleccionado) => {
  let resultado;
  if (puntosComputador < 5 && puntosUsuario < 5) {
    let elemento = generarElemento();
    mostrarImagen('imgJuego', generarRuta(elemento));
    resultado = determinarGanador(seleccionado, elemento);
    if (resultado === 0) {
      mostrarTexto('txtResultado', 'EMPATE');
    } else if (resultado === 1) {
      mostrarTexto('txtResultado', 'GANASTE LA PARTIDA');
      puntosUsuario += 1;
      mostrarTexto('txtPtsUsuario', puntosUsuario);
    } else if (resultado === 2) {
      mostrarTexto('txtResultado', 'PERDISTE LA PARTIDA');
      puntosComputador += 1;
      mostrarTexto('txtPtsCompu', puntosComputador);
    }
    verificarGanador();
  }
};

const verificarGanador = () => {
  if (puntosUsuario == 5) {
    mostrarTexto('txtResultado', 'HAS GANADO EL JUEGO');
  } else if (puntosComputador == 5) {
    mostrarTexto('txtResultado', 'EL COMPUTADOR TE HA VENCIDO');
  }
};

const limpiar = () => {
  puntosUsuario = 0;
  puntosComputador = 0;
  mostrarTexto('txtResultado', '');
  mostrarTexto('txtPtsCompu', '0');
  mostrarTexto('txtPtsUsuario', '0');
  mostrarImagen('imgJuego', '');
};
