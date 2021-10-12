const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, desc) {
    const porcentaje = 100 - desc;
    const precioConDescuento = precio * (porcentaje)/100


    return precioConDescuento;
}


function calcularPrecio(){
    
    const precio = document.getElementById("inputPrice").value;
    const descuento = document.getElementById("inputDiscount").value;

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio luego de aplicar el descuento es: $" + 
    calcularPrecioConDescuento(precio, descuento);
}
