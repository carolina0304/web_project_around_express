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
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(404).send({ message: "El usuario no existe" }));
};
