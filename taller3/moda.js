const lista1 = [
  1,2,3,1,2,3,4,2,2,2,1
]

function calcularModa (array){
  const lista1Count = {};

  array.map(
   function (elemento){
    if (lista1Count[elemento]){
      lista1Count[elemento] += 1;
    } else{
    lista1Count[elemento] = 1;
   }
  }
  );

  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA,elementoB){
      return elementoB[1] - elementoA[1]
    }
  );
  
  return lista1Array[0]
}