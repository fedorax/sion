'use strict';
const cityController = require('../controller/city.controller');
module.exports = function (app) {

    app.get('/city/24', function (req, res) {
        return cityController.city24h(req, res);
    });

    app.get('/city/12', function (req, res) {
        return cityController.city12h(req, res);
    });

    app.get('/city/1h', function (req, res) {
        return cityController.city1h(req, res);
    });

    app.get('/city/1w', function (req, res) {
	return cityController.city1w(req, res);
    });
    
    app.get('/city/1m', function (req, res) {
	return cityController.city1m(req, res);
    });

};
