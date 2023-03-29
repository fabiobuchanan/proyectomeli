let porcentaje = parseFloat(prompt("Ingrese aquí el porcentaje de descuento que solicita"));
alert("Este es el porcentaje que ingresaste " + porcentaje);
let precio = parseFloat(prompt("Ingrese aquí el precio del producto que desea adquirir"));
let descuento = 0;
let total = precio;

if(porcentaje > 0){
    descuento = precio * (porcentaje / 100)
}

total = precio - descuento;

console.log("El precio final con el porcentaje de descuento es de " + total);
alert("El precio final con el porcentaje de descuento es de " + total);

