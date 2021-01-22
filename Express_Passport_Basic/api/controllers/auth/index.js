// const catchAsync = require('../../utils/catch_async');

const { login } = require('./login');
const { register } = require('./register');
const { getAccessToken, deleteRefreshToken } = require('./token');
const { socialSuccess, socialError } = require('./social');

module.exports = {
  login: login,
  register: register,
  getAccessToken: getAccessToken,
  deleteRefreshToken: deleteRefreshToken,
  socialError: socialError,
  socialSuccess: socialSuccess,
};

// exports.login = catchAsync(async (req, res, next) => {
//   const { email, password } = req.body;

//   // 1) Check if email and password exist
//   if (!email || !password) {
//     return next(new Error('Please provide email and password!', 400));
//   }
// });

// exports.isLogin = catchAsync(async (req, res, next) => {
//   next(new Error('Missing field', 422));
// });
