const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
};

module.exports = errorHandler;

