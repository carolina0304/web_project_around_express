const express = require("express"); //importa Express.

const mongoose = require("mongoose"); //importa Mongoose.

const app = express(); //crea tu aplicacion.

mongoose.connect("mongodb://localhost:27017/aroundb"); //conecta a la base de datos MongoDB llamada "aroundb".

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
    res.status(404).json({ message: "ID de usuario no encontrado" }); //Si no se encuentra, devuelve un error 404.
  }
}); //Define una ruta para obtener un usuario por su ID.

app.get("/cards/:id", (req, res) => {
  const { id } = req.params; //Obtiene el ID de la tarjeta desde los parametros de la ruta.
  const card = cards.find((c) => c._id === id); //Busca la tarjeta con el ID especificado.
  if (card) {
    res.json(card); //Si se encuentra la tarjeta, devuelve sus datos en formato JSON.
  } else {
    res.status(404).json({ error: "Tarjeta no encontrada" }); //Si no se encuentra, devuelve un error 404.
  }
}); //Define una ruta para obtener una tarjeta por su ID.

app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
}); //Manejo de rutas no encontradas.
