/**** Funciones ****/
/*** Function Declaration ***/
// Funcion con parametro por default (para no tener undefined)
function saludar( nombre = "Indefinido") {
  console.log("Bienvenido: " + nombre);
}

// Invocacion de la funcion, al ser Function Declaration hay hoisting 
// JS ordena: variables, funciones
// por lo que si la invoco antes de declarar no tengo problema
saludar("Juan"); // Bienvenido: Juan

/*** Function expression ***/
// si la invoco antes de declarar tengo error
const cliente = function(nombreDelCliente = "Indefinido") {
  conosle.log("Buscando datos del cliente..." + nombreDelCLiente);
}

cliente("Ana");

/**** Return ****/
let viajando = function(destino = "Desconocido") {
  return `Viajando a la ciudad de ${destino}`
}

let viaje = viajando("Paris"); 
conosle.log(viaje); // Viajando a la ciudad de Paris
// Reasignando el valor a una variable
viaje = "Barcelona";
console.log(viaje"); // Viajando a la ciudad de Barcelona

/*** Arrow Functions ***/
let viajandoArrowFunction = (destino = "Desconocido") => `Viajando a la ciudad de ${destino}`
// Si tiene un solo argumento, puede ir sin los (); si tiene dos argumentos o más hay que tneer los ()
// Si el cuerpo de la función es de un solo renglon puedo obviar las {} y el return (return implicito)
// si son más de uno debe tener las {}

console.log(viajandoArrowFunction("Buenos Aires"))
            
