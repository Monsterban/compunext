require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./src/config/database');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
const contactosRouter = require('./src/routes/RouteOrden');
app.use('/api/contactos', contactosRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

// Iniciar servidor
connection.connect(err => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    process.exit(1);
  }
  
  console.log('Conectado a MySQL');
  app.listen(port, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
  });


  connection.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) {
    console.error('Error en consulta de prueba:', error);
    return;
  }
  console.log('Consulta de prueba exitosa. Resultado:', results[0].solution);
  console.log('Base de datos configurada:', connection.config.database);
  });

});