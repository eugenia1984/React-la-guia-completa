/*** Promises ****/
// Para llamados asincronos, a una API, por ejemplo
// Resultado posible : success (resolve) - error (reject)
let addDiscount = new Promises( (resolve, reject) => {
  setTimeOut() () => {
    let discount = false;
    if(discount) {
      resolve("Descuento aplicado")
    } else {
      reject("no se puede aplicar descuento)
    }
  }, 3000);
})

console.log(addDiscount); // pending
// Lo promesa no esta resuelta, falta el .then
  
addDiscount.then(result => {
  console.log(result)
}).cach(error => {
  console.log(error);
});
  
// Despues de 3 segundos dice "No se puede aplicar el descuento"
  
// Si llamo el listado de cleintes a una API en REsolve mando el listado
// De tener un error lo agarro en el catch
