const jwt = require('jsonwebtoken')
const config = require('../config.js');
const error = require('../utils/error')
const secret = config.jwt.secret;

function sign(data) {
    let jsonData = JSON.parse(JSON.stringify(data));
    return jwt.sign(jsonData, secret);
  }

// ? para verificar que el token tenga permisios para acceder al servicio

const check = {
    own: function(req, id){   
        const token = req.headers.authorization.split(' ')[1] // ? quita la palabra 'Bearer
        const decoded = jwt.verify(token, secret) 
        
        if (decoded.id !== id){
            throw error('No puedes hacer esto', 401)
        }
        req.user = decoded
        console.log(decoded);

    },

    logged: function(req){   
        const token = req.headers.authorization.split(' ')[1] // ? quita la palabra 'Bearer
        const decoded = jwt.verify(token, secret) 
        req.user = decoded
        console.log(decoded);

    }
}

module.exports = {
    sign,
    check
}