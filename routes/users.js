const path = require("path");
const fs = require("fs");

const User = require("../models/user.js"); // ajusta la ruta según tu estructura

router.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send({ data: users }); //✅ Envía los usuarios al cliente
    })
    .catch((err) => {
      res.status(500).send({ message: "Error interno del servidor" }); // ✅ Envía error 500
    });
});

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
