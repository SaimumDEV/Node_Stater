'use strict';
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env'),
});

const express = require('express');
const api = require('./api');
const config = require('./config');
const service = require('./service');

const app = express();
service.start(app, config.server);
api.connect(app);
