/**** Funciones en un objeto ****/
// Con ES6+
const person = {
  fullName: "Maria Eugenia Costa",
  work: "Front End Developer",
  age: 38,
  musicPop: true,
  showInfo() {
    console.log(`${this.fullName} is ${this.work} and has ${this.age}`)
  }
}

console.log(showInfo);

// Con ES5
// showInfo: function() {
//  console.log(`${this.fullName} is ${this.work} and has ${this.age}`)
// }
