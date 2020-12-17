'use strict';

const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const error_handler = require('node-error-handler');

const routes = require('./routes');

function connect(app) {
  //middlewire

  app.use(cors());
  app.use(bodyParser.json());
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
