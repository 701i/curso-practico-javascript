function precioFinal(precio,descuento){
  porcentagePagar = 100-descuento;
  precioTotal = precio-(precio*(descuento/100));
  return precioTotal;
}

function cupon(){
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputCupon = document.getElementById("inputCupon");
  const valueCupon = inputCupon.value
  var validos = ["hola123","cupon", "hola", "regalo"]

  let discountValue;
  switch (valueCupon){
    case "hola123":
      discountValue = 15;
    break;
    case "cupon":
      discountValue = 20;
    break;
    case "hola":
      discountValue = 10;
    break;
    case "regalo":
      discountValue = 100;
    break;
    default:
      discountValue = 0;
      alert ("El cupón " + valueCupon + " no es válido");
  }
    const total = precioFinal(priceValue, discountValue);
    const resultado = document.getElementById("totalPrice");
    resultado.innerText = "El total a pagar es $ " + total;
  

  const imprimirDescuento = document.getElementById("imprimirDescuento");
  imprimirDescuento.innerText = "Descuento de -"+ discountValue +"%"
}