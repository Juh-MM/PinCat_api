const mongoose = require('mongoose');

const FotoSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    title: {type: String, required: false},
    url: {type: String, required: true}
});

module.exports = mongoose.model('Foto', FotoSchema);
