'use strict';
const dataController = require('../controller/data.controller');
module.exports = function (app) {
    app.get('/data/all', function (req, res) {
        return dataController.all(req, res);
    });

};