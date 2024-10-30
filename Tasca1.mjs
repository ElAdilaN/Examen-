import fs from "fs";
const data = fs.readFileSync("productes.json", "utf8");
console.log(data);
function llegirProductes() {
  if (JSON.parse(data)) {
    let productes = JSON.parse(data);
    return productes;
  } else {
    console.log("error parsing");
    return [];
  }
}
console.log(llegirProductes());
