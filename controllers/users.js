const User = require("../models/user.js");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send({ data: users }); //✅ Envía los usuarios al cliente
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Error interno del servidor" }); // ✅ Envía error 500
    });
};

/*export const hola = (req, res) => {
  res.send("hola carolina"); //✅ Envía los usuarios al cliente
};

export const hello = (req, res) => {
  res.send("hello carolina"); //✅ Envía los usuarios al cliente
};*/

module.exports.getUserbyID = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "El usuario no existe" });
      }
      res.send({ data: user });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Error interno del servidor" });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(400).send({ message: "Datos inválidos" });
      } else {
        res.status(500).send({ message: "Error interno del servidor" });
      }
    });
};
