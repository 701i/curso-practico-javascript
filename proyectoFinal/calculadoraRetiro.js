//inputs
const edad = document.getElementById("edad");
const edadV = edad.value;
const ingresoMensual = document.getElementById("ingresoMensual");
const ingresoMensualV = parseInt(ingresoMensual.value);
const gastoMensual = document.getElementById("gastoMensual");
const gastoMensualV = parseInt(gastoMensual.value);
const ahorroMensual = document.getElementById("ahorroMensual");
const ahorroMensualV = parseInt(ahorroMensual.value);
const edadRetiro = document.getElementById("edadRetiro");
const edadRetiroV = parseInt(edadRetiro.value);
const esperanzaVida = document.getElementById("esperanzaVida");
const esperanzaVidaV = parseInt(esperanzaVida.value);
const rendimiento = document.getElementById("rendimiento");
const rendimientoV = (parseInt(rendimiento.value)/100);
//outputs
const anosProductivos = edadRetiroV-edadV;
const anosNoProductivos = esperanzaVidaV-edadRetiroV;
const ahorroAnual = ahorroMensualV*12
const gastoAnual = gastoMensualV*12
const redFinaciera = (gastoAnual)*anosNoProductivos;
const tiempoMetaAhorro = redFinaciera/(ahorroAnual);
//utils
var i ;

function rendimientoAnual (anoAhorro,rendimiento){
  var anoAnterior = (anoAhorro*rendimiento)+anoAhorro
  return anoAnterior
}

function calcularInteres (){
  var anoAnterior = 0
  for (i = 0; i < anosProductivos; i++) {
    console.log("año "+ parseInt(i+1))
    anoAnterior = rendimientoAnual(ahorroAnual + anoAnterior, rendimientoV);
    console.log(anoAnterior)
  }
  return anoAnterior
}

function calcularRetiro(){
  const resultadoRetiro = document.getElementById("resultadoRetiro");
  if (gastoMensualV >= ingresoMensualV) {
    resultadoRetiro.innerText = "Error: tus gastos igualan o superan tus ingresos";
  } else {
    const metaAhorro = document.getElementById("metaAhorro");
    metaAhorro.innerText = "Para vivir sin trabajar por " + anosNoProductivos + " años, deberias juntar " + redFinaciera + " a esto se le llama red financiera";
    const tiempoAhorro = document.getElementById("tiempoAhorro");
    tiempoAhorro.innerText = "Con tu ahorro actual, podrias llegar a concluir tu red financiera en " + tiempoMetaAhorro + " años";
    const interesComp = document.getElementById("interesComp");
    interesComp.innerText = "Mas sin embargo usando el interes compuesto que elegiste (" + rendimiento.value + "%), en "+ anosProductivos +" años laborables, juntaras " + parseInt(calcularInteres ());
  }
}

