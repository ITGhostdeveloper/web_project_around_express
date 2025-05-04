const express = require("express");
const {
  getUsers,
  getUserById,
  newUser,
  updateUser,
  updateAvatar,
} = require("../controllers/users");

const router = express.Router();

// Ruta para obtener la información de los usuarios
router.get("/", getUsers);

// Ruta para obtener la información de los usuarios por Id
router.get("/:_id", getUserById);

// Ruta para crear un nuevo usuario
router.post("/", newUser);

// Ruta para actualizar la información de un usuario
router.patch("/:_id", updateUser);

// Ruta para actualizar el avatar
router.patch("/me/avatar", updateAvatar);

module.exports = router;
