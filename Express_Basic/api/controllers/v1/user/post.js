const httpResponses = require('../../../responses');

exports.createUser = async (req, res) => {
  res.status(200).json({ ...httpResponses.onUserSaveSuccess });
};
