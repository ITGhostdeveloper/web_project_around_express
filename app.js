const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

const app = express();
const { PORT = 3000 } = process.env;
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect("mongodb://localhost:27017/aroundb").then(() => {
  console.log("Conexión exitosa a la base de datos MongoDB");
});

// Middleware con id del usuario
app.use((req, res, next) => {
  req.user = {
    _id: "68154233391f18a8fa078938", // ID del usuario
  };

  next();
});

// Importar el router de cards
const cardsRouter = require("./routes/cards");
app.use("/cards", cardsRouter);

// Importar el router de users
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// obtener ruta Raiz
app.get("/", (req, res) => {
  res.send("El Servidor Express está funcionando!");
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Error interno del servidor" });
});

// se inicia el Servidor
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
