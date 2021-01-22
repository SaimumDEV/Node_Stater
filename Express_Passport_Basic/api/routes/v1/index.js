'use strict';

const express = require('express');
const passport = require('passport');
const userRoute = require('./user');

const app = express();
app.get('/v1', function (req, res) {
  res.send('Welcome to v1');
});

app.use('/v1', passport.authenticate('jwt', { session: false }), userRoute);
module.exports = app;
