/**** Destrunturing ****/
/**** Desestructuración de Objetos ****/
const aprendiendoJS = {
  version: {
    nueva: "ES6",
    anterior: "ES5"
  },
  frameworks = ["VUEjs", "Angular"]
}

// version anterior
// let version = aprendeindoJS.version.nueva
// console.log(version)

// Extraigo los valores con destructuring
let { version, framework } = aprendiendoJS;
let { anterior } aprendiendoJS.version;
conosle.log(version)
console.log(anterior); //ES5
