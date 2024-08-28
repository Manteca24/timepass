const horaMiddleware = (req, res, next) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    req.currentTime = `${currentHour}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}`;
    req.currentHour = currentHour;
    next();
};

module.exports = horaMiddleware;