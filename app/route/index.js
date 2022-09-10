'use strict';

const fs = require('fs');
const path = require('path');
// Define the routes module' method
module.exports = (app) => {
    // Load the routing files
    fs
        .readdirSync(path.resolve('app/route'))
        .filter((filename) => {
            return filename.endsWith('.route.js');
        })
        .forEach((filename) => {
            require(path.resolve('app/route/' + filename))(app);
        });
};
