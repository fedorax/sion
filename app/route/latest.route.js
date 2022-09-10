'use strict';
const latestController = require('../controller/latest.controller');
module.exports = function (app) {

    app.get('/latest/24', function (req, res) {
        return latestController.latest24h(req, res);
    });

    app.get('/latest/12', function (req, res) {
        return latestController.latest12h(req, res);
    });

    app.get('/latest/1', function (req, res) {
        return latestController.latest1h(req, res);
    });

};