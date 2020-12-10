const express = require('express');
const routes = express.Router();

// Importando el controlador de personas
const generosController = require('../controllers/generosController');

// Rutas

routes.get('/generos', generosController.listar);

routes.get('/generos/:id', generosController.obtenerGenero);

routes.post('/generos', generosController.crear)

routes.put('/generos/:id', generosController.editar)

routes.delete('/generos/:id', generosController.eliminar)

module.exports = routes;