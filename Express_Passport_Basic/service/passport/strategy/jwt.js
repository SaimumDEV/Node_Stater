const passportJWT = require('passport-jwt');
const { access } = require('../../../config/jwt');

const jwtOptions = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: access.secret,
};

const JwtStrategy = passportJWT.Strategy;

exports.jwtStrategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
  console.log('Passport js - payload received', jwt_payload);

  // let user = getUser({ id: jwt_payload.id });
  const user = { id: 1, email: 'test', password: 'test', firstName: 'Test', lastName: 'User' };

  const expirationDate = new Date(jwt_payload.exp * 1000);
  if (expirationDate < new Date()) {
    return next(null, false);
  }

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
