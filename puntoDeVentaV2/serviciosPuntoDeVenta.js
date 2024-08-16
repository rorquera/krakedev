const calcularDescuentoPorVolumen = (subtotal, cantidad) => {
  let valorDescuento;
  if (cantidad < 3) {
    valorDescuento = 0;
  } else if (cantidad >= 3 && cantidad <= 5) {
    valorDescuento = subtotal * 0.03;
  } else if (cantidad >= 6 && cantidad <= 11) {
    valorDescuento = subtotal * 0.04;
  } else if (cantidad >= 12) {
    valorDescuento = subtotal * 0.05;
  }
  return valorDescuento;
};
