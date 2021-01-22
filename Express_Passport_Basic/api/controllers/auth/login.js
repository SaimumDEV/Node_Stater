const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const responses = require('../../responses');
const catchAsync = require('../../utils/catch_async');
const { refresh, refreshTokens } = require('../../../config/jwt');

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return res.status(400).json(...responses.onValidationError);
  }

  const user = { id: 1, email: 'test', password: 'test', firstName: 'Test', lastName: 'User' };

  if (!user) {
    return res.status(401).json(responses.onAuthEmailError);
  }

  const passwordHash = await bcrypt.hash(user.password, 10);
  const passwordsMatch = await bcrypt.compare(password, passwordHash);

  if (passwordsMatch) {
    const payload = { id: user.id };
    const refreshToken = jwt.sign(payload, refresh.secret, {
      algorithm: refresh.algorithm,
      expiresIn: refresh.time,
    });

    refreshTokens.push(refreshToken);

    return res.status(200).json({ ...responses.onLoginSuccess, token: { refresh: refreshToken } });
  } else {
    return res.status(401).json(responses.onAuthPasswordError);
  }
});
