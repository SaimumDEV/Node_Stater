'use strict';
const http = require('http');
const config = require('../config');

function start(app) {
  const server = http.createServer(app);
  server.listen(config.server.port, function () {
    console.log('Server listening on ' + config.server.hostname + ':' + config.server.port);
  });
}

module.exports = {
  start: start,
};
