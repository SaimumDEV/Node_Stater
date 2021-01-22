'use strict';

const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const error_handler = require('node-error-handler');

const routes = require('./routes');
const { client } = require('../config');

function connect(app) {
  //middlewire
  const corsOptions = {
    origin: `${client.hostname}:${client.port}`,
    methods: 'GET,PATCH,POST,DELETE',
  };
  app.use(cors(corsOptions));
  app.use(cors());
  app.use(helmet());
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 20, // limit each IP to 20 requests per windowMs
    message: 'Too many req from one Ip please try again later',
  });

  //  apply to all requests
  app.use(limiter);

  // Set up routes
  routes.init(app);

  //error
  app.use(error_handler({ log: true, debug: false })); //use debug true for error description
}

module.exports = {
  connect: connect,
};
