import fs from "fs";
const data = fs.readFileSync("productes.json", "utf8");

let productes = JSON.parse(data);

function mostrarProducte(myobject, id) {
  const product = productes.filter((n) => n.id === id);

  console.table(product);
}

mostrarProducte(productes, 1);
