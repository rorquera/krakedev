const personas = [
  {
    nombre: 'Marcos',
    edad: 18,
  },
  {
    nombre: 'Roberto',
    edad: 15,
  },
  {
    nombre: 'Kate',
    edad: 25,
  },
  {
    nombre: 'Diana',
    edad: 12,
  },
  {
    nombre: 'Benja',
    edad: 5,
  },
];

const agregarPersona = () => {
  const nombre = recuperarTexto('txtNombre');
  const edad = Number(recuperarFloat('txtEdad'));
  let esCorrecto = true;

  if (nombre.length > 3) {
    mostrarTexto('errorNombre', ``);
  } else {
    mostrarTexto(
      'errorNombre',
      `El nombre debe tener
          al menos 3 caracteres.`
    );
    esCorrecto = false;
  }
  if (Number.isInteger(edad) && edad >= 0 && edad <= 100) {
    mostrarTexto('errorEdad', ``);
  } else {
    mostrarTexto(
      'errorEdad',
      `La edad debe ser un entero
        entre 0 y 100.`
    );
    esCorrecto = false;
  }

  if (esCorrecto) {
    nuevaPersona = {};
    nuevaPersona.nombre = nombre;
    nuevaPersona.edad = edad;
    personas.push(nuevaPersona);
    alert('Persona Agregada Correctamente.');
    mostrarTabla();
  }
};

const mostrarTabla = () => {
  let tabla = `<table>
                <tr>
                    <th>EDAD</th>
                    <th>NOMBRE</th>
                </tr>`;
  for (let persona of personas) {
    tabla += `<tr>
                <td>${persona.edad}</td>
                <td>${persona.nombre}</td>
              </tr>`;
  }
  tabla += `</table>`;
  mostrarHtml('tablaPersonas', tabla);
};

const determinarMayor = () => {
  const mayor = encontrarMayor();
  mostrarTexto('lblNombreMayor', mayor.nombre);
  mostrarTexto('lblEdadMayor', mayor.edad);
};

const determinarMenor = () => {
  const menor = encontrarMenor();
  mostrarTexto('lblNombreMenor', menor.nombre);
  mostrarTexto('lblEdadMenor', menor.edad);
};

const encontrarMayor = () => {
  let personaMayor;
  let elementoPersona = {};
  personaMayor = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad > personaMayor.edad) {
      elementoPersona = personas[i];
      console.log(
        `Nombre: ${elementoPersona.nombre} Edad: ${elementoPersona.edad}`
      );
      personaMayor = personas[i];
    }
  }
  return personaMayor;
};

const encontrarMenor = () => {
  let personaMenor;
  let elementoPersona = {};
  personaMenor = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad < personaMenor.edad) {
      elementoPersona = personas[i];
      console.log(
        `Nombre: ${elementoPersona.nombre} Edad: ${elementoPersona.edad}`
      );
      personaMenor = personas[i];
    }
  }
  return personaMenor;
};
