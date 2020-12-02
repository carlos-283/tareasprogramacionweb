const express = require('express');
const routes = express.Router();

const tareasController = require('../controllers/tareasController');

routes.get('/', tareasController.obtenerTodas);

routes.get('/:id', tareasController.obtenerTarea);

routes.delete('/:id', tareasController.eliminar);

module.exports = routes;