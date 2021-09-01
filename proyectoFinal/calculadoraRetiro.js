function calcularRetiro(){
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
  const resultadoRetiro = document.getElementById("resultadoRetiro");
  if (edadV && ingresoMensualV && gastoMensualV && ahorroMensualV && edadRetiroV && esperanzaVidaV && rendimientoV){
    resultadoRetiro.innerText = "";
    if (gastoMensualV >= ingresoMensualV) {
      metaAhorro.innerText = ""
      tiempoAhorro.innerText = ""
      interesComp.innerText = ""
      resultadoRetiro.innerText = "Error: tus gastos igualan o superan tus ingresos";
    } else {
      const metaAhorro = document.getElementById("metaAhorro");
      metaAhorro.innerHTML = "Para vivir sin trabajar por " + anosNoProductivos + " años, deberias juntar " + redFinaciera.toLocaleString('en') + " a esto se le llama red financiera"+ 
      " <details><summary>❔</summary><p>" + anosNoProductivos + " (años no productivos) = "+ esperanzaVidaV +" (tu esperanza de vida) - "+edadRetiroV+ " (edad de retiro).</p>"+
      "<p>"+redFinaciera.toLocaleString('en')+" (red financiera) = "+ anosNoProductivos+" (años no productivos) X ["+gastoMensualV+" (gasto mensual) X 12] (gasto anual).</p></details>";
      const tiempoAhorro = document.getElementById("tiempoAhorro");
      tiempoAhorro.innerHTML = "Con tu ahorro actual, podrias llegar a concluir tu red financiera en " + tiempoMetaAhorro + " años "+
      "<details><summary>❔</summary><p>Por logica no te alcanzaria la vida para juntarlo de forma tradicional , te conviene usar el interes compuesto, va al siguiente punto 👇.</p></details>";
      const interesComp = document.getElementById("interesComp");
      interesComp.innerHTML = "Mas sin embargo usando el interes compuesto que elegiste (" + rendimiento.value + "%), en "+ anosProductivos +" años laborables, juntaras " + parseInt(calcularInteres ()).toLocaleString('en') + 
      " <details><summary>❔</summary><p> "+ anosProductivos+" (años laborables) = "+ edadRetiroV+" (edad de retiro) - "+ edadV +" (edad actual) </p>"+
      "<p>"+ parseInt(calcularInteres ()).toLocaleString('en')+" = reinvertir el ahorro anual mas intereses por "+ anosProductivos +" años. </p></details>";
    }
  } else {
    metaAhorro.innerText = ""
    tiempoAhorro.innerText = ""
    interesComp.innerText = ""
    resultadoRetiro.innerText = "Error: Llena todos los datos";
  }
}

