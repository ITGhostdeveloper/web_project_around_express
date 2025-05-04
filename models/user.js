const mongoose = require("mongoose");

// Creando el esquema del usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "El nombre debe tener al menos 2 caracteres"],
    maxlength: [30, "El nombre debe tener como máximo 30 caracteres"],
  },
  about: {
    type: String,
    required: true,
    minlength: [2, "La profesion debe tener al menos 2 caracteres"],
    maxlength: [30, "La profesion debe tener como máximo 30 caracteres"],
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} no es una URL válida!`,
    },
  },
});

// Creando el modelo de usuario
module.exports = mongoose.model("User", userSchema);