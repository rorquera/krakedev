let puntos = 0;
let lanzamientos = 5;

jugar = function () {
  let resultado;
  resultado = lanzarDado();
  console.log(resultado);
  mostrarCaraDado(resultado);
  modificarPuntos(resultado);
};

lanzarDado = function () {
  let aleatorio;
  let aleatorioMultiplicado;
  let aleatorioEntero;
  let valorDado;
  aleatorio = Math.random();
  aleatorioMultiplicado = aleatorio * 6;
  aleatorioEntero = parseInt(aleatorioMultiplicado);
  valorDado = aleatorioEntero + 1;
  return valorDado;
};

/**
 * Muestra la imagen correspondiente al numero que recibe
 * @param {Integer} numero numero correspondiente a la cara del dado
 */
const mostrarCaraDado = (numero) => {
  if (numero === 1) {
    cambiarImagen('imgDado', './dados1.png');
  } else if (numero === 2) {
    cambiarImagen('imgDado', './dados2.png');
  } else if (numero === 3) {
    cambiarImagen('imgDado', './dados3.png');
  } else if (numero === 4) {
    cambiarImagen('imgDado', './dados4.png');
  } else if (numero === 5) {
    cambiarImagen('imgDado', './dados5.png');
  } else if (numero === 6) {
    cambiarImagen('imgDado', './dados6.png');
  }
};

/**
 * Incrementa el número de puntos según el número de la cara del dado obtenido
 * @param {Integer} numero numero correspondiente a la cara del dado
 */
const modificarPuntos = (numero) => {
  puntos += numero;
  cambiarTexto('lblPuntos', puntos);
  if (puntos > 20) {
    cambiarTexto('lblMensaje', 'GANASTE');
    document.getElementById('lblMensaje').className='info mensajeVerde';
    limpiar();
  } else {
    modificarLanzamientos();
  }
};

/**
 * Decrementa el número de lanzamientos por cada inteto realizado
 * @param {}
 */
const modificarLanzamientos = () => {
  lanzamientos -= 1;
  cambiarTexto('lblLanzamientos', lanzamientos);
  if (lanzamientos === 0) {
    cambiarTexto('lblMensaje', 'GAME OVER');
    document.getElementById('lblMensaje').className='info mensajeRojo';
    limpiar();
  }
};

/**
 * Funcion para limpiar el puntaje y el número de lanzamientos
 */
const limpiar = () => {
  cambiarTexto('lblPuntos', '0');
  cambiarTexto('lblLanzamientos', '5');
  puntos = 0;
  lanzamientos = 5;
};
