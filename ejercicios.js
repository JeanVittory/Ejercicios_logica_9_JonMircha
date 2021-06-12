//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

let contadorDeCaracteres = (value= "") => {
    (!value) 
        ? console.warn("no ingresaste ningun texto.")
        : console.log(`el texto "${value}" tiene ${value.length} caracteres.`)
    }

contadorDeCaracteres("Hola");



/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) 
devolverá "Hola".*/


const SLICETEXT = (str = "", number= undefined) => {
    (!str)
        ? console.warn("Debes ingresar un texto a recortar.")
        : (number === undefined)
            ? console.warn("no ingresaste el numero de caracteres que desear recortar.")
            : (Math.sign(number) === -1 )
                ? console.warn("no es posible recortar una cantidad de veces negativamente.")
                : console.log(str.slice(0, number))
}

SLICETEXT("hola mundo, intento esforzarme", 15);


/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal']. */

const FIRSTSTRING = (str = "", sign = undefined) => {
    (!str)
        ? console.warn("Por favor ingresa un texto a procesar.")
        : ( sign === undefined)
            ? console.warn("Porfavor ingresa un separador para recibir el array.")
            : console.log(str.split(sign));
}
FIRSTSTRING("Hola Mundo, espero estes bien", " ");
console.clear();





/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const LOOPINGSTRING = function (str = "", number= undefined){
    if (!str) return console.warn("No ingresaste ningún texto a procesar");

    if (number === undefined) return console.warn("Porfavor ingresa la cantidad de veces que deseas repetir el texto");

    if (Math.sign(number)=== -1) return console.error("No es posible repetir cantidades negativas.")

    if (number === 0) return console.warn("Porfavor ingresa un número diferente o mayor a 0.");

    for (let i = 1; i <= number; i++){
        console.log(`${str} repeticion numero ${i}.`)
    }
}

LOOPINGSTRING("hola", 0);
console.clear();

// Esta es una solución diferente sin usar el ciclo for
// let input = function (str, numero){
//     let output = str.repeat(numero);
//     return output;
// }
// console.log(input(`Hola mundo `, 3))









/*---------------------------------------------- EJERCICIOS CLASE 2 ------------------------------------------------------------------- */
/*---------------------------------------------- EJERCICIOS CLASE 2 ------------------------------------------------------------------- */
/*---------------------------------------------- EJERCICIOS CLASE 2 ------------------------------------------------------------------- */







/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const REVERSESTRING = (str = "") => {
    if (!str) return console.log("Debes ingresar una cadena de texto a procesar");

    let textReverse = str.split("").reverse().join("");
    return console.log(textReverse);

/*--------esta seccion deconstruye el código de la linea 76-------------- */

    // let stringSplit = str.split("");
    // let stringReverse = stringSplit.reverse();
    // let stringJoin = stringReverse.join("");
    // return console.log(stringJoin)

/*--------esta seccion deconstruye el código de la linea 76-------------- */
}

REVERSESTRING("Estoy en la casa almorzando y no puedo desayunar akhdlkfhsadkfh");




