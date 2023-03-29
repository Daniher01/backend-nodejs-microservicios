const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');
// const secure = require('./secure')

const router = express.Router();

// Routes
router.get('/', list)
router.post('/', post)

// ? functions
function list(req, res, next){
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(next);
}

function post(req, res, next){
    Controller.insert(req.body.text, req.body.user)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(next);
}

module.exports = router;