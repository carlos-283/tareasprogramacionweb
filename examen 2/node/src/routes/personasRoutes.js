const express = require('express');
const routes = express.Router();

const personasController = require('../controllers/personasController');


routes.get('/', personasController.listar);

routes.get('/:id', personasController.obtenerPersona);

routes.post('/', personasController.crear);

routes.post('/:id', personasController.editar);

routes.delete('/:id', personasController.eliminar);

module.exports = routes;