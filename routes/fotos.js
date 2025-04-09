const express = require('express');
const router = express.Router();
const fotosController = require('../controllers/fotosController');

router.get('/', fotosController.getAllFotos);

router.post('/', fotosController.createFoto);

router.put('/:id', fotosController.updateFoto);

router.delete('/:id', fotosController.deleteFoto);

module.exports = router;
