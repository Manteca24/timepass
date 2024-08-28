const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
    res.send(`
        <h1>Ruta Final</h1>
        <p>¡Bienvenido a la ruta final!</p>
        <p>La hora actual es: ${req.currentTime}</p>
        <a href="/">Volver a la página principal</a>
    `);
});

module.exports = router;
