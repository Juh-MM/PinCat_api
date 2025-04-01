const mongoose = require('mongoose');

const FotoSchema = new mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    title: {type: String, required: false},
    url: {type: String, required: true},
    createAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Foto', FotoSchema);
