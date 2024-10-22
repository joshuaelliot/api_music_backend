const express = require('express');
const router = express.Router();

// Datos ficticios de canciones
let songs = [
    { id: 1, title: 'Song 1', album: 1, duration: 180 },
    { id: 2, title: 'Song 2', album: 1, duration: 240 },
    { id: 3, title: 'Song 3', album: 2, duration: 200 }
];

// Obtener todas las canciones
router.get('/', (req, res) => {
    res.json(songs);
});

// Obtener una canción por ID
router.get('/:id', (req, res) => {
    const song = songs.find(s => s.id === parseInt(req.params.id));
    if (!song) return res.status(404).json({ message: 'Canción no encontrada' });
    res.json(song);
});

// Crear una nueva canción
router.post('/', (req, res) => {
    const { title, album, duration } = req.body;
    const newSong = { id: songs.length + 1, title, album: parseInt(album), duration };
    songs.push(newSong);
    res.status(201).json(newSong);
});

module.exports = router;

