import fs from "fs";
const data = fs.readFileSync("productes.json", "utf8");

let productes = JSON.parse(data);

function mostrarProducte(myobject) {
  console.log(myobject.nom);
  console.log(myobject.marca);
  console.log(myobject.categoria);
  console.log(myobject.preu);
  console.log(myobject.disponible);
  console.log(myobject.caracteristiques.memoria);
  console.log(myobject.caracteristiques.disc_dur);
  console.log(myobject.caracteristiques.processador);
}

mostrarProducte(productes[0]);
