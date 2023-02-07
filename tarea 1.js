function obtenerMayor(num){
    // "1" e "150" son numeros enteros.
    // retornar el numero mas grande.
    //si son iguales, retornar cualquiera de los dos.
    //tu codigo:
 }

 function obtenerMayor (num, num2) {
    if (num >= num2) {
        return num;
    } else {
        return num2;
    }
}

console.log(obtenerMayor(13,18));
console.log(obtenerMayor(27,70));
console.log(obtenerMayor(1690,30));


function MayoriaDeEdad (edad){
    if (edad >= 18){
        return true 
    } else{return false}
}

console.log(MayoriaDeEdad(19));
console.log(MayoriaDeEdad(17));

function conection (status){
    if (status == 1){
        return "Online";
    }
    if (status == 2){
        return "Offline";
    }
    
}

console.log("Estado De La Conexion:" + conection(1) );

function saludo (idioma){
    if (idioma == "Aleman"){
        return "Guten Tag!";
    }
    if (idioma == "Mandarin"){
        return "Ni Hao!";
    }
    if (idioma == "Ingles"){
        return "Hello!";
    }
    else {return "Hola!"}
}

console.log(saludo("Aleman"));
console.log(saludo("Mandarin"));
console.log(saludo("Ingles")); 
console.log(saludo("Español"));

function colors (color){
    if (color == "Blue"){
        return "--> This is blue";
    }
    if (color == "Red"){
        return "--> This is red";
    }
    if (color == "Green"){
        return "--> This is green";
    }
    if (color == "Orange"){
        return "--> This is orange";
    }
    else {return "--> Color not found"}
}
console.log(colors("Blue"));
console.log(colors("Morado"));
console.log(colors("Red"));

function esDiezOCinco (num){
    if (num == 10){
        return (true);
    }
    if (num == 5){
        return (true);
    }
    else {return (false)}
}
console.log(esDiezOCinco(10));
console.log(esDiezOCinco(5));
console.log(esDiezOCinco(7));


function estaEnRango(num , menor){
    if (menor = 50){
        return (true);
    }
    if (num >= 20){
        return (true);
    }
    else {return (false)}
}

console.log(estaEnRango(35));

function operadoresLogicos(num, num1, num2){
    if (num >= num1, num2){
        return (num + " Numero 1 es mayor y positivo");
    } else {
        return ("Error"); 
    }
}

console.log(operadoresLogicos(243,10,9));
console.log(operadoresLogicos(1200,389,6));



function esPrimo(num){
    for(let i = 2,raiz=Math.sqrt(num); i <= raiz; i++)
    if(num % i === 0) return false;
    return num > 1;
}

console.log(esPrimo(5));

function esVerdadero(valor){
    if (valor == "Verdadero"){
        return "Soy verdadero";
    }else {return "Soy Falso"}
}

console.log(esVerdadero("Verdadero"));
console.log(esVerdadero("f"));

function tieneTresDigitos(num){
    if (typeof num !== "number" || !Number.isInteger(num)) {
        throw TypeError('El argumento «numero» debe ser un numero entero.');
    }
    if (num < 0){
        return null;
    }
    return  [ ... ` ${ numero } ` ] . mapa ( c  =>  parseInt ( c ) ) ;
}

console.log(tieneTresDigitos(13, 45, 55));