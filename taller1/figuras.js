// Código del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");  

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");  
console.groupEnd();

// Código del triangulo
// console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del Triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm, " 
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del Triángulo es de: " + alturaTriangulo + "cm");  

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base ;
}
// console.log("El perímetro del Triángulo mide: " + perimetroTriangulo + "cm");  

function areaTriangulo (altura, base){
    return (altura * base)/2
    console.log("El área del Triángulo mide: " + areaTriangulo + "cm^2");  
    console.groupEnd();
}

function alturaIsoceles (lado1,lado2, base) {
    if (lado1===lado2 && base<lado1) {
        const altura = Math.sqrt((lado1**2)-((base/2)**2));
        console.log(altura)
    }
    else{
        console.log("no es un isoceles")
    }
}
alturaIsoceles(3,3,3)

// Código del círculos
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es; " + radioCirculo + "cm");  
// //Diametro
function diametroCirculo (radio){
    return radio * 2;
}
console.log("El diámetro del circulo es: " + diametroCirculo + "cm");  
//PI
const PI = Math.PI
console.log("PI es: " + PI );  
//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");  
//Area
function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.log("El área del circulo es: " + areaCirculo + "cm^2");  
console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1Triangulo");
    const vlado1 = parseInt(lado1.value);
    const lado2 = document.getElementById("lado2Triangulo");
    const vlado2 = parseInt(lado2.value);
    const base = document.getElementById("baseTriangulo");
    const vbase = parseInt(base.value)  ;

    const perimetro = perimetroTriangulo(vlado1,vlado2,vbase);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("baseTriangulo");
    const valuebase = base.value;
    const altura = document.getElementById("alturaTriangulo");
    const valuealtura = base.value;

    const area = areaTriangulo (valuealtura, valuebase);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
}