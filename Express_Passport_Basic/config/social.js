module.exports = {
  redirect: {
    successRedirect: '/api/auth/social',
    failureRedirect: '/api/auth/error',
    session: false,
  },
  github: {
    clientId: '32c1cc24fe67fdc2e45a',
    clientSecret: '2c59771f0c5579a06162d617ea6d08f4856aa890',
    callbackUrl: 'http://localhost:8000/api/auth/github/callback',
  },
};
