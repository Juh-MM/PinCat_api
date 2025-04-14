const express = require('express');
const router = express.Router();
const fotosController = require('../controllers/fotosController');
const upload = require('../middlewares/upload');

router.get('/', fotosController.getAllFotos);

router.post('/', upload.single('imagem'), fotosController.createFoto);

router.put('/:id', fotosController.updateFoto);

router.delete('/:id', fotosController.deleteFoto);

module.exports = router;
