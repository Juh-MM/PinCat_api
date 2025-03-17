const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express()

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));


const fotos = [
    {
        "id": 1,
        "title": "Minha gata assustada",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/17.jpg"
    },
    {
        "id": 2,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/voce.jpg",
    },
    {
        "id": 3,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/maroca.jpeg",
    },
    {
        "id": 4,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/luciel%20leiva.jpg",
    },
    {
        "id": 5,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/larry___.jpg",
    },
    {
        "id": 6,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/gatosusto.jpg",
    },
    {
        "id": 7,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/gatochad.jpg",
    },
    {
        "id": 8,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/gatoflor.jpg",
    },
    {
        "id": 9,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/emo.jpg",
    },
    {
        "id": 10,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/ele.jpg",
    },
    {
        "id": 11,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/download.jpg",
    },
    {
        "id": 12,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/download%20(4).jpg",
    },
    {
        "id": 13,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/download%20(3).jpg",
    },
    {
        "id": 14,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow.jpg",
    },
    {
        "id": 15,
        "title": "POV: ração",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(8).jpg",
    },  
    {
        "id": 16,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(9).jpg",
    },
    {
        "id": 17,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(6).jpg",
    },
    {
        "id": 18,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(5).jpg",
    },
    {
        "id": 19,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(4).jpg",
    },
    {
        "id": 20,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(3).jpg",
    },
    {
        "id": 21,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(2).jpg",
    },
    {
        "id": 22,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(12).jpg",
    },
    {
        "id": 23,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(10).jpg",
    },
    {
        "id": 24,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/dow%20(1).jpg",
    },
    {
        "id": 25,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/cats.jpg",
    },
    {
        "id": 26,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/cat_3.jpg",
    },

    {
        "id": 27,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/cat%20the%20nerd.jpg",
    },
    {
        "id": 28,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/bilquis.jpeg",
    },
    {
        "id": 29,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/ala.jpg",
    },
    {
        "id": 30,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/agatha.jpeg",
    },
    {
        "id": 31,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/UIA.jpg",
    },
    {
        "id": 32,
        "title": "Suspeito",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/Cat%20(1).jpg",
    },
    {
        "id": 33,
        "title": "",
        "description": "",
        "image_url": "https://pincat-imgs.sirv.com/Images/CAT.jpg",
    }
]



mongoose.connect(process.env.MONGO_URI)
    .then (() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error Connecting to MongoDB:', err));

const fotosRoute = require('./routes/fotos');
app.use('/api/fotos', fotosRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server running on port ${PORT}'));
