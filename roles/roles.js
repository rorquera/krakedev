let empleados = [
  {
    cedula: '1714616123',
    nombre: 'John',
    apellido: 'Cena',
    sueldo: 500.0,
  },
  {
    cedula: '0914632123',
    nombre: 'Luisa',
    apellido: 'Gonzalez',
    sueldo: 900.0,
  },
  {
    cedula: '1234567890',
    nombre: 'Daniel',
    apellido: 'Pérez',
    sueldo: 900.0,
  },
];

let esNuevo = false;

const mostrarOpcionEmpleado = () => {
  mostrarComponente('divEmpleado');
  ocultarComponente('divRol');
  ocultarComponente('divResumen');
  mostrarEmpleados();
  deshabilitarEmpleado();
};
const deshabilitarEmpleado = () => {
  deshabilitarComponente('txtCedula');
  deshabilitarComponente('txtNombre');
  deshabilitarComponente('txtApellido');
  deshabilitarComponente('txtSueldo');
  deshabilitarComponente('btnGuardar');
};
const mostrarOpcionRol = () => {
  mostrarComponente('divRol');
  ocultarComponente('divEmpleado');
  ocultarComponente('divResumen');
};
const mostrarOpcionResumen = () => {
  mostrarComponente('divResumen');
  ocultarComponente('divRol');
  ocultarComponente('divEmpleado');
};
const mostrarEmpleados = () => {
  let tabla =
    '<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>';
  for (let empleado of empleados) {
    tabla += '<tr>';
    tabla += `<td>${empleado.cedula}</td>`;
    tabla += `<td>${empleado.nombre}</td>`;
    tabla += `<td>${empleado.apellido}</td>`;
    tabla += `<td>${empleado.sueldo}</td>`;
    tabla += '</tr>';
  }
  tabla += '</table>';
  mostrarHtml('tablaEmpleados', tabla);
};
const ejecutarNuevo = () => {
  habilitarComponente('txtCedula');
  habilitarComponente('txtNombre');
  habilitarComponente('txtApellido');
  habilitarComponente('txtSueldo');
  habilitarComponente('btnGuardar');
  esNuevo = true;
};
const buscarEmpleado = (cedula) => {
  let empleadoEncontrado = null;
  for (let empleado of empleados) {
    if (empleado.cedula == cedula) {
      empleadoEncontrado = empleado;
      return empleadoEncontrado;
    }
  }
  return empleadoEncontrado;
};
const agregarEmpleado = (empleado) => {
  let empleadoAgregado = false;
  if (buscarEmpleado(empleado.cedula) == null) {
    empleados.push(empleado);
    empleadoAgregado = true;
  }
  return empleadoAgregado;
};
const guardar = () => {
  if (validarDatosEmpleado()) {
    if (afectarDatos()) {
      limpiar();
    }
  }
};
const validarDatosEmpleado = () => {
  const empleado = recuperarDatosEmpleado();
  if (esEmpleadoValido(empleado)) {
    return true;
  } else {
    return false;
  }
};
const afectarDatos = () => {
  if (esNuevo == true) {
    return guardarEmpleado();
  } else {
    return modificarEmpleado();
  }
};
const guardarEmpleado = () => {
  let empleadoAgregado = false;
  const empleado = recuperarDatosEmpleado();
  empleadoAgregado = agregarEmpleado(empleado);
  if (empleadoAgregado) {
    alert('EMPLEADO GUARDADO CORRECTAMENTE.');
    mostrarEmpleados();
    return true;
  } else {
    alert(`YA EXISTE UN EMPLEADO CON LA CÉDULA ${empleado.cedula}.`);
    return false;
  }
};
const modificarEmpleado = () => {
  const empleadoModificado = recuperarDatosEmpleado();
  const empleadoBDD = buscarEmpleado(empleadoModificado.cedula);
  let copiaEmpleadoBDD = JSON.parse(JSON.stringify(empleadoBDD));
  empleadoBDD.nombre = empleadoModificado.nombre;
  empleadoBDD.apellido = empleadoModificado.apellido;
  empleadoBDD.sueldo = empleadoModificado.sueldo;
  if (JSON.stringify(empleadoBDD) !== JSON.stringify(copiaEmpleadoBDD)) {
    alert('EMPLEADO MODIFICADO EXITOSAMENTE.');
    mostrarEmpleados();
    return true;
  } else {
    alert('NO SE PUDO MODIFICAR EL EMPLEADO.');
    return false;
  }
};
const recuperarDatosEmpleado = () => {
  const empleado = {};
  empleado.cedula = recuperarTexto('txtCedula');
  empleado.nombre = recuperarTexto('txtNombre');
  empleado.apellido = recuperarTexto('txtApellido');
  empleado.sueldo = recuperarTexto('txtSueldo');
  return empleado;
};
const validarNumero = (numero) => {
  for (let i = 0; i < numero.length; i++) {
    if (!esDigito(numero.charAt(i))) {
      return false;
    }
  }
  return true;
};
const esCedulaValida = (cedula) => {
  if (cedula.length == 10 && validarNumero(cedula)) {
    return true;
  } else {
    return false;
  }
};
const esNombreApellidoMayuscula = (nombreApellido) => {
  for (let i = 0; i < nombreApellido.length; i++) {
    if (!esMayuscula(nombreApellido.charAt(i))) {
      return false;
    }
  }
  return true;
};
const esNombreApellidoValido = (nombreApellido) => {
  if (nombreApellido.length >= 3 && esNombreApellidoMayuscula(nombreApellido)) {
    return true;
  } else {
    return false;
  }
};
const esSueldoValido = (sueldo) => {
  if (tienePuntoFlotante(sueldo)) {
    const sueldoFlotante = parseFloat(sueldo);
    if (
      !isNaN(sueldoFlotante) &&
      sueldoFlotante >= 400 &&
      sueldoFlotante <= 5000
    ) {
      return true;
    } else {
      return false;
    }
  }
};
const tienePuntoFlotante = (sueldo) => {
  for (let i = 0; i < sueldo.length; i++) {
    if (esPunto(sueldo.charAt(i))) {
      return true;
    }
  }
  return false;
};
const esEmpleadoValido = (empleado) => {
  let esValido = true;
  if (!esCedulaValida(empleado.cedula)) {
    esValido = false;
    mostrarTexto(
      'lblErrorCedula',
      'La cédula debe ser un dígito de 10 carcteres.'
    );
  } else {
    mostrarTexto('lblErrorCedula', '');
  }
  if (!esNombreApellidoValido(empleado.nombre)) {
    esValido = false;
    mostrarTexto(
      'lblErrorNombre',
      'El nombre debe tener al menos 3 letras y todas deben ser mayúsculas.'
    );
  } else {
    mostrarTexto('lblErrorNombre', '');
  }
  if (!esNombreApellidoValido(empleado.apellido)) {
    esValido = false;
    mostrarTexto(
      'lblErrorApellido',
      'El apellido debe tener al menos 3 letras y todas deben ser mayúsculas.'
    );
  } else {
    mostrarTexto('lblErrorApellido', '');
  }
  if (!esSueldoValido(empleado.sueldo)) {
    esValido = false;
    mostrarTexto(
      'lblErrorSueldo',
      'El sueldo debe ser un número flotante (ej:400.00) entre 400 y 5000.'
    );
  } else {
    mostrarTexto('lblErrorSueldo', '');
  }
  return esValido;
};
const ejecutarBusqueda = () => {
  let empleado = buscarEmpleado(recuperarTexto('txtBusquedaCedula'));
  if (empleado == null) {
    alert('EMPLEADO NO EXISTE');
    esNuevo = false;
  } else {
    mostrarDatosEmpleado(empleado);
    habilitarEmpleadoModificar();
  }
};
const mostrarDatosEmpleado = (empleado) => {
  mostrarTextoEnCaja('txtCedula', empleado.cedula);
  mostrarTextoEnCaja('txtNombre', empleado.nombre);
  mostrarTextoEnCaja('txtApellido', empleado.apellido);
  mostrarTextoEnCaja('txtSueldo', empleado.sueldo);
};
const habilitarEmpleadoModificar = () => {
  deshabilitarComponente('txtCedula');
  habilitarComponente('txtNombre');
  habilitarComponente('txtApellido');
  habilitarComponente('txtSueldo');
  habilitarComponente('btnGuardar');
};
const limpiar = () => {
  mostrarTextoEnCaja('txtCedula', '');
  mostrarTextoEnCaja('txtNombre', '');
  mostrarTextoEnCaja('txtApellido', '');
  mostrarTextoEnCaja('txtSueldo', '');
  esNuevo = false;
  deshabilitarEmpleado();
};
