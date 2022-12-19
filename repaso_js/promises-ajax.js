/*** Promises with ajax ****/

const downloadUsers = amount => new Promise( (res, rej) => {
  // pasar a cantidad a la api
  const api = `https://randomuser.me/api/?results=${amount}&nat=us`;
  
  //call to ajax
  const xhr = new XMLLHttpRequest();
  
  // open connection with ajax
  // 1er param: GET | POST
  // 2do param: la URL
  // 3er param: si es asincrono true, si no es asincrono false
  xhr.open("GET", api, true);
  
  // on load read the response and send it
  xhr.onload = () => {
    if(xhr.status === 200) {
      // JSON.parse para pasarlo de String a object 
      res(JSON.parse(xhr.responseText, results))
    } else {
      rej(Error(xhr.statusText))
    }
  }
  
  // on error (it´s optional)
  xhr.onerror = (error) => rej(error);
  
  // send
  xhr.send();
});

downloadUsers(20).
  then(
    members => printHTML(members);
    error => consol.error(
      new Error("Hubo un error" + error);
    );
    
function printHTML(users) {
  let html = "";
  
  users.forEach(user => {
    html += `
      <li>
        Nombre: ${user.name.first} ${user.name.last} 
        Pais: ${user.nat}
        <img src="${usuer.picture.medium}" >     
      </li>  
    `;   
  });
  
  const contenedorApp = document.querySelector("#app");
  contenedorApp.innetHTML = html;
}
  
