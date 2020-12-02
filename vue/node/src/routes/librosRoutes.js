const express = require('express');
const routes = express.Router();

const librosController = require('../controllers/librosController');


routes.get('/obtenerlibros', librosController.obtenerLibros);

// routes.get('/:id', personasController.obtenerPersona);

routes.post('/crearlibro', librosController.crearLibro);

// routes.post('/:id', personasController.editar);

// routes.delete('/:id', personasController.eliminar);

module.exports = routes;