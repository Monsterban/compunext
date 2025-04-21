const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// GET todos los clientes
router.get('/', (req, res) => {
  connection.query('SELECT * FROM orden', (error, results) => {
    if (error) return res.status(500).json({ error });
    res.json(results);
  });
});

// POST nuevo cliente
router.post('/', (req, res) => {
  const { nombre, identificacion, telefono, correo } = req.body;
  
  connection.query(
    'INSERT INTO orden (nombre, identificacion, telefono, correo) VALUES (?, ?, ?, ?)',
    [nombre, identificacion, telefono, correo],
    (error, results) => {
      if (error) return res.status(500).json({ error });
      res.status(201).json({ 
        id: results.insertId, 
        ...req.body 
      });
    }
  );
});

module.exports = router;