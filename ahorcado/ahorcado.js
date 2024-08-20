//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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