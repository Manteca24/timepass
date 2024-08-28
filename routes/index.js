const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', horaMiddleware, (req, res) => {
    const mensaje = req.query.mensaje || 'Bienvenido a la página principal';
    res.send(`
        <h1>${mensaje}</h1>
        <p>La hora actual es: ${req.currentTime}</p>
        <form action="/endroute" method="GET">
            <button type="submit">Entrar</button>
        </form>
    `);
});

module.exports = router;
