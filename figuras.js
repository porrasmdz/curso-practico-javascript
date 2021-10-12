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

//FINAL DE FIGURAS
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    const area = areaCuadrado(lado);
    alert(area);
}


function calcularPerimetroTriangulo()
{
    const inputl1 = document.getElementById("inputTrianguloL1");
    const inputl2 = document.getElementById("inputTrianguloL2");
    const inputB = document.getElementById("inputTrianguloBase");
    
    const lado1 = inputl1.value;
    const lado2 = inputl2.value;
    const base = inputB.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const inputB = document.getElementById("inputTrianguloBase");
    const inputH = document.getElementById("inputTrianguloAltura");
    const base = inputB.value;
    const altura = inputH.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    const perimetro = pCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo()
{
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    const area = aCirculo(radio);
    alert(area);
}

function altura(lado1, lado2, base) {
    if (lado1 == lado2)
    {
        const altura = Math.sqrt(((lado2*lado2) - ((base/2) * (base/2))))
        return altura;
    }
    else {
        alert("Debe dar los datos de un triangulo isoceles");
    }
}
