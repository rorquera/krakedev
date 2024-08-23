const probarAtributos = () => {
  const persona = {
    nombre: 'Pedro',
    apellido: 'Morales',
    edad: 24,
    estVivo: true,
  };

  console.log(persona.nombre);
  console.log(persona.edad);
  if (persona.estVivo === false) {
    console.log('no esta vivo');
  } else {
    console.log('esta vivo');
  }
};

const crearProducto = () => {
  const producto1 = {
    nombre: 'manzana',
    precio: 2.5,
    stock: 2,
  };

  const producto2 = {
    nombre: 'pera',
    precio: 12.5,
    stock: 7,
  };

  console.log(producto1.nombre);
  console.log(producto2.precio);

  if (producto1.stock == producto2.stock) {
    console.log('Ambos productos tienen el mismo stock');
  } else if (producto1.stock > producto2.stock) {
    console.log('Producto 1 tiene mayor stock');
  } else if (producto1.stock < producto2.stock) {
    console.log('Producto 2 tiene mayor stock');
  }
};

const modificarAtributo = () => {
  const cuenta = {
    numero: '1231564789',
    saldo: 0.0,
  };

  cuenta.saldo = 100;
  cuenta.saldo += 10;

  console.log(cuenta.saldo);
};

const crearCliente = () => {
  const cliente = {
    cedula: '8720238515',
    nombre: 'Juan',
  };

  const cliente1 = {};
  cliente1.nombre = 'Rolando';
  cliente1.apellido = 'Orquera';
  cliente1.edad = 39;

  console.log(cliente1);
};

const probarIncrementoCuenta = () => {
  const prueba = [1, 2];
  const cta = {
    numero: '1354354',
    saldo: 150,
  };
  console.log('antes de: ' + prueba);
  incrementarSaldo(cta, 10, prueba);
  console.log(cta.saldo);
  console.log('despues de: ' + prueba);
};

const probarDeterminarMayor = () => {
  const persona1 = {
    nombre: 'Juan',
    edad: 35,
  };
  const persona2 = {
    nombre: 'Alex',
    edad: 38,
  };

  let mayor = determinarMayor(persona1, persona2);
  if (mayor != null) {
    console.log('La persona mayor es: ' + mayor.nombre);
  }
};

const incrementarSaldo = (cuenta, monto, prueba) => {
  cuenta.saldo += monto;
  prueba.push(5);
  console.log('cambio en la funcion: ' + prueba);
};

const determinarMayor = (persona1, persona2) => {
  if (persona1.edad > persona2.edad) {
    return persona1;
  } else if (persona1.edad < persona2.edad) {
    return persona2;
  } else {
    return null;
  }
};

const declarar = () => {
  let color = 'rojo';
  const numeros = [1, 2];
  const cta = {
    numero: '1354354',
    saldo: 150,
  };

  console.log('color antes de llamar a funcion modificar => ' + color);
  console.log('numeros antes de llamar a funcion modificar => ' + numeros);
  console.log(`cta antes de llamar a funcion modificar => numero:${cta.numero}, saldo:${cta.saldo}`);

  modificar(color, numeros, cta);

  // IMPRESION DE VALORES DESPUES DE MODIFICARLOS
  console.log('color despues de llamar a funcion modificar => ' + color);
  console.log('numeros despues de llamar a funcion modificar => ' + numeros);
  console.log(`cta despues de llamar a funcion modificar => numero:${cta.numero}, saldo:${cta.saldo}`);
};

const modificar = (color, numeros, cuenta) => {
  color = 'rojo';
  numeros.push(5);
  cuenta.saldo += 10;
};
