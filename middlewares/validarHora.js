const validarHora = (req, res, next) => {
    const hour = req.currentHour;
    if (hour >= 12 && hour < 24) {
        next(); 
    } else {
        res.locals.mensaje = `Aún no son las 12 de la mañana, espera hasta las 12:00 para entrar`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
};

module.exports = validarHora;