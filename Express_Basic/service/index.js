'use strict';
const http = require('http');

function start(app, config) {
  const server = http.createServer(app);

  server.listen(config.port, function () {
    console.log(`Running Environment ${process.env.NODE_ENV}`);
    console.log(`Server listening on ${config.protocol}://${config.hostname}:${config.port}`);
  });
}

module.exports = {
  start: start,
};
