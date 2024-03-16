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

/*

const PRODUCTO_UNO = "SUSCRIPCION";
const PRODUCTO_DOS = "CLASE";
let productoClases = "";
let productoSuscripciones = "";
let mensual = 20;
let semestral = 18;
let anual = 16;
let paqueteTres = 10;
let paqueteCinco = 16;
let paqueteSiete = 24;
let paqueteNueve = 30;
let paquetePorUno = 17;
let paquetePorDos = 15;
let paquetePorTres = 20;
let paquetePorCuatro = 18;
let validar;

// DECLARO FUNCIONES

const esValidoProducto = (prod) => {
  let valido = false;
  if (prod === PRODUCTO_UNO || prod === PRODUCTO_DOS) valido = true;
  return valido;
};

const esValidoSuscripcion = (susc) => {
  let valido = false;
  switch (susc) {
    case "MENSUAL":
    case "20":
    case "SEMESTRAL":
    case "18":
    case "ANUAL":
    case "16":
      valido = true;
      break;
  }
  return valido;
};

const esValidoClase = (clase) => {
  let valido = false;
  switch (clase) {
    case 3:
    case 5:
    case 7:
    case 9:
    case paquetePorUno:
    case paquetePorDos:
    case paquetePorTres:
    case paquetePorCuatro:
      valido = true;
      break;
  }
  return valido;
};

// BEGIN

do {
  producto = prompt("¿Qué producto quiere seleccionar: Suscripcion o Clase?");
  producto = producto.toUpperCase();
  //validar = esValido(producto);
} while (!esValidoProducto(producto));

if (producto === PRODUCTO_UNO) {
  do {
    productoSuscripciones = prompt(
      "Elige entre las siguientes opciones: Mensual, Semestral, Anual. O bien el porcentaje deseado para cada suscripción, respectivamente: 20, 18, 16."
    );
    productoSuscripciones = productoSuscripciones.toUpperCase();
  } while (!esValidoSuscripcion(productoSuscripciones));

  console.log(
    "Elige entre las siguientes opciones: Mensual, Semestral, Anual. O bien el porcentaje deseado para cada suscripción, respectivamente: 20, 18, 16."
  );
  switch (productoSuscripciones) {
    case "MENSUAL":
    case "20":
      alert(
        "Has seleccionado la suscripción Mensual. Precio: " +
          mensual +
          " " +
          "dólares." +
          " " +
          "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      console.log(
        "Has seleccionado la suscripción Mensual. Precio: " +
          mensual +
          " " +
          "dólares." +
          " " +
          "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      break;
    case "SEMESTRAL":
    case "18":
      alert(
        "Has seleccionado la suscripción Semestral. Precio: " +
          semestral +
          " " +
          "dólares." +
          " " +
          "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      console.log(
        "Has seleccionado la suscripción Semestral. Precio: " +
          semestral +
          " " +
          "dólares." +
          " " +
          "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      break;
    case "ANUAL":
    case "16":
      alert(
        "Has seleccionado la suscripción Anual. Precio: " +
          anual +
          " " +
          "dólares." +
          " " +
          "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      console.log(
        "Has seleccionado la suscripción Anual. Precio: " +
          anual +
          " " +
          "dólares." +
          " " +
          "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      break;
  }
}

if (producto === PRODUCTO_DOS) {
  do {
    productoClases = Number(
      prompt(
        "Elige entre las siguientes opciones: 3, 5, 7, 9. O bien el porcentaje deseado para cada paquete de clases, respectivamente: 17, 20, 15, 18."
      )
    );
  } while (!esValidoClase(productoClases));

  console.log(
    "Elige entre las siguientes opciones: 3, 5, 7, 9. O bien el porcentaje deseado para cada paquete de clases, respectivamente: 17, 20, 15, 18."
  );
  switch (productoClases) {
    case 3:
      alert(
        "Has seleccionado el paquete de " +
          productoClases +
          " " +
          "clases" +
          " " +
          "por el precio de " +
          paqueteTres +
          " " +
          "dólares." +
          " "
      );
      console.log(
        "Has seleccionado el paquete de " +
          productoClases +
          " " +
          "clases" +
          " " +
          "por el precio de " +
          paqueteTres +
          " " +
          "dólares." +
          " "
      );
      break;
    case paquetePorUno:
      alert(
        "Has seleccionado el paquete de 3 clases con el porcentaje de descuento de " +
          paquetePorUno +
          " " +
          "por ciento."
      );
      console.log(
        "Has seleccionado el paquete de 5 clases con el porcentaje de descuento de " +
          paquetePorUno +
          " " +
          "por ciento."
      );
      break;
    case 5:
      alert(
        "Has seleccionado el paquete de " +
          productoClases +
          " " +
          "clases" +
          " " +
          "por el precio de " +
          paqueteCinco +
          " " +
          "dólares." +
          " "
      );
      console.log(
        "Has seleccionado el paquete de " +
          productoClases +
          " " +
          "clases" +
          " " +
          "por el precio de " +
          paqueteCinco +
          " " +
          "dólares." +
          " "
      );
      break;
    case paquetePorDos:
      alert(
        "Has seleccionado el paquete de 5 clases con el porcentaje de descuento de " +
          paquetePorDos +
          " " +
          "por ciento."
      );
      console.log(
        "Has seleccionado el paquete de 5 clases con el porcentaje de descuento de " +
          paquetePorDos +
          " " +
          "por ciento."
      );
      break;
    case 7:
      alert(
        "Has seleccionado el paquete de " +
          productoClases +
          " " +
          "clases" +
          " " +
          "por el precio de " +
          paqueteSiete +
          " " +
          "dólares." +
          " "
      );
      console.log(
        "Has seleccionado el paquete de " +
          productoClases +
          " " +
          "clases" +
          " " +
          "por el precio de " +
          paqueteSiete +
          " " +
          "dólares." +
          " "
      );
      break;
    case paquetePorTres:
      alert(
        "Has seleccionado el paquete de 7 clases con el porcentaje de descuento de " +
          paquetePorTres +
          " " +
          "por ciento."
      );
      console.log(
        "Has seleccionado el paquete de 7 clases con el porcentaje de descuento de " +
          paquetePorTres +
          " " +
          "por ciento."
      );
      break;
    case 9:
      alert(
        "Has seleccionado el paquete de " +
          productoClases +
          " " +
          "clases" +
          " " +
          "por el precio de " +
          paqueteNueve +
          " " +
          "dólares." +
          " "
      );
      console.log(
        "Has seleccionado el paquete de " +
          productoClases +
          " " +
          "clases" +
          " " +
          "por el precio de " +
          paqueteNueve +
          " " +
          "dólares." +
          " "
      );
      break;
    case paquetePorCuatro:
      Alert(
        "Has seleccionado el paquete de 9 clases con el porcentaje de descuento de " +
          paquetePorCuatro +
          " " +
          "por ciento."
      );
      console.log(
        "Has seleccionado el paquete de 9 clases con el porcentaje de descuento de " +
          paquetePorCuatro +
          " " +
          "por ciento."
      );
      break;
    default:
      productoSuscripciones =
        "Clase ingresada inexistente. Por favor, intente nuevamente.";
  }
}
*/ 
