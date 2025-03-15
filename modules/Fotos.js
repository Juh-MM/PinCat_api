const mongoose = require('mongoose')

const FotoSchema = new mongoose.Schema({
    title: {type: String, required: false},
    description: {type: String, required: false},
    image_url: {type: String, required: true}
});

module.exports = mongoose.model('Foto', FotoSchema);
