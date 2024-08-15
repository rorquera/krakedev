calcularPromedio = function (nota1, nota2, nota3) {
  let promedio;
  promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
};

calcular = function () {
  let nota1 = recuperarFloat('txtNota1');
  let nota2 = recuperarFloat('txtNota2');
  let nota3 = recuperarFloat('txtNota3');
  realizarCalculos(nota1, nota2, nota3);
};

const realizarCalculos = (nota1, nota2, nota3) => {
  let resultado;
  let resultadoFormato;
  if (
    validarNota(nota1, 'lblError1') &
    validarNota(nota2, 'lblError2') &
    validarNota(nota3, 'lblError3')
  ) {
    resultado = calcularPromedio(nota1, nota2, nota3);
    resultadoFormato = resultado.toFixed(2);
    mostrarTexto('lblResultado', resultadoFormato);
  } else {
    mostrarTexto('lblResultado', '0.0');
  }
};

const validarNota = function (nota, idComponente) {
  let esNumero = verificarNumero(nota, idComponente);
  let esRagoValido = esNumero ? verificarRango(nota, idComponente) : false;
  let esNotaValida = esNumero && esRagoValido ? true : false;
  return esNotaValida;
};

const verificarNumero = (nota, idComponente) => {
  let esNumero;
  if (isNaN(nota)) {
    mostrarTexto(idComponente, 'DEBE INGRESAR UN NÚMERO');
    esNumero = false;
  } else {
    mostrarTexto(idComponente, '');
    esNumero = true;
  }
  return esNumero;
};

const verificarRango = (nota, idComponente) => {
  if (nota >= 0 && nota <= 10) {
    return true;
  } else {
    mostrarTexto(idComponente, 'DEBE INGRESAR UN RANGO VALIDO');
    return false;
  }
};
