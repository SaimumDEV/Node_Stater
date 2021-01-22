module.exports = {
  onLoginSuccess: {
    success: true,
    message: 'Successfully login.',
  },
  onLoginError: {
    success: false,
    message: 'Unauthorized, please Login again.',
  },
  onValidationError: {
    success: false,
    message: 'Please provide email and password.',
  },
  onAuthPasswordError: {
    success: false,
    message: 'Password is incorrect.',
  },
  onAuthEmailError: {
    success: false,
    message: 'No such email found.',
  },
};
