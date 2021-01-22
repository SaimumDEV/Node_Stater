const responses = require('../../responses');
const catchAsync = require('../../utils/catch_async');

exports.socialSuccess = catchAsync(async (req, res) => {
  return res.status(200).json({ ...responses.onSuccess, user: req.user });
});

exports.socialError = catchAsync(async (req, res, next) => {
  next(new Error('Unknown Error', 400));
});
