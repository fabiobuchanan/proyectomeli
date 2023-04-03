/*let porcentaje = parseFloat(prompt("Ingrese aquí el porcentaje de descuento que solicita"));
alert("Este es el porcentaje que ingresaste " + porcentaje);
let precio = parseFloat(prompt("Ingrese aquí el precio del producto que desea adquirir"));
let descuento = 0;
let total = precio;

if(porcentaje > 0){
    descuento = precio * (porcentaje / 100)
}

total = precio - descuento;

console.log("El precio final con el porcentaje de descuento es de " + total);
alert("El precio final con el porcentaje de descuento es de " + total);*/



let producto = prompt("¿Qué producto estás buscando: Suscripcion o Clase?");
const PRODUCTO_UNO = "SUSCRIPCION";
const PRODUCTO_DOS = "CLASE";
let productoClases = '';
let productoSuscripciones = '';
let mensual = 20; 
let semestral = 18;
let anual = 16; 
let paqueteTres = 10;
let paqueteCinco = 16;
let paqueteSiete = 24;
let paqueteNueve = 30;

if(producto.toUpperCase() == PRODUCTO_UNO || producto.toLowerCase() == PRODUCTO_UNO){
    productoSuscripciones = prompt("Elige entre las siguientes opciones: Mensual, Semestral, Anual. O bien el porcentaje deseado para cada suscripción, respectivamente: 20, 18, 16.");
    console.log("Elige entre las siguientes opciones: Mensual, Semestral, Anual. O bien el porcentaje deseado para cada suscripción, respectivamente: 20, 18, 16.");
    switch(productoSuscripciones){
        case 1:
        case 20:
            productoSuscripciones = "mensual" || productoSuscripciones == parseFloat(mensual);
            alert("Has seleccionado la suscripción Mensual. Precio: " + mensual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            console.log("Has seleccionado la suscripción Mensual. Precio: " + mensual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            break;
        case 2:
        case 18:
            productoSuscripciones = "semestral" || productoSuscripciones == parseFloat(semestral);
            alert("Has seleccionado la suscripción Semestral. Precio: " + semestral + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            console.log("Has seleccionado la suscripción Semestral. Precio: " + semestral + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            break;
        case 3:
        case 16:
            productoSuscripciones = "anual" || productoSuscripciones == parseFloat(anual);
            alert("Has seleccionado la suscripción Anual. Precio: " + anual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            console.log("Has seleccionado la suscripción Anual. Precio: " + anual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            break;    
        default:
            productoSuscripciones = "Suscripción ingresada inexistente. Por favor, intente nuevamente."
    }
} else if(producto.toUpperCase() == PRODUCTO_DOS || producto.toLowerCase() == PRODUCTO_DOS){
    productoClases = prompt("Elige entre las siguientes opciones: 3, 5, 7, 9. O bien el porcentaje deseado para cada paquete de clases, respectivamente: 17, 20, 15, 17.");
    console.log("Elige entre las siguientes opciones: 3, 5, 7, 9. O bien el porcentaje deseado para cada paquete de clases, respectivamente: 17, 20, 15, 17.");
    switch(productoClases){
        case 1:
            productoClases == parseFloat(productoClases) || productoClases == paqueteTres;
            alert("Has seleccionado el paquete de " + productoClases + "por el precio de " + paqueteTres + " " + "dólares." + " ");
            console.log("Has seleccionado el paquete de " + productoClases+ "por el precio de " + paqueteTres + " " + "dólares." + " ");
            break;
        case 2:
            productoClases == parseFloat(productoClases) || productoClases == paqueteCinco;
            alert("Has seleccionado el paquete de " + productoClases + "por el precio de " + paqueteCinco + " " + "dólares." + " ");
            console.log("Has seleccionado el paquete de " + productoClases+ "por el precio de " + paqueteCinco + " " + "dólares." + " ");
            break;
        case 3:
            productoClases == parseFloat(productoClases) || productoClases == paqueteSiete;
            alert("Has seleccionado el paquete de " + productoClases + "por el precio de " + paqueteSiete + " " + "dólares." + " ");
            console.log("Has seleccionado el paquete de " + productoClases + "por el precio de " + paqueteSiete + " " + "dólares." + " ");
        case 4:
            productoClases == parseFloat(productoClases) || productoClases == paqueteNueve;
            alert("Has seleccionado el paquete de " + productoClases + "por el precio de " + paqueteNueve + " " + "dólares." + " ");
            console.log("Has seleccionado el paquete de " + productoClases + "por el precio de " + paqueteNueve + " " + "dólares." + " ");
            break;    
        default:
            productoSuscripciones = "Clase ingresada inexistente. Por favor, intente nuevamente."
    }
}  else if(producto !== PRODUCTO_UNO && producto !== PRODUCTO_DOS){
    producto = prompt("Ha ingresado información inválida. Por favor intente nuevamente.");
}
   
 
/*
    if(productoSuscripciones == "Mensual"){
        alert("Has seleccionado la suscripción mensual. Precio: " + mensual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
    }*/

