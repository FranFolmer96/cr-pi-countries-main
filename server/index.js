const express = require('express');
const { conn } = require('./src/db.js');
const SaveAllCountries = require('./src/controllers/SaveAllCountries.js');
const routes = require('./src/routes/index.js');
const cors = require('cors');
const PORT = 3001;

const startServer = async () => {
  // Sincroniza la base de datos
  try {
    await conn.sync({ force: true });
    console.log('Base de datos sincronizada correctamente');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
  
  // Llama a SaveAllCountries al inicio
  try {
    await SaveAllCountries();
    console.log('Datos de países guardados correctamente');
  } catch (error) {
    console.error('Error al guardar datos de países:', error);
  }
  
  const app = express();

  // Configura middleware
  app.use(cors());
  app.use(express.json());

  // Configura tus rutas
  app.use('/', routes);

  // Escucha en el puerto
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
};

startServer();