const passport = require('passport');
const strategy = require('./strategy');

function start(app) {
  app.use(passport.initialize());
  strategy.initialize(passport);
}

module.exports = {
  start: start,
};
