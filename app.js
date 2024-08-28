const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.use('/', indexRouter); 
app.use('/endroute', endrouteRouter);

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/');
});
