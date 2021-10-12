const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaAritmetica(lista) {

    let sumaLista1 = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );    
    

    let promedio = sumaLista1 / (lista.length);
    return promedio;
}