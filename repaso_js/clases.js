/**** Clases ****/

/******* exportar variables, funciones y modulos ****/

// para exportar una variable
export const nameTask = "Walk the dog";

// para exportar una funcion
export const createTask = (task, priority) => {
  return `The task ${taks} it´s ${priority}`;
}

export const completedTask => {
  console.log("task completed");
}

// Si lo exporto por default
// solo se puede exportar uno por default
// si tengo mas de uno deberia exportar un objeto
//  const nameTask = "Walk the dog";
// export default nameTask;

// para exportar una clase
// export default class Task {}

/****** POO  *******/ 

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

// con extends indicamos que extiende/hereda de una clase padre/madre/superclase
// heredan tanto las properties (propiedades/atributos) como los metodos
class PendingBuys extends Task {
  constructor(name, priority, amount) {
    super();
    this.amount = amount;
  } 
  
  // override
  show() {
  // si en la clase padre tenia console.log() en vez de return
  // lo podria reutilizar con super.show()
    return `${ this.name} has a priority of ${this.priority}, and an amount of ${this.amount}`;
  }
}

// crear los objetos
let task1 = new Task("Learn JavaScript", "high");
let task2 = new Task("Learn Java", "medium");
let task3 = new Task("Make coffee", "low");

console.log(task1.show());
console.log(task2.show());
console.log(task3.show());

// instancio objetos de la clase PendingBuys
let compra1 = new PendingBuys("Jabon", "high", 3);
console.log(compra1.show());
