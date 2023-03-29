const express = require('express');
const bodyParser = require('body-parser');


const config = require('../config.js');
const post = require('./components/post/network');
const error = require('../network/errors')

const app = express();

app.use(bodyParser.json());

// ROUER
app.use('/api/post', post);

app.use(error) // ? importante que este middleware este de ultimo

app.listen(config.post.port, () => {
    console.log('Servicio post escuchando en el puerto ', config.post.port);
});