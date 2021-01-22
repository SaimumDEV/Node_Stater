'use strict';

const express = require('express');
const passport = require('passport');
const localRoute = require('./local');
const socialRoute = require('./social');

const config = require('../../../config');

const app = express();

app.use('/auth', localRoute);
app.use('/auth', socialRoute);

app.get('/auth', function (req, res) {
  res.send('Welcome to auth');
});

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
app.get('/auth/github/callback', passport.authenticate('github', config.social.redirect));
module.exports = app;
