const Foto = require('../modules/Fotos');

//Procurar uma foto nas fotos cadastradas
exports.getAllFotos = async (req, res) => {
    try {
        const fotos = await Foto.find();
        res.json(fotos);
    } catch(err) {
        res.status(500).json({ massage: err.massage});
    }
};

//Cadastrar uma foto
exports.createFoto = async (req, res) => {
    const {title, description, image_url} = req.body;
    const newFoto = new Foto({title, description, image_url});

    try {
        const savedFoto = await newFoto.save();
        res.status(201).json(savedFoto);
    } catch(err) {
        res.status(400).json({massage: err.massage});
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
        res.jsn({massage: 'Foto apagada!'})
    } catch(err) {
        res.status(500).json({massage: err.massage});
    }
};
