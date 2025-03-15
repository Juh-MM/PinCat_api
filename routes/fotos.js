const express = require('express');
const routes = express.Router();
const fotosController = require('../controller/fotosController')

routes.get('/', fotosController.getAllFotos);

routes.post('/', fotosController.createFoto);

routes.put('/:id', fotosController.updateFoto);

routes.delete('/:id', fotosController.deleteFoto);

module.exports = routes;
