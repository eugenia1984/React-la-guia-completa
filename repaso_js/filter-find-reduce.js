/**** Filter ****/
const people = {
  {name: "Juan", age: 23, learning:"JavaScript"},
  {name: "Pablo", age: 30, learning:"Pythont"},
  {name: "Alejandra", age: 25, learning:"JavaScript"},
  {name: "María", age: 42, learning:"Java"}
}

// Si quiero buscar los mayores de 28 años
const olders = people.filter(person => {
  console.log(person)
  return person.age > 28;
})

console.log(olders); 
// [{name: "Pablo", age: 30, learning:"Pythont"}, {name: "María", age: 42, learning:"Java"}]



/**** Find ****/
// Que aprende Alejandra y su edad
const alejandra = people.find(person => {
  return person.name === "Alejandra";
})

console.log(alejandra); // {name: "Alejandra", age: 25, learning:"JavaScript"}
console.log(`Alejandra está aprendiendo: ${alejandra.learning}`)


/**** Reduce ****/
// ayuda a hacer algun calculo
// quiero saber el total de las edades de las personas
let total = people.reduce((totalAge, people) => {
  return totlaAge += people.age;
}, 0)

console.log(total);

// para saber el promedio de edad
console.log(total/person.length);
