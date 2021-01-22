const jwt = require('jsonwebtoken');
const responses = require('../../responses');
const catchAsync = require('../../utils/catch_async');
const { access, refresh, refreshTokens } = require('../../../config/jwt');

exports.getAccessToken = catchAsync(async (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.status(401).json(responses.onLoginError);
  }

  // If the refresh token is valid, create a new accessToken.
  jwt.verify(refreshToken, refresh.secret, (error, user) => {
    if (!error) {
      const payload = { id: user.id };
      const accessToken = jwt.sign(payload, access.secret, { algorithm: access.algorithm, expiresIn: access.time });

      return res.status(200).json({ ...responses.onSuccess, token: { access: accessToken } });
    } else {
      return res.status(401).json(responses.onFailure);
    }
  });
});

exports.deleteRefreshToken = catchAsync(async (req, res) => {
  const refreshToken = req.body.token;

  const index = refreshTokens.indexOf(refreshToken);
  refreshTokens.splice(index, 1);

  res.status(200).json(responses.onSuccess);
});
