/**** Spread Operator ****/

// permite juntar dos o más arrays
let lenguages = ["JavaSCript", "PHP", "Python"];
let frameworks = ["React", "Lavarel", "Django"];

// modo antiguo
// let combination = lenguages.concat(framewroks);

// desde ES6 o mas
// asi se crea un nuevo arreglo
let combination = [...lenguages, ...frameworks];

// para obtener el ultimo item, en el modo antiguo con .reversw() modifico el array original
// let [ lastOne ] = lenguage.reverse();  

// con ES6  o mas
let [lastOne] = [...lenguages].reverse(); 
console.log(lastOne); // Python

function add(num1, num2, num3) {
  retunr num1 + num2 + num3;
}

const numbersArray = [1, 2, 3];
add(...numbersArray); // 6
