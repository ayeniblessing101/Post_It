const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

exports.validateInput = (data) => {
  const errors = {};

  if (Validator.isEmpty(data.groupname)) {
    errors.groupname = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
