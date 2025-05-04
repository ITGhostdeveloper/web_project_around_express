const User = require("../models/user");

// Controlador para obtener la información de los usuarios
module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error en el servidor" });
    });
};

// Controlador para obtener la información de un usuario específico por ID
module.exports.getUserById = (req, res) => {
  const { _id } = req.params;
  User.findById(_id)
    .orFail()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID de usuario inválido" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      res.status(500).send({ message: "Error en el servidor" });
    });
};

// Controlador para crear un nuevo usuario
module.exports.newUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Error de validación" });
      }
      res.status(500).send({ message: "Error en el servidor" });
    });
};

// Controlador para actualizar la información de un usuario
module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  const { _id } = req.params;
  User.findByIdAndUpdate(
    _id,
    { name, about },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Error de validación" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      res.status(500).send({ message: "Error en el servidor" });
    });
};

// Controlador para actualizar el avatar de un usuario
module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  const { _id } = req.params;
  User.findByIdAndUpdate(_id, { avatar }, { new: true, runValidators: true })
    .orFail()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Error de validación" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      res.status(500).send({ message: "Error en el servidor" });
    });
};
