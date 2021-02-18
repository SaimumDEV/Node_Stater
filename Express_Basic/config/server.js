const client = require('./client');

module.exports = {
  port: process.env.SERVER_PORT,
  protocol: process.env.SERVER_PROTOCOL,
  hostname: process.env.SERVER_HOST,
  whitelist: [`${client.protocol}://${client.hostname}:${client.port}`],
};
