//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;
const esMayuscula = (caracter) => {
  let caracterMayuscula;
  let codigo = caracter.charCodeAt(0);
  if (codigo >= 65 && codigo <= 90) {
    caracterMayuscula = true;
  } else {
    caracterMayuscula = false;
  }
  return caracterMayuscula;
};

const guardarPalabra = () => {
  let password = recuperarTexto('txtSecreta');
  if (password.length !== 5 || !verificarMayuscula(password)) {
    alert('Debe ingresar una palabra de 5 letras mayúsculas');
  } else {
    palabraSecreta = password;
    console.log(palabraSecreta);
  }
};

const verificarMayuscula = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (!esMayuscula(password.charAt(i))) {
      return false;
    }
  }
  return true;
};

const mostrarLetra = (letra, posicion) => {
  mostrarTexto('div' + posicion, letra);
};

const validar = (letra) => {
  let letrasEncontradas = 0;
  for (i = 0; i < palabraSecreta.length; i++) {
    if (letra === palabraSecreta.charAt(i)) {
      mostrarLetra(letra, i);
      letrasEncontradas += 1;
      coincidencias += 1;
    }
  }
  if (letrasEncontradas == 0) {
    alert('LA LETRA NO ES PARTE DE LA PALABRA');
    errores += 1;
  }
};

const ingresarLetra = () => {
  let letraIngresada = recuperarTexto('txtLetra');
  intentos += 1;
  if (esMayuscula(letraIngresada)) {
    validar(letraIngresada);
  } else {
    alert('SOLO SE ACEPTAN MAYÚSCULAS');
  }
  console.log('coincidencias: ' + coincidencias);
  console.log('errores: ' + errores);
  console.log('intentos: ' + intentos);
  if (coincidencias === 5) {
    alert('HA GANADO');
  }
  if (intentos === 10) {
    alert('HA PERDIDO');
  }
};
