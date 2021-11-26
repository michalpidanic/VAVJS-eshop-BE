const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// const globalErrHandler = require('./controllers/errorController');
// const AppError = require('./utils/appError');
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// app routes
require('./src/routes')(app);
app.get('*', (req, res) =>
    res.status(200).send({
        message: 'Welcome to the beginning of nothingness.',
    })
);

module.exports = app;
