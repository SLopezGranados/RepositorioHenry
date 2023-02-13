var deportes = {
    conBalon: ['Football', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

console.log(deportes.conBalon);



var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}, deporte: 'Futbol americano'};


persona.nombre = 'Su nomre es Santy';
persona.edad = 'tiene 18 años,';
persona.estudios = 'estudia en Cuam';
persona.deporte = 'y juega futbol americano';

console.log(persona.nombre, persona.edad, persona.estudios, persona.deporte);

var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
//delete autos.marcas;
console.log(autos);

var misFunciones = {
    saludar: function() {
        console.log("Hola");
    },
};

misFunciones.saludar();

var atuendos = { manos : ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
//console.log(atuendos.manos, atuendos.pies);

atuendos ['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotanciones = function (propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales']
    comidas[propDos] = ['Hambuerguesa', 'Papas Fritas'];
};

diferenciaDeNotanciones("saludable", "noSaludable");

console.log(comidas);

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('autor');
//console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

var mundo = {continente: 7, pises: 195, oceanos:5};
for(var prop in mundo){
    console.log('Esta es la propiedad: ' + prop);
    console.log('Esta es el valor: ' + mundo[prop]);
}


var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Aleman',
    amistoso: true,
    dueño: 'Santiago Lopez',
    info: function () {
        console.log('Mi perro es un ' + this.raza);
    },
};

mascota.info();


var crearGato = {
    animal: 'Gato',
    nombre: 'Flor',
    edad: '5 años',
    info: function (Miau) {
        console.log('¡Miau! ');
        console.log('Animal:' + this.animal);
        console.log('Nombre:' + this.nombre);
        console.log('Edad:' + this.edad);
    }
};

crearGato.info();


var nuevoUsuaio = { 
    Nombre:['Santiago Lopez'], 
    Email: ['santylg@hotmail.com'], 
    Contraseña: ['Santiago04'], 
};

console.log(nuevoUsuaio);


function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso){
    if (objetoMisterioso == 17 )
    return ('El numero misterioso es:' + objetoMisterioso * 5);
};

console.log(multiplicarNumeroDesconocidoPorCinco(17));

 

 