'use strict';
const counttController = require('../controller/count.controller');
module.exports = function (app) {

    app.get('/count/24', function (req, res) {
        return counttController.latest24h(req, res);
    });

    app.get('/count/12', function (req, res) {
        return counttController.latest12h(req, res);
    });

    app.get('/count/1', function (req, res) {
        return counttController.latest1h(req, res);
    });

};