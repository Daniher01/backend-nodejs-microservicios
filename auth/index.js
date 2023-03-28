const jwt = require('jsonwebtoken')
const config = require('../config.js');
const secret = config.jwt.secret;

function sign(data){
    return jwt.sign(data,secret)
}


// ? para verificar que el token tenga permisios para acceder al servicio

const check = {
    own: function(req, id){   
        const token = req.headers.authorization.split(' ')[1] // ? quita la palabra 'Bearer
        const decoded = jwt.verify(token, secret) 
        
        if (decoded.id !== id){
            throw new Error("No tienes permisos")
        }

        console.log(decoded);

    }
}

module.exports = {
    sign,
    check
}