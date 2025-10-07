const mongoose = require("mongoose"); //importa Mongoose.

const userSchema = new mongoose.Schema({
  name: {
    type: String, // este campo se llamara name y guardara el nombre del usuario.
    required: true, // este campo es obligatorio
    minlength: 2, // especifica la longitud mínima/máxima de los campos
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validator: {
      //validador para comprobar que la URL es correcta.
      validator(v) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(
          v
        );
      },
      message: "Por favor, introduce una Url válida",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
