const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

exports.validateInput = (data) => {
  const errors = {};
  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
