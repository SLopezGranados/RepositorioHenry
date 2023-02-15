//function Auto(puertas, color, marca, año, ruedas) {
//    this.puertas = puertas;
//    this.color = color;
//    this.marca = marca;
//    this.año = año;
//    this.ruedas = ruedas;

//const { now } = require("lodash");

//    this.informacion = function () {
//        console.log('Este es un ' + this.marca + ' de color ' + this.color);
//    };
//}

//var miPrimerAuto = new Auto(2, 'rojo', 'Ferrari', 2018, 4);

//miPrimerAuto.informacion();

//console.log(miPrimerAuto);
//console.log(miPrimerAuto.marca);

//class Auto{
//    constructor(puertas, color, marca, año, ruedas) {
//        this.puertas = puertas;
//        this.color = color;
//        this.marca = marca;
//        this.año = año;
//        this.ruedas = ruedas;
//    }
//    information() {
//        console.log('Este es un ' + this.marca + ' de color ' + this.color);
//    }
//}

//var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);

//miSegundoAuto.information();

//console.log(miSegundoAuto);
//console.log(miSegundoAuto.marca);




class Football {
    constructor(jugador) {
        this.jugador = jugador;
    }

    obtenerNombre() {
        console.log(this.jugador);
    }
}

var argentina = new Football('Messi');
var brasil = new Football('Pele');

//argentina.obtenerNombre();
brasil.obtenerNombre();


