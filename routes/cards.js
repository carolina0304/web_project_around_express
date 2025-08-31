const path = require("path");
const fs = require("fs");

const rutaCards = path.join(__dirname, "data", "cards.json");

fs.readFile(rutaCards, "utf8", (err, data) => {
  if (err) {
    //console.error('Error al leer el archivo:', err);
    return;
  }
  try {
    const cards = JSON.parse(data);
    console.log(cards);
  } catch (parseErr) {
    console.error("Error al parsear JSON:", parseErr);
  }
});
