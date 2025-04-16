const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const { PORT = 3000 } = process.env;

const dataFolderPath = path.join(__dirname, "data");

// mostrar los archivos dentro de la carpeta data
fs.readdir(dataFolderPath, (err, files) => {
  if (err) {
    console.error("Error al leer la carpeta:", err);
    return;
  }
  console.log("Archivos dentro de esta carpeta:", files);
});

// Importar el router de cards
const cardsRouter = require("./routes/cards");
app.use(cardsRouter);

// Importar el router de users
const usersRouter = require("./routes/users");
app.use(usersRouter);

// obtener ruta Raiz
app.get("/", (req, res) => {
  res.send("El Servidor Express está funcionando!");
});

// se inicia el Servidor
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
