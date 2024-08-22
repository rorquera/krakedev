const generarAleatorios = () => {
  const aleatorios = [];
  const rango = recuperarInt('txtRango');
  let numeroAleatorio;
  if (validarRango(rango)) {
    for (let i = 0; i < rango; i++) {
      console.log(i);
      numeroAleatorio = generarNumeroAleatorio(1, 100);
      aleatorios.push(numeroAleatorio);
    }
    mostrarResultados(aleatorios);
  }
};

const validarRango = (rango) => {
  let esRangoValido = true;
  if (!(rango >= 5 && rango <= 20)) {
    esRangoValido = false;
  }
  return esRangoValido;
};

const mostrarResultados = (arregloNumeros) => {
  let tabla = '<table><tr><th>NUMEROS ALEATORIOS</th></tr>';
  for (let i = 0; i < arregloNumeros.length; i++) {
    tabla += '<tr><td>' + arregloNumeros[i] + '</td></tr>';
  }
  tabla += '</table>';
  mostrarHtml('tabla', tabla);
};
