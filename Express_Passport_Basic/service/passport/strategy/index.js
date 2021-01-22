const { jwtStrategy } = require('./jwt');
const { githubStrategy } = require('./github');

function initialize(passport) {
  passport.use(jwtStrategy);
  passport.use(githubStrategy);
}

module.exports = {
  initialize: initialize,
};
