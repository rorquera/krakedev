const saludar = () => {
    //Recupera nombre
    let nombre = recuperarTexto('txtNombre');
    //Recupera apellido
    let apellido = recuperarTexto('txtApellido');
    //Recupera edad
    let edad = recuperarInt('txtEdad');
    //Recupera estatura
    let estatura = recuperarFloat('txtEstatura');
    //Mostrar texto
    mostrarTexto('lblResultado', '¡Bienvenido ' + nombre + ' ' + apellido + '!');
    //Mostrar imagen
    mostrarImagen('imgSaludo', '../img/jackSparrow.gif');
    //Mostrar texto en caja
    mostrarTextoEnCaja('txtNombre', '');
  };