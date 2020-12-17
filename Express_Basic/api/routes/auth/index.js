'use strict';

const express = require('express');
const localRoute = require('./local');

const app = express();

app.use('/auth', localRoute);

app.get('/auth', function (req, res) {
  res.send('Welcome to auth');
});
module.exports = app;
