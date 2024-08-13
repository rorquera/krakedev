/**
 *Cálculo de la tasa de interés otorgada por el banco
 * @param {float} ingresoAnual ingreso anual de la empresa
 * @returns {float} tasa de interes
 */
const calcularTasaInteres = (ingresoAnual) => {
  let tasa;
  if (ingresoAnual < 300000) {
    tasa = 0.16;
  } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
    tasa = 0.15;
  } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
    tasa = 0.14;
  } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
    tasa = 0.13;
  } else if (ingresoAnual >= 2000000) {
    tasa = 0.12;
  }
  return tasa;
};
/**
 * Cálculo de la cuota mensual que puede pagar un cliente cuando se le asigna un préstamo
 * @param {int} edad
 * @param {float} ingresos
 * @param {float} egresos
 * @returns {float} cuota mensual
 */
const calcularCapacidadPago = (edad, ingresos, egresos) => {
  let cuota;
  if (edad > 50) {
    cuota = (egresos - ingresos) * 0.3;
  } else if (edad <= 50) {
    cuota = (egresos - ingresos) * 0.4;
  }
  return cuota;
};
/**
 * Cálculo del descuento por la compra de un producto
 * @param {float} precio
 * @param {int} cantidad
 * @returns {float} precio con descuento
 */
const calcularDescuento = (precio, cantidad) => {
  let pagoDescuento;
  if (cantidad < 3) {
    pagoDescuento = precio;
  } else if (cantidad >= 3 && cantidad <= 5) {
    pagoDescuento = precio - precio * 0.02;
  } else if (cantidad >= 6 && cantidad <= 11) {
    pagoDescuento = precio - precio * 0.03;
  } else if (cantidad >= 12) {
    pagoDescuento = precio - precio * 0.04;
  }
  return pagoDescuento;
};
/**
 * Determina la categoría del colesterol LDL
 * @param {float} nivelColesterol
 * @returns {string} categoría colesterol LDL (Óptimo, Casi óptimo, Límite superior del rango normal, Alto, Muy alto)
 */
const determinarColesterolLDL = (nivelColesterol) => {
  let colesterolLDL;
  if (nivelColesterol < 100) {
    colesterolLDL = 'Óptimo';
  } else if (nivelColesterol >= 100 && nivelColesterol < 130) {
    colesterolLDL = 'Casi óptimo';
  } else if (nivelColesterol >= 130 && nivelColesterol < 160) {
    colesterolLDL = 'Límite superior del rango normal';
  } else if (nivelColesterol >= 160 && nivelColesterol < 190) {
    colesterolLDL = 'Alto';
  } else if (nivelColesterol >= 190) {
    colesterolLDL = 'Muy alto';
  }
  return colesterolLDL;
};
/**
 * Validación de la clave ingresada por el usuario
 * @param {string} clave 
 * @returns {boolean} clave válida o inválida (true, false)
 */
const validarClave = (clave) => {
  if (clave.length >= 8 && clave.length <= 16) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina si la letra es mayúscula
 * @param {string} caracter 
 * @returns {boolean} verificación de la letra mayúscula (true, false)
 */
const esMayuscula = (caracter) => {
  let codigoCaracter = caracter.charCodeAt(0);
  if (codigoCaracter >= 65 && codigoCaracter <= 90) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina si la letra es minúscula
 * @param {string} caracter 
 * @returns {boolean} verificación de la letra minúscula (true, false)
 */
const esMinuscula = (caracter) => {
  let codigoCaracter = caracter.charCodeAt(0);
  if (
    (codigoCaracter >= 97 && codigoCaracter <= 122) ||
    (codigoCaracter >= 160 && codigoCaracter <= 163) ||
    codigoCaracter === 130
  ) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina si la letra corresponde a un dígito
 * @param {string} caracter 
 * @returns {boolean} verificación del dígito (true, false)
 */
const esDigito = (caracter) => {
  let codigoCaracter = caracter.charCodeAt(0);
  if (codigoCaracter >= 48 && codigoCaracter <= 57) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina permiso de salida de hijo 
 *  * Si notaMatematica mas de 90
 *  * ó notaFisica mas de 90 
 *  * ó notaGeometria mas de 90
 * @param {float} notaMatematica 
 * @param {float} notaFisica 
 * @param {float} notaGeometria 
 * @returns {boolean} verificación del permiso (true, false)
 */
const darPermiso = (notaMatematica, notaFisica, notaGeometria) => {
  if (notaFisica > 90 || notaGeometria > 90 || notaMatematica > 90) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina permiso de salida de hijo 
 *  * Si notaMatematica ó notaFisica mas de 90
 *  * y notaGeometria mas de 80
 * @param {float} notaMatematica 
 * @param {float} notaFisica 
 * @param {float} notaGeometria 
 * @returns {boolean} verificación del permiso (true, false)
 */
const otorgarPermiso = (notaMatematica, notaFisica, notaGeometria) => {
  if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
    return true;
  } else {
    return false;
  }
};
/**
 * Determina permiso de salida de hijo 
 *  * Si notaMatematica ó notaFisica ó notaGeometria mas de 90
 *  * y notaFisica es mayor a notaMatematica
 * @param {float} notaMatematica 
 * @param {float} notaFisica 
 * @param {float} notaGeometria 
 * @returns {boolean} verificación del permiso (true, false)
 */
const dajarSalir = (notaMatematica, notaFisica, notaGeometria) => {
  if (
    (notaMatematica > 90 || (notaFisica > 90 && notaGeometria > 90)) &&
    notaFisica > notaMatematica
  ) {
    return true;
  } else {
    return false;
  }
};
