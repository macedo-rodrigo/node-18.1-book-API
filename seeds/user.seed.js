// Importar la librería Mongoose para interactuar con MongoDB
const mongoose = require("mongoose");
// Importar la función 'connect' desde el archivo "../db.js"
const { connect } = require("../db.js");
// Importar el modelo 'User' desde el archivo "../models/Book.js"
const { Book } = require("../models/User.js");

// Lista de libros que se utilizará para agregar datos
const bookList = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 543,
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
  },
];

// Conectar a la base de datos y luego realizar operaciones
connect().then(() => {
  console.log("Tenemos conexión"); // Imprimir mensaje de conexión exitosa

  // Eliminar los datos de la colección 'User'
  Book.collection.drop().then(() => {
    console.log("Libros eliminados"); // Imprimir mensaje de eliminación exitosa de usuarios

    // Mapear la lista de libros a objetos 'User'
    const documents = bookList.map((book) => new Book(book));

    // Insertar muchos documentos en la colección 'User'
    Book.insertMany(documents)
      .then(() => console.log("Datos guardados correctamente!")) // Imprimir mensaje de guardado exitoso
      .catch((error) => console.error(error)) // Manejar errores de inserción
      .finally(() => mongoose.disconnect()); // Desconectar la base de datos después de completar las operaciones
  });
});
