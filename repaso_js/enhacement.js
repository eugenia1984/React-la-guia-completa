/**** Enhacement ****/
const band = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master of Puppets", "Seek & Destroy"m "Enter Sandman"];

// forma anterior
/*
const metallica = {
  banca: banda;
  genero: genero,
  canciones: canciones
}
*/

// forma nueva 
const metallica = { banda, genero, canciones};
console.log(metallica);
