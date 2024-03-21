// Importar la librería Mongoose para interactuar con MongoDB
const mongoose = require("mongoose");
// Importar la clase 'Schema' desde la librería Mongoose
const Schema = mongoose.Schema;

// Definir el esquema del libro
const bookSchema = new Schema(
  {
    title: {
      type: String, // Tipo de datos para el nombre del autor del libro
      required: true, // El nombre del autor es obligatorio
    },
    author: {
      type: String, // Tipo de datos para el apellido del autor del libro
      required: true, // El apellido del autor es obligatorio
    },
    pages: {
      type: Number, // Tipo de datos para el número de páginas del libro
      required: false, // El número de teléfono no es obligatorio
    },
  },
  {
    timestamps: true, // Agregar marcas de tiempo automáticas a los documentos
  }
);

// Crear el modelo 'Book' a partir del esquema definido
const Book = mongoose.model("Book", bookSchema);
// Exportar el modelo 'Book' para que esté disponible en otros archivos
module.exports = { Book };
