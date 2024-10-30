import fs from "fs";
const data = fs.readFileSync("productes.json", "utf8");

let productes = JSON.parse(data);

function mostrarProducte(myobject) {
  console.log("Producte: " + myobject.id);
  console.log("==============");
  console.log("nom : "+myobject.nom);
  console.log(myobject.marca);
  console.log(myobject.categoria);
  console.log(myobject.preu);
  console.log(myobject.disponible);
  console.log(myobject.caracteristiques);
}

function mostrarTot(productes) {
  productes.forEach(mostrarProducte);
}

mostrarTot(productes);
