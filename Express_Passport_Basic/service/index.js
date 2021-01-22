'use strict';
const http = require('http');

const passport = require('./passport');

function start(app, config) {
  passport.start(app);

  const server = http.createServer(app);
  server.listen(config.port, function () {
    console.log('Server listening on ' + config.hostname + ':' + config.port);
  });
}

module.exports = {
  start: start,
};
