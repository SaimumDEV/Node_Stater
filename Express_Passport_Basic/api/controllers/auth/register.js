const bcrypt = require('bcrypt');
const responses = require('../../responses');
const catchAsync = require('../../utils/catch_async');

exports.register = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    res.status(400).json(responses.onValidationError);
  }

  const hashCost = 10;
  const passwordHash = await bcrypt.hash(password, hashCost);
  console.log(passwordHash);
  // const userDocument = new UserModel({ username, passwordHash });
  // await userDocument.save();

  res.status(201).json(responses.onUserSaveSuccess);
});
