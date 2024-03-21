// Cargamos variables de entorno
require("dotenv").config();
const DB_CONNECTION = process.env.DB_URL;

const mongoose = require("mongoose");

// Configuración de la conexión
const config = {
  useNewUrlParser: true, // Usar el nuevo analizador de URL
  useUnifiedTopology: true, // Usar la topología unificada
  serverSelectionTimeoutMS: 5000, // Tiempo de espera de selección del servidor en milisegundos
  dbName: "node-s3", // Nombre de la base de datos
};

// Función para conectar a la base de datos
const connect = async () => {
  // Conexión a la base de datos utilizando la URL de la base de datos y la configuración
  const database = await mongoose.connect(DB_CONNECTION, config);
  // Obtener el nombre de la base de datos a la que se ha conectado
  const name = database.connection.name;
  // Obtener el host al que se ha conectado
  const host = database.connection.host;
  // Imprimir un mensaje indicando que se ha conectado a la base de datos con éxito
  console.log(`Conectado a la base de datos ${name} en el host ${host}`);
};

// Exportar la función de conexión para que esté disponible para otros módulos
module.exports = { connect };
