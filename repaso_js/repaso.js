/****** Repaso de JavaScript desde ES6+ *****/

/**** variables ****/
// inicialmente se utilizaba var, pero por hoisting es mejor usar let o const
let nombre = "Eugenia"; // declaro y asigno el valor 
let apellido; // declaro la variable
apellido = "Costa"; // le asigno el valor
console.log(`Hola ${nombre} ${apellido}`); // la muestro por consola
let saludos ="hola";
saludoss="Chau"; // podemos reasignarle valor

/**** tipo de valores ****/
let boleana = true; // boolean: true | false
let numero = 3; // number, poede ser entero a decimal
let cadena = "Hola, cómo estas?"; // Los string van siempre entre comillas (simples o dobles)

/**** constantes ****/
const ID = "app"; // se debe declarar y asignarle le valor

/**** Scoope ****/
// scoope : en que parte del codigo una variable esta disponible o no
// scoope con var

var musica = "Rock";
if(musica) {
  var musica = "Grunge";
  console.log("Dentro del if: ", musica);
}
console.log("Fuera del if: ", musica);

// Dentro del if: Grunge
// Fuera del if: Grunge
// se reescribe la variable, NO es recomendable, sino reescribimos variables de librerias de terceros que utilicemos

// si en cambio en vez de usar let utilizamos let solucionamos el error
// con let solo existe dentro de donde fue declarada, entre las {}
// Dentro del if: Grunge
// Fuera del if: Rock

/*** Template String ****/
// Me permite poder concatenar string y variables de forma más simple
// Sin tener que utilizar los +
const firstName= "Maria Eugenia";
const lastName= "Costa";
// concatenando con +
conosle.log("Nombre: " + firstName + ", apellido: " + lastName):
// con template string
console.log(`Nombre: ${firstName}, apellido ${lastName}`);

