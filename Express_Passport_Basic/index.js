'use strict';
const express = require('express');

const api = require('./api');
const config = require('./config');
const service = require('./service');

const app = express();
service.start(app, config.server);
api.connect(app);
