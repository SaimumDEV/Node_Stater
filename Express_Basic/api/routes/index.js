'use strict';

const v1 = require('./v1');
const authRoute = require('./auth');

function init(app) {
  app.get('/api', function (req, res) {
    res.send('Hello world');
  });

  app.use('/api', authRoute);
  app.use('/api', v1);
}

module.exports = {
  init: init,
};
