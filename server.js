'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
const path = require('path');
//const configureMongoose = require('./config/mongoose');
const config = require(path.resolve('config'));
const configureExpress = require(path.resolve('middleware/express'));

const app = configureExpress();

require('./app/route')(app);

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

// Listen on provided port, on all network interfaces.
app.listen(port, () => console.log(`API running on localhost:${port}`));