function mediaGeometrica(array){
  //se obtienen los denominadores por separado
  var division1 = array.map(
     function (elemento = 0){
      return 1/elemento
    }
    );
    //se suman los denominadores
    var denominador = division1.reduce(
    (valorAcumulado = 0, nuevoElemento) => {
      return valorAcumulado + nuevoElemento;
    }
    );
    //se divide por el total de datos
    return array.length/denominador
}


