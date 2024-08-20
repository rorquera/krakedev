const mostrarNumeros = () => {
  console.log('antes del For');
  for (let i = 0; i < 4; i++) {
    console.log(i);
  }
  console.log('despues del For');
};

const mostrarNumeros2 = () => {
  console.log('antes del for');
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log('despues del for');
};

const mostrarPares = () => {
  console.log('antes del for');
  for (let i = 1; i <= 5; i++) {
    console.log(i * 2);
  }
  console.log('despues del for');
};

const mostrarInverso = () => {
  console.log('antes del for');
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
  console.log('despues del for');
};

const hackearNasa = () => {
  for (let porcentaje = 0; porcentaje <= 100; porcentaje += 10) {
    console.log('Hackeando NASA ' + porcentaje + '%');
  }
  console.log('Nasa hackeada...');
};

const mostrarImpares = () => {
  console.log('antes del for');
  for (let i = 1; i * 2 - 1 <= 21; i++) {
    console.log(i * 2 - 1);
  }
  console.log('despues del for');
};
