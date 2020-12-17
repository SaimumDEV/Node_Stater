'use strict';

const express = require('express');
const userRoute = require('./user');

const app = express();
app.get('/v1', function (req, res) {
  res.send('Welcome to v1');
});

app.use('/v1', userRoute);
module.exports = app;
