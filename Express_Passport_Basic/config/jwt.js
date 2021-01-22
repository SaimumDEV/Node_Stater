module.exports = {
  access: {
    secret: 'jwt-secret',
    time: '60s',
    algorithm: 'HS512',
  },
  refresh: {
    secret: 'refresh-secret',
    time: '60d',
    algorithm: 'HS256',
  },
  refreshTokens: [],
};
