/**** Clases ****/
// POO 
class Task {
  // el constructor es lo primero que se ejecuta al crear una instancia de un objeto
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
  
  // metodo de la funcion 
  show() {
    return `${ this.name} has a priority of ${this.priority}`;
  }
}

// crear los objetos
let task1 = new Task("Learn JavaScript", "high");
let task2 = new Task("Learn Java", "medium");
let task3 = new Task("Make coffee", "low");

console.log(task1.show());
console.log(task2.show());
console.log(task3.show());
