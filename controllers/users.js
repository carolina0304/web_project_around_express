export const obtenerUsuarios = (req, res) => {
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

  User.find({})
    .then((users) => {
      res.send({ data: users }); //✅ Envía los usuarios al cliente
    })
    .catch((err) => {
      res.status(500).send({ message: "Error interno del servidor" }); // ✅ Envía error 500
    });
};

export const hola = (req, res) => {
  res.send("hola carolina"); //✅ Envía los usuarios al cliente
};

export const hello = (req, res) => {
  res.send("hello carolina"); //✅ Envía los usuarios al cliente
};
