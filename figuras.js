//CODIGO DEL CUADRADO
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

//console.log("El perimetro del cuadrado es: " + perimetro + "cm");

function areaCuadrado(lado) { 
    return lado * lado;
}
//console.log("El area del cuadrado es: " + area + "cm^2");

console.groupEnd();
//CODIGO DEL TRIANGULO

console.group("Triangulo");


function perimetroTriangulo(l1, l2, b) {
    return l1 + l2 + b;
} 
function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();
//CODIGO DEL CIRCULO
console.group("Circulo")

function diametro(radio) {
    return 2 * radio;
}
const pi = Math.PI;

function pCirculo(radio) {
    return diametro(radio) * pi;
} 

function aCirculo(radio) {
    return pi * (radio * radio);
}