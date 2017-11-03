const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

exports.validateInput = (data) => {
  const errors = {};
  if (Validator.isEmpty(data.newPassword)) {
    errors.newPassword = 'This field is required';
  }
  if (Validator.isEmpty(data.confirmNewPassword)) {
    errors.confirmNewPassword = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
