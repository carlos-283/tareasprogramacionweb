const express = require('express');
const routes = express.Router();

// Importando el controlador de personas
const peliculasController = require('../controllers/peliculasController');

// Rutas

routes.get('/', peliculasController.listar);

routes.get('/:id', peliculasController.obtenerPelicula);

routes.post('/', peliculasController.crear)

routes.put('/:id', peliculasController.editar)

routes.delete('/:id', peliculasController.eliminar)

module.exports = routes;