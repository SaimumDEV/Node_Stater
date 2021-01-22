const httpResponses = require('../../../responses');

exports.getUser = async (req, res) => {
  res.status(200).json({ ...httpResponses.onSuccess, data: [] });
};
