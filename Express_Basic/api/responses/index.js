const auth = require('./auth');
const user = require('./user');

module.exports = {
  ...auth,
  ...user,
  onSuccess: {
    success: true,
    message: 'Request Successful.',
  },
  onFailure: {
    success: false,
    message: 'Request Failed.',
  },
};
