jugar = function () {
  let numeroDado = lanzarDado();
  cambiarTexto('lblNumero', numeroDado);
  if(numeroDado>3){
    cambiarTexto('lblResultado','GANASTE!!!')
  }else{
    cambiarTexto('lblResultado','PERDISTE...')
  }
};

lanzarDado = function () {
  let aleatorio = Math.random(); //retorna un valor aleatorio entre 0 y 1
  let numeroMultiplicado = aleatorio * 6; //obtiene un valor entre 0 y 5
  let numeroDado = parseInt(numeroMultiplicado + 1); //suma uno al numero entre 0 - 5 y toma su parte entera (numero correspondiente a una cara del dado)
  return numeroDado;
};
