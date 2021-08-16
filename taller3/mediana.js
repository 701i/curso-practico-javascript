const lista1 = [
  4000000,
  100,
  200,
  500,
];


function esPar(numerito){
  if (numerito % 2 === 0) {
    return true;
  }
  else{
    return false;
  }
}

function calcularMediana (lista){
  const mitadLista1 = parseInt(lista.length/2)
  let mediana;

  function comparar ( a, b ){ return a - b; }
  const ordenado = lista.sort( comparar )

  if (esPar(ordenado.length)) {
    mediana= (ordenado[mitadLista1] +ordenado[mitadLista1-1])/2
  } else {
    mediana = ordenado[mitadLista1];
  }
  return mediana
}