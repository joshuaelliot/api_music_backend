const express = require('express');
const router = express.Router();

// Datos ficticios de álbumes
let albums = [
    { id: 1, title: 'Album 1', artist: 'Artist 1', cover: 'https://via.placeholder.com/150', releaseDate: '2020-01-01' },
    { id: 2, title: 'Album 2', artist: 'Artist 2', cover: 'https://via.placeholder.com/150', releaseDate: '2021-05-15' }
];

// Obtener todos los álbumes
router.get('/', (req, res) => {
    res.json(albums);
});

// Obtener un álbum por ID
router.get('/:id', (req, res) => {
    const album = albums.find(a => a.id === parseInt(req.params.id));
    if (!album) return res.status(404).json({ message: 'Álbum no encontrado' });
    res.json(album);
});

// Crear un nuevo álbum
router.post('/', (req, res) => {
    const { title, artist, cover, releaseDate } = req.body;
    const newAlbum = { id: albums.length + 1, title, artist, cover: cover || 'https://via.placeholder.com/150', releaseDate };
    albums.push(newAlbum);
    res.status(201).json(newAlbum);
});

module.exports = router;

