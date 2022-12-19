/**** arrays-map-object-key ****/

// Array (arreglo)
// Guarda informacion relacionada
const shoppingCart = ["Product1", "Product2", "Product3"];


const appContenedor = document.querySelector("#App");
// Para agregarlo a un HTML todos juntos
// appContenedor.innerHTML = appContenedor;

let html = "";
// Recorriendo con el forEach
shoppingCart.forEach(producto => {
    htl += `<li>{producto}</li>`
});
appContenedor.innerHTML = html;

// con map()
shoppingCart.map(producto => {
return `El producto es : ${producto}`
});
// se usa mucho en React, porque asi no se sobreescribe el arrray original sino que se trabaja con una copia

/**** Object.keys ****/
const person = {
  firstName: "María Eugenia",
  lastName: "Costa"
}

conosle.log(Object.keys.person); // {"firstName", "lastName"}
