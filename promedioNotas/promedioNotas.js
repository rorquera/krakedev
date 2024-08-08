calcularPromedioNotas = function () {
  let nota1 = recuperarFloat('txtNota1');
  let nota2 = recuperarFloat('txtNota2');
  let nota3 = recuperarFloat('txtNota3');
  let promedio;
  promedio = calcularPromedio(nota1, nota2, nota3);
  mostrarTexto('txtPromedio', promedio.toFixed(2));
};
