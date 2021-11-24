const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRoutes = require('./routes/userRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

module.exports = app;
