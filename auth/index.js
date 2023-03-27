const jwt = require('jsonwebtoken')
const config = require('../config.js');
const secret = config.jwt.secret;

function sign(data){
    return jwt.sign(data,secret)
}

// ? midlewares
// ? para verificar que el token tenga permisios para acceder al servicio

function verify(token){
    return jwt.verify(token, secret);
}

const check = {
    own: function(req, owner){
        const decoded = decodeHeader(req)
        console.log(decoded);
    },
}

function getToken(auth){
    if(!auth){
        throw new Error('No viene token')
    }

    if(auth.indexOf('Bearer ') === -1){
        throw new Error('Formato invalido')
    }

    let token = auth.replace('Bearer ', '')

    return token
}

function decodeHeader(req){
    const autorization = req.headers.autorization || '';
    const token = getToken(autorization);
    const decoded = verify(token)

    req.user = decoded;
}

module.exports = {
    sign,
}