let notas = [];

const agregarElementos = () => {
  notas.push(5);
  notas.push(10);
  console.log(notas.length);
};

const probarAgregar = () => {
  let nota = recuperarTexto('txtNota');
  agregarNota(nota);
};

const agregarNota = (nota) => {
  notas.push(nota);
};

const recorrerArreglo = () => {
  for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
  }
};

const calcularPromedio = () => {
  let sumaNotas = 0;
  let promedio = 0;
  for (let nota of notas) {
    sumaNotas += parseFloat(nota);
  }
  promedio = sumaNotas / notas.length;
  return promedio;
};

const ejecutarPromedio = () => {
  let promedio = calcularPromedio();
  mostrarTexto('txtPromedio', promedio);
};
