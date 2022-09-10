'use strict';
const dateController = require('../controller/date.controller');
module.exports = function (app) {

    app.get('/date/recent', function (req, res) {
        return dateController.recent(req, res);
    });
    app.get('/date/top/10', function (req, res) {
        return dateController.top10(req, res);
    });
    app.get('/date/last', function (req, res) {
        return dateController.last(req, res);
    });
};