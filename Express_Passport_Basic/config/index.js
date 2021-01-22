const server = require('./server');
const client = require('./client');
const social = require('./social');
const jwt = require('./jwt');

module.exports = {
  server: server,
  client: client,
  social: social,
  jwt: jwt,
};
