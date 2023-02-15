//Array.prototype.mayorQueTres = function() {
//    var arregloModificado = [];

//    for(let i = 0; i < this.length; i++) {
//        if(this[i] > 3) {
//            arregloModificado.push(false);
//        } else {
//            arregloModificado.push(this[i]);
//        }
//    }
//    return arregloModificado;
//};


//var arreglo = [1, 2, 3, 4, 5];
//var nuevoArreglo = arreglo.mayorQueTres();

//console.log(nuevoArreglo);

class LatinoAmerica {
    constructor() {
        this.paises = [];
    }
}

LatinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};

var contiene = new LatinoAmerica();
contiene.agregarPais('Mexico');
console.log(contiene.paises);