const { github } = require('../../../config/social');
const GitHubStrategy = require('passport-github2').Strategy;

exports.githubStrategy = new GitHubStrategy(
  {
    clientID: github.clientId,
    clientSecret: github.clientSecret,
    callbackURL: github.callbackUrl,
  },
  async function (accessToken, refreshToken, profile, done) {
    if (profile) {
      console.log({ accessToken: accessToken, refreshToken: refreshToken, profile: profile });
      return done(null, profile);
    } else {
      return done(null, false);
    }
  }
);
