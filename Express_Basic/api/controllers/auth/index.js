const catchAsync = require('../../utils/catch_async');

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new Error('Please provide email and password!', 400));
  }
});

exports.isLogin = catchAsync(async (req, res, next) => {
  next(new Error('Missing field', 422));
});
