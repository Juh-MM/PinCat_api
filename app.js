const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
const path = require('path');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));

const dataPath = path.join(__dirname, 'fotos.json');

const fotosRoute = require('./routes/fotos');
app.use('/api/fotos', fotosRoute);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

