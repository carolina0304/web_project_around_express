const path = require("path");
const fs = require("fs");

const rutaUsers = path.join(__dirname, "data", "users.json");

fs.readFile(rutaUsers, "utf8", (err, data) => {
  if (err) {
    //console.error('Error al leer el archivo:', err);
    return;
  }
  try {
    const users = JSON.parse(data);
    console.log(users);
  } catch (parseErr) {
    console.error("Error al parsear JSON:", parseErr);
  }
});
