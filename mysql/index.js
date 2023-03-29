const express = require('express');
const config = require('../config.js');
const router = require('./network')

const app = express();

app.use(express.json())

// RUTAS
app.use('/', router)

app.listen(config.mysqlService.port, () => {
    console.log(`Servicio de Mysql escuchando en el puerto ${config.mysqlService.port}`);
})

