

function calcularPrecioConDescuento(precio, desc) {
    const porcentaje = 100 - desc;
    const precioConDescuento = precio * (porcentaje)/100


    return precioConDescuento;
}


function calcularPrecio(){
    const cupones = ["10", "15", "25"]
    const precio = document.getElementById("inputPrice").value;
    const cupon = document.getElementById("inputDiscount").value;

    let descuento;
    if (!cupones.includes(cupon)) {
        alert("El cupon " + cupon + " elegido no es valido");
    } 
    else if(cupon == "10")
    {
        descuento = 10;
    }
    else if(cupon == "15")
    {
        descuento = 15;
    }
    else if(cupon == "25")
    {
        descuento = 25;
    }
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio luego de aplicar el descuento es: $" + 
    calcularPrecioConDescuento(precio, descuento);
}
