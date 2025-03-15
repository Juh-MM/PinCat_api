const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express()

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI)
    .then (() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error Connecting to MongoDB:', err));

const fotosRoute = require('./routes/fotos');
app.use('/api/fotos', fotosRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server running on port ${port}'));
