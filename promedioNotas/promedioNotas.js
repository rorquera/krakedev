calcularPromedioNotas = function () {
  let nota1 = recuperarFloat('txtNota1');
  let nota2 = recuperarFloat('txtNota2');
  let nota3 = recuperarFloat('txtNota3');
  let promedio;
  promedio = calcularPromedio(nota1, nota2, nota3);
  if (promedio > 0 && promedio < 5) {
    mostrarTexto('txtPromedio', 'REPROBADO: ' + promedio.toFixed(2));
    cambiarClaseImagen('imgRespuesta', 'falla-size');
    mostrarImagen('imgRespuesta', './img/falla.gif');
  } else if (promedio >= 5 && promedio <= 8) {
    mostrarTexto('txtPromedio', 'BUEN TRABAJO: ' + promedio.toFixed(2));
    cambiarClaseImagen('imgRespuesta', 'exito-size');
    mostrarImagen('imgRespuesta', './img/exito.gif');
  } else if (promedio > 8 && promedio <= 10) {
    mostrarTexto('txtPromedio', 'EXCELENTE: ' + promedio.toFixed(2));
    cambiarClaseImagen('imgRespuesta', 'excelente-size');
    mostrarImagen('imgRespuesta', './img/excelente.gif');
  } else {
    mostrarTexto('txtPromedio', 'DATOS INCORRECTOS: ' + promedio.toFixed(2));
    cambiarClaseImagen('imgRespuesta', 'incorrecto-size');
    mostrarImagen('imgRespuesta', './img/incorrecto.gif');
  }
};
