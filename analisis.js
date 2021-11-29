const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort((salA, salB) => salA-salB);

function calcularMediaAritmetica(lista) {

    let sumaLista1 = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );    
    

    let promedio = sumaLista1 / (lista.length);
    return promedio;
}
//Calculo de mediana general
function calcularMediana(lista1){
    let mitadLista1 = parseInt(lista1.length/2)
    let mediana = 0
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


    if (esPar(lista1.length)){

        mediana = calcularMediaAritmetica([lista1[mitadLista1], lista1[mitadLista1 - 1]]);
        
    }
    else{
        mediana = lista1[mitadLista1];
    }

    return mediana;
}

const spliceStart = parseInt(salariosColSorted.length * 0.9);
const deltaSplice = salariosColSorted.length - spliceStart;
//Calculo del top 10 %
const salariosColTop10 = salariosColSorted.splice(spliceStart, deltaSplice);

const medianaGeneral = calcularMediana(salariosColSorted);
const medianaTop10 = calcularMediana(salariosColTop10);
console.log(medianaGeneral);