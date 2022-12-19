/*** Modulos en JavaScript ***/
// si este archivo esta cargandose en un HTML, agrego: type="module"
// <script src="modules.js" type="module"></script>

// importo una variable y dos funciones
import { nameTask, createTask, completedTask } from "./clases.js";

// si seria exportado por default
// import nameTask from "./clases.js";

// utilizo la variable que importe
console.log(nameTask);

// utilizo la funcion que importe
const tarea1 = createTask("Eat ice-cream", "low");
console.log(tarea1);
completedTask(); 
