const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Ruta absoluta correcta al archivo users.json
const usersFilePath = path.join(__dirname, "../data/users.json");

// Ruta para obtener la información de todos los usuarios
router.get("/users", (req, res) => {
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer users.json:", err);
      res.status(500).send({ error: "Error al leer el archivo users.json" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Ruta para obtener la información de un usuario específico por ID
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer users.json:", err);
      res.status(500).send({ error: "Error al leer el archivo users.json" });
      return;
    }

    try {
      const users = JSON.parse(data);
      const user = users.find((u) => u._id == userId); // usar == por si hay diferencia entre número y string

      if (!user) {
        res.status(404).send({ error: "Usuario no encontrado" });
        return;
      }

      res.json(user);
    } catch (parseError) {
      console.error("Error al parsear users.json:", parseError);
      res
        .status(500)
        .send({ error: "Error al procesar el archivo users.json" });
    }
  });
});

module.exports = router;
