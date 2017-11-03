const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

exports.validateInput = (data) => {
  const errors = {};
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
