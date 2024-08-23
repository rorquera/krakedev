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
    nombre: 'Luisa',
    apellido: 'Gonzalez',
    sueldo: 900.0,
  },
];

const mostrarOpcionEmpleado = () => {
  mostrarComponente('divEmpleado');
  ocultarComponente('divRol');
  ocultarComponente('divResumen');
  mostrarEmpleados();
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
