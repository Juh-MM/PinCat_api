const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');

const fotosRoute = require('./routes/fotos.js');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI)
    .then (() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error Connecting to MongoDB:', err));

app.use('/fotos', fotosRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});