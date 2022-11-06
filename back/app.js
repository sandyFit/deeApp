const express = require('express');
const app = express();

app.use(express.json());

//Importar rutas
const books = require('./routes/booksRoute');

// Ruta del navegador
app.use('/api', books)

module.exports = app