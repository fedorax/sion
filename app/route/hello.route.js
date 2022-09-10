'use strict';
const helloController = require('../controller/hello.controller');
module.exports = function (app) {
    app.get('/', function (req, res) {
        return helloController(req, res);
    });
};