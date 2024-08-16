calcularValorTotal = function () {
  let nombreProducto;
  let precioProducto;
  let cantidad;
  let valorSubtotal;
  let valorDescuento;
  let valorIVA;
  let valorTotal;
  let isFull = false;
  let isFullCant = false;
  let isFullPrice = false;
  let isCantRange = false;
  let isPriceRange = false;

  nombreProducto = recuperarTexto('txtProducto');
  precioProducto = recuperarFloat('txtPrecio');
  cantidad = recuperarInt('txtCantidad');

  isFullCant = esProductoValido('txtCantidad', 'errTxtCantidad');
  isFullPrice = esProductoValido('txtPrecio', 'errTxtPrecio');
  if (
    esProductoValido('txtProducto', 'errTxtProducto') &
    isFullCant &
    isFullPrice
  ) {
    isFull = true;
  }

  if (isFullCant) {
    isCantRange = esCantidadValido(cantidad);
  }

  if (isFullPrice) {
    isPriceRange = esPrecioValido(precioProducto);
  }

  if (isFull & isCantRange & isPriceRange) {
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto('lblSubtotal', valorSubtotal);
    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto('lblDescuento', valorDescuento.toFixed(2));
    valorIVA = calcularIVA(valorSubtotal - valorDescuento);
    mostrarTexto('lblValorIVA', valorIVA);
    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto('lblTotal', valorTotal);
    mostrarTexto(
      'lblResumen',
      'Valor a pagar por ' + cantidad + ' ' + nombreProducto + ' ' + valorTotal
    );
  }else{
    mostrarTexto('lblSubtotal', '0.0');
    mostrarTexto('lblDescuento', '0.0');
    mostrarTexto('lblValorIVA', '0.0');
    mostrarTexto('lblTotal', '0.0');
    mostrarTexto('lblResumen', '');
  }

};
limpiar = function () {
  mostrarTextoEnCaja('txtProducto', '');
  mostrarTextoEnCaja('txtCantidad', '0.0');
  mostrarTextoEnCaja('txtPrecio', '0.0');
  mostrarTexto('lblSubtotal', '0.0');
  mostrarTexto('lblDescuento', '0.0');
  mostrarTexto('lblValorIVA', '0.0');
  mostrarTexto('lblTotal', '0.0');
  mostrarTexto('lblResumen', '');
};

const calcularIVA = (monto) => {
  return parseFloat((monto * 0.12).toFixed(2));
};

const calcularSubtotal = (precio, cantidad) => {
  return precio * cantidad;
};

const calcularTotal = (subtotal, descuento, iva) => {
  let total = subtotal - descuento + iva;
  return total.toFixed(2);
};
