'use strict';
const express = require('express');

const api = require('./api');
const service = require('./service');

const app = express();
service.start(app);
api.connect(app);