/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const SEARCHREPEAT = (str = "", word = undefined)=>{

    let normalizeWord = str.replaceAll(/[.,;-?¿!!"']/g, "");
    let strSplitter = normalizeWord.split(" ");

    if (!str) return console.warn("debes ingresar una frase para iniciar el programa.")
    if (strSplitter.length === 1) return console.warn("debes ingresar más de una palabra");
    if (word === undefined) return console.warn("No ingresaste la palabra que deseas revisar si esta repetida o no en la cadena de texto");

    let repeatedWords= [];

    for (let i = 0; i <= strSplitter.length; i++){
        if (strSplitter[i] === word){
            repeatedWords.push(word);
        }
    }

    let sumKeysFromRW = 0;

    for (const keys of repeatedWords.keys()){
        sumKeysFromRW++;
    }

    return console.log(`La palabra ${word} se repite ${sumKeysFromRW} veces.`);
}
SEARCHREPEAT("Mi casa es grande pero la casa de al lado lo es aun más", "casa");






/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual 
en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const VALPALINDROME = (str = "") => {

    if (!str) return console.warn("debes ingresar una palabra para inicializar el programa.");
    if (str.length <= 1) return console.warn("debes ingresar más de una letra.");
    if (str != isNaN) return console.warn("no puedes ingresar números.");

    let normalizedStr = str.toLowerCase(); 
    let procesedStrToCompare = str.toLowerCase().split("").reverse().join("");

    if (normalizedStr === procesedStrToCompare){
        console.log(true);
    }else{
        console.log(false);
    }
       
}

VALPALINDROME("hola");

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

const REMOVERPATTERN = (str = "", pattern = undefined) => {

    if (!str) return console.warn("Debes ingresar un texto para inicializar el programa.");
    if (pattern === undefined) return console.warn("Debes ingresar un patrón a eliminar dentro del texto.");
    
    let newPattern = str.replaceAll(pattern, "");

    return newPattern;
}

console.log(REMOVERPATTERN("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));


/*---------------------------------------------- EJERCICIOS CLASE 3 ------------------------------------------------------------------- */
/*---------------------------------------------- EJERCICIOS CLASE 3 ------------------------------------------------------------------- */
/*---------------------------------------------- EJERCICIOS CLASE 3 ------------------------------------------------------------------- */



/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

const RANDOMIZER = (start= undefined, end = undefined)=>{

    if (isNaN(start) || isNaN(end)) return console.warn("debes ingresar un número.")
    if (!start) return console.warn("Debes ingresar dos números entre los que se obtendra un número aleatorio.");
    if (!end) return console.warn("Debes inresar dos números entre los que se obtendra un número aleatorio.");
    
    let parseStart = parseInt(start);
    let parseEnd = parseInt(end);
    let result = Math.round(Math.random()*(parseEnd - parseStart) + parseStart);

    return console.log(`El numero aleatorio obtenido entre ${start} y ${end} es: ${result}.`);
}

RANDOMIZER(1, 100);

/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true.*/

const CAPICUANUMBER = (num = undefined)=>{

    if (!num) return console.warn("Debes ingresar un número para iniciar el programa.");
    if (isNaN(num)) return console.warn("Solo se permiten valores numericos.");
    
    let parseNum = parseInt(num).toLocaleString()
    
    let comparativeNum = parseNum.split("").reverse().join("");

    (parseNum === comparativeNum)
    ? console.log(`El número ${num} es capicúa :). Así luce al reves: ${comparativeNum}.`)
    : console.warn(`El número ${num} no es capicúa :(. Así luce al reves: ${comparativeNum}.`)
}

CAPICUANUMBER(2002);
console.clear()

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const FACTORIAL = function (number = undefined){

    if (number === undefined) return console.warn("Debes ingresar un número.");
    //if (typeof number !== "number") return console.warn("debes ingresar un dato numerico.") esta validacion cancela cualquier dato no numerico
    if (isNaN(number)) return console.warn("Esta función solo recibe números."); //esta validación permite que el usuario ingrese datos numericos de tipo sring
    if (Math.sign(number) == -1) return console.error("Los factoriales solo reciben números enteros positivos.");
    if (number === 0) return console.warn ("No puedes ingresar el numero 0 como valor a procesar.");
  
    let startValue = number * (number-1);   

    for (let i = number - 2; i >= 1; i--){
        startValue = startValue * i;
    }

    return console.log(`El factorial resultante del número ${number} es igual a: ${startValue}.`);
} 

FACTORIAL(5);
console.clear()


/*---------------------------------------------- EJERCICIOS CLASE 4 ------------------------------------------------------------------- */
/*---------------------------------------------- EJERCICIOS CLASE 4 ------------------------------------------------------------------- */
/*---------------------------------------------- EJERCICIOS CLASE 4 ------------------------------------------------------------------- */


/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true. */

const PRIMENUMBERS = (number = undefined)=>{

    if (number === undefined) return console.warn("Debes ingresar un número.");
    if (typeof number !== "number") return console.warn(`El dato ${number} no es un número.`);
    if (Math.sign(number) === -1) return console.warn("El dato ingresado no puede ser un número negativo.");
    if (Number.isInteger(number) === false) return console.warn("Recuerda que los números primos solo pueden ser enteros.");

    let itSelf = number / number;
    let byOne = number / 1; 
    let revisionIterator = 0;

    if (Number.isInteger(itSelf) === true && Number.isInteger(byOne) === true){
        for ( let i = 1; i <= 1000; i++){
           let division = number / i;
           (Number.isInteger(division) === true)
            ? revisionIterator++
            : revisionIterator = revisionIterator;
        }
    }
    
    (revisionIterator === 2)
    ? console.log(`El ${number} es un número primo.`)
    : console.log(`el ${number} no es un número primo.`)
}

PRIMENUMBERS(202)

const PRIMENUMBERS2 = function(number=undefined){
    if (typeof number !== "number") return console.warn(`El dato ${number} no es un número.`);
    if (number === undefined) return console.warn("Debes ingresar un número.");
    if (number === 1) return console.warn("Debes ingresar un número diferente a 1");
    if (number === 0) return console.warn("Ingresa un número diferente a 0");
    if (Math.sign(number) === -1) return console.warn("El dato ingresado no puede ser un número negativo.");
    if (Number.isInteger(number) === false) return console.warn("Recuerda que los números primos solo pueden ser enteros.");
    
    let divisible = false;

    for (let i = 2; i < number; i++){
        if ((number % i)=== 0){
            divisible = true;
            break;
        }
    }
    return (divisible)
    ? console.log(`El número ${number} no es primo.`)
    : console.log(`El número ${number} es primo.`)
}

// Esta función es más sencilla y fue la respuesta del profesor JonMircha. Implementa el break y permite una iteracion del ciclo for
// mucho más efectiva que la respuesta dada por mi sumado a que permite la busqueda de cualquier número primo buscandolo desde el numero
// dado por el ususario hacia atras (ver linea 299).

PRIMENUMBERS2(202);




/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const PAIRNUMBERS = (number = undefined) => {
    if (number === undefined) return console.warn("Debes ingresar un número a procesar.");
    if (typeof number !== "number") return console.error("Debes ingresar un dato numé rico.");
  
    
    let numberToString= number.toString();
    let lastValueToCompare = numberToString.slice(numberToString.length-1);
    let parseLastValueToCompare = parseInt(lastValueToCompare);
    let pairNumber = [0,2,4,6,8]; 
    let unpairNumber = [1,3,5,7,9];

    for (const element of pairNumber){
        if (parseLastValueToCompare === element) {
            return console.log(`El número ${number} es par`);
        } for (const element of unpairNumber){
            if (parseLastValueToCompare === element)
            return console.log(`El número ${number} es impar`);
        }
    }    
}

PAIRNUMBERS(2022)

console.clear()
/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const TEMPERATURECONVERTER = ( number = undefined, tipo = undefined) => {
    if (typeof number !== "number") return console.error("recuerda que las temperaturas se expresan en números.");
    if (typeof tipo !== "string") return console.error("Recuerda que el tipo de temperatura solo puede ser Celsius o Farenheit.");
    if (number === undefined) return console.warn("Debes ingresar la temperatura a convertir.");
    if (tipo === undefined) return console.warn("Debes especificar si son Celsius o Farenheit.");
    if (tipo === "") return console.warn("No especificaste si tu temperatura esta en Celsius o Farenheit.")

    let celsiusToFarenheit = (number * 1.8) + 32;
    let FarenheitToCelsius = (number - 32) / 1.8; 

    if (tipo === "Celsius" || tipo === "c" || tipo === "C" || tipo === "celsius" || tipo === "°c" || tipo === "°C"){
        return console.log( `${number} grados Celsius equivalen a ${celsiusToFarenheit.toFixed(2)}°F.`)
    }

    if (tipo === "Farenheit" || tipo === "f" || tipo === "F" || tipo === "farenheit" || tipo === "°f" || tipo === "°F"){
        return console.log(`${number} grados Farenheit equivalen a ${FarenheitToCelsius.toFixed(2)}°C.`)
    } 

    if (tipo !== "Celsius" || tipo !== "c" || tipo !== "C" || tipo !== "celsius" || tipo !== "°c" || tipo !== "°C" 
    || tipo !== "Farenheit" || tipo !== "f" || tipo !== "F" || tipo !== "farenheit" || tipo !== "°f" || tipo !== "°F"){
        return console.log(`${tipo} no es un tipo de temperatura valido.`)
    } 

    
}

TEMPERATURECONVERTER(300, "°F");

