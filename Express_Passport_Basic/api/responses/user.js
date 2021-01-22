module.exports = {
  onUserSaveSuccess: {
    success: true,
    message: 'Successfully created new user.',
  },
  onUserSaveError: {
    success: false,
    message: 'Email address already exists.',
  },
};
