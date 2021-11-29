const lista1 = [
    1,
    300,
    500,
    10,
    100000,
    80
];

const listalen = lista1.length;
const mitadLista1 = parseInt(listalen/2);
let mediana = 0;

function calcularMediaAritmetica(lista) {

    let sumaLista1 = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );    
    

    let promedio = sumaLista1 / (lista.length);
    return promedio;
}

function esPar(num){
    if (num % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}


if (esPar(listalen)){

    mediana = calcularMediaAritmetica([lista1[mitadLista1], lista1[mitadLista1 - 1]]);
    
}
else{
    mediana = lista1[mitadLista1];
}
