const mongoose = require('mongoose')

const FotoSchema = new mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    title: {type: String, required: false},
    description: {type: String, required: false},
    image_url: {type: String, required: true}
});

module.exports = mongoose.model('Foto', FotoSchema);
