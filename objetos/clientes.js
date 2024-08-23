let clientes = [
  {
    cedula: '1111',
    nombre: 'Juan',
    edad: 21,
  },
  {
    cedula: '2222',
    nombre: 'Ana',
    edad: 18,
  },
  {
    cedula: '3333',
    nombre: 'Pepe',
    edad: 40,
  },
];

const agregar = () => {
  const cliente = generarCliente();
  if (Object.keys(generarBusqueda(cliente.cedula)).length === 0) {
    clientes.push(cliente);
    alert(`El cliente fue agregado exitosamente.`);
    mostrar();
  } else {
    alert(`El cliente con cédula: ${cliente.cedula} ya esta agregado.`);
  }
};

const mostrar = () => {
  let tablaCliente =
    '<table class="tabla-azul"><tr><th>Cedula</th><th>Nombre</th><th>Edad</th></tr>';
  for (let i = 0; i < clientes.length; i++) {
    tablaCliente += `<tr>`;
    tablaCliente += `<td>${clientes[i].cedula}</td>`;
    tablaCliente += `<td>${clientes[i].nombre}</td>`;
    tablaCliente += `<td>${clientes[i].edad}</td>`;
    tablaCliente += `</tr>`;
  }
  tablaCliente += `</table>`;
  mostrarHtml('tabla', tablaCliente);
};

const guardar = () => {
  const clienteRecuperado = recuperarInformacion();
  if (Object.keys(generarBusqueda(clienteRecuperado.cedula)).length === 0) {
    alert(`El cliente con cédula ${clienteRecuperado.cedula} no esta agregado`);
  } else {
    for (let cliente of clientes) {
      if (cliente.cedula == clienteRecuperado.cedula) {
        cliente.nombre = clienteRecuperado.nombre;
        cliente.edad = clienteRecuperado.edad;
        break;
      }
    }
    alert(`El cliente fue guardado exitosamente.`);
    mostrar();
  }
};

const buscar = () => {
  const clienteRecuperado = recuperarInformacion();
  const cliente = generarBusqueda(clienteRecuperado.buscaCedula);
  if (Object.keys(cliente).length === 0) {
    alert(`No existe el cliente con cédula: ${clienteRecuperado.buscaCedula}`);
  } else {
    mostrarTextoEnCaja('cedula', cliente.cedula);
    mostrarTextoEnCaja('nombre', cliente.nombre);
    mostrarTextoEnCaja('edad', cliente.edad);
  }
};

const generarBusqueda = (cedula) => {
  const clienteEncontrado = {};
  for (let cliente of clientes) {
    if (cliente.cedula == cedula) {
      clienteEncontrado.cedula = cliente.cedula;
      clienteEncontrado.nombre = cliente.nombre;
      clienteEncontrado.edad = cliente.edad;
      break;
    }
  }
  return clienteEncontrado;
};

const generarCliente = () => {
  const cliente = {};
  const clienteRecuperado = recuperarInformacion();
  cliente.cedula = clienteRecuperado.cedula;
  cliente.nombre = clienteRecuperado.nombre;
  cliente.edad = clienteRecuperado.edad;
  return cliente;
};

const recuperarInformacion = () => {
  const cliente = {};
  cliente.cedula = recuperarTexto('cedula');
  cliente.nombre = recuperarTexto('nombre');
  cliente.edad = recuperarTexto('edad');
  cliente.buscaCedula = recuperarTexto('buscaCedula');
  return cliente;
};
