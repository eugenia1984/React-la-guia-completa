/**** Objects ****/

// function mostrarInformacionTarea(tarea, prioridad) {
//   return `La tarea ${tarea}, tiene una priridad de: ${prioridad}`;
// }

// Object Literal
// Se declara entre {}, tiene key:value
const persona = {
  nombre: "Juan",
  profesion: "Desarrollador web",
  edad: 40,
  isWorking: true
}

// muestro todo el objeto
console.log(persona);

// accedo a un valor con dot notation
console.log(persona.nombre); // Juan

// accedo a un valor con los []
console.log(persona["edad"]); // 40

// Object Constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}
// agregar un prototype a tareas
Tarea.prototype.mostrarInformacionTarea = function() {
  return `La tarea ${this.nombre}, tiene una priridad de: ${this.urgencia}`;
}

// como ahora JavaScript tiene clases, no se utiliza tanto pero en proyectos viejos estan 
// permite crear multiples tareas
const tarea1 = new Tarea("Aprender JavaScrip y React", "Urgente");
const tarea2 = new Tares("Pasear al perro", "Urgente");

console.log(tarea1); // Tarea{nombre: "Aprender JavaScrip y React", urgenica:  "Urgente"}

// const mostrarInfo =  mostrarInformacionTarea(tarea2.nombre, tarea2.urgencia);
// console.log(mostrarInfo); 
// La tarea Pasear al perro, tiene una prioridad de: Urgente

console.log(tarea2.mostrarInformacionTarea())
// La tarea Pasear al perro, tiene una prioridad de: Urgente

