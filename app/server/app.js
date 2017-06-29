const express = require('express');
const logger = require('morgan');
const userRoute = require('../server/routes/user');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

// setup express app
const app = express();

// Log request to the console
app.use(logger('dev'));
// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get((req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.use('/', userRoute);

module.exports = app;
