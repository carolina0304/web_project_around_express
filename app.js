const express = require("express");

const mongoose = require("mongoose"); //importa Mongoose.

const app = express(); //crea tu aplicacion.
app.use(express.json());

const mongo_url = "mongodb://localhost:27017/aroundb"; //URL de conexion a la base de datos MongoDB.

app.use((req, res, next) => {
  req.user = {
    _id: "68e9085c26a52d0d03a22618", // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});

//RUTAS
const usersRouter = require("./routes/users.js");
app.use("/users", usersRouter);

const cardsRouter = require("./routes/cards.js");
app.use("/cards", cardsRouter);
//const { getUsers, getUserbyID, createUser } = require("./routes/users.js");
//console.log("getUsers:", typeof getUsers);
//console.log("getUserbyID:", typeof getUserbyID);
//console.log("createUser:", typeof createUser);
//mongoose.connect("mongodb://localhost:27017/aroundb"); //conecta a la base de datos MongoDB llamada "aroundb".

const PORT = 3000; //Define en que puerto.

(async () => {
  await mongoose.connect(mongo_url); //conecta a la base de datos MongoDB llamada "aroundb".
  console.log("Conectado a la base de datos MongoDB");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  }); //Levanta el servidor y escucha en el puerto definido.
})(); //Funcion autoejecutable para manejar asincronía.

//Aqui inicia y se pone en linea el servidor express.
//app.listen(PORT, () => {
//console.log(`Servidor corriendo en el puerto ${PORT}`);
//}); //Levanta el servidor y escucha en el puerto definido.

//const users = require("./data/users.json"); //importa el archivo JSON con los datos de usuarios.
//const cards = require("./data/cards.json"); //importa el archivo JSON con los datos de tarjetas.

//app.get("/", getUsers);
//app.get("/:userId", getUserbyID);
//app.post("/", createUser);

/*app.get("/users", (req, res) => {
  res.json(users);
}); //Define una ruta para obtener todos los usuarios.*/

/*app.get("/cards", (req, res) => {
  res.json(cards);
}); //Define una ruta para obtener todas las tarjetas.*/

/*app.get("/users/:id", (req, res) => {
  const { id } = req.params; //Obtiene el ID del usuario desde los parametros de la ruta.
  const user = users.find((u) => u._id === id); //Busca el usuario con el ID especificado.
  if (user) {
    res.json(user); //Si se encuentra el usuario, devuelve sus datos en formato JSON.
  } else {
    res.status(404).json({ message: "ID de usuario no encontrado" }); //Si no se encuentra, devuelve un error 404.
  }
}); //Define una ruta para obtener un usuario por su ID.*/

/*app.get("/cards/:id", (req, res) => {
  const { id } = req.params; //Obtiene el ID de la tarjeta desde los parametros de la ruta.
  const card = cards.find((c) => c._id === id); //Busca la tarjeta con el ID especificado.
  if (card) {
    res.json(card); //Si se encuentra la tarjeta, devuelve sus datos en formato JSON.
  } else {
    res.status(404).json({ error: "Tarjeta no encontrada" }); //Si no se encuentra, devuelve un error 404.
  }
}); //Define una ruta para obtener una tarjeta por su ID.*/

app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
}); //Manejo de rutas no encontradas.
