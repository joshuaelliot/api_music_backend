require('dotenv').config();
const express = require('express');
const app = express();
const albumsRouter = require('./routes/albums');
const songsRouter = require('./routes/songs');
const errorHandler = require('./middlewares/errorHandler');
const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost:5500', // Origen permitido
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

// Rutas
app.use('/api/albums', albumsRouter);
app.use('/api/songs', songsRouter);

// Middleware para manejo de errores
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

