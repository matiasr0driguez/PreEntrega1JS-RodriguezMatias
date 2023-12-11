//quiero hacer una pagina de cine como proyecto final//

//me costo muchisimo, no se si estara bien, pero me comprometo a mejorarlo//



function total(cantidad) {
    precioTotal = (cantidad * 100)
    alert("El precio es de: "+ precioTotal + "$")
}

alert("Bienvenido a Classic Cinema")

do {
    nombre = prompt("Ingrese nombre de usuario:  (matias)  ");
} while (nombre != "matias");

do {
    contraseña = prompt("Ingrese la contraseña:   (tomba)");
} while (contraseña != "tomba");

do{
    pelicula = prompt("Ingrese la pelicula que desee ver (batman, rapido y furioso, ted)");
} while (pelicula != "batman" && pelicula != "rapido y furioso" && pelicula != "ted");

switch (pelicula) {
    case "batman":
        let c = parseFloat(prompt("Ingrese cantidad de entradas para Batman"));

        if (c > 0 && c <= 10) {
            total(c);
        } else {
            alert("No es valido");
    }
        break;
    case "rapido y furioso":
        let x = parseFloat(prompt("Ingrese cantidad de entradas para Rapido y Furioso"));

        if (x > 0 && x <= 10) {
            total(x);
        } else {
            alert("No es valido");
    }
        break;
    case "ted":
        let z = parseFloat(prompt("Ingrese cantidad de entradas para Ted"));

        if (z > 0 && z <= 10) {
            total(z);
        } else {
            alert("No es valido");
    }
        break;
}
alert("Gracias por su compra")

/*
let c = parseFloat(prompt("Ingrese cantidad de entradas"));

if (c > 0 && c <= 10) {
    total(c);
} else {
    alert("No es valido")
}


*/

