const express = require("express"); //importa Express.

const app = express(); //crea tu aplicacion.

const PORT = 3000; //Define en que puerto.

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
}); //Levanta el servidor y escucha en el puerto definido.

const users = require("./data/users.json"); //importa el archivo JSON con los datos de usuarios.
const cards = require("./data/cards.json"); //importa el archivo JSON con los datos de tarjetas.

app.get("/users", (req, res) => {
  res.json(users);
}); //Define una ruta para obtener todos los usuarios.

app.get("/cards", (req, res) => {
  res.json(cards);
}); //Define una ruta para obtener todas las tarjetas.

app.get("/users/:id", (req, res) => {
  const { id } = req.params; //Obtiene el ID del usuario desde los parametros de la ruta.
  const user = users.find((u) => u._id === id); //Busca el usuario con el ID especificado.
  if (user) {
    res.json(user); //Si se encuentra el usuario, devuelve sus datos en formato JSON.
  } else {
    res.status(404).json({ error: "Usuario no encontrado" }); //Si no se encuentra, devuelve un error 404.
  }
}); //Define una ruta para obtener un usuario por su ID.
