const lista1 = [
    1,
    300,
    500,
    10,
    1,
    100000,
    80
];

const lista1count = {};

lista1.map(
    function (elemento) {
        if(lista1count[elemento]){
            lista1count[elemento] += 1;
        }
        else {
            lista1count[elemento] = 1;
        }

    }
);

const lista1Array = Object.entries(lista1count);
lista1Array.sort((arrA, arrB) => arrA[1]-arrB[1]);
let moda = lista1Array[lista1Array.length - 1][0];