const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const dataFolderPath = path.join(__dirname, "../data/cards.json");

// Ruta para obtener la información de las tarjetas
router.get("/cards", (req, res) => {
  fs.readFile(dataFolderPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer cards.json:", err);
      res.status(500).send({ error: "Error al leer el archivo cards.json" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;
