const Foto = require('../modules/Fotos');
const fs = require('fs');

//Procurar uma foto nas fotos cadastradas
exports.getAllFotos = async (req, res) => {
    try {
        const { title } = req.query;

        let fotos;

        if (title) {
            // Pesquisa parcial com regex
            fotos = await Foto.find({ title: { $regex: title, $options: 'i' } });
        } else {
            fotos = await Foto.find();
        }

        res.json(fotos);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

exports.buscarPorTitulo = async (req, res) => {
    try {
      const { titulo } = req.query;
  
      const fotos = await Foto.find({
        titulo: { $regex: titulo, $options: 'i' } //i = case insensitive
      });
  
      res.json(fotos);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar fotos por título' });
    }
  };


//Cadastrar uma foto
exports.createFoto = async (req, res) => {
    try {
        if (req.file) {
            imageUrl = `/uploads/${req.file.filename}`; // imagem via upload
        } else if (req.body.url) {
            imageUrl = req.body.url; // imagem via URL
        } else {
            return res.status(400).json({ message: 'É necessário enviar uma imagem ou uma URL.' });
        }

        const newFoto = new Foto({
            id: req.body.id,
            title: req.body.title,
            url: imageUrl
        });

        const savedFoto = await newFoto.save();
        res.status(201).json(savedFoto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};          

//Atualizar uma publicação
exports.updateFoto = async (req, res) =>{
    try {
        const updateFoto = await Foto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updateFoto);
    } catch(err) {
        res.status(400).json({massage: err.massage});
    }
};

//Deletar uma publicação
exports.deleteFoto = async (req, res) =>{
    try {
        await Foto.findByIdAndDelete(req.params.id);
        res.json({massage: 'Foto apagada!'})
    } catch(err) {
        res.status(500).json({massage: err.massage});
    }
};
