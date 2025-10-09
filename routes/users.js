const express = require("express");
const router = express.Router();
const { obtenerUsuarios, hola, hello } = require("../controllers/users.js");

//const path = require("path");
//const fs = require("fs");

const User = require("../models/user.js"); // ajusta la ruta según tu estructura

router.get("/getusers", obtenerUsuarios);

router.get("/saludaespanol", hola);

router.get("/saludaingles", hello);

/*
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
});*/

module.exports = router;
