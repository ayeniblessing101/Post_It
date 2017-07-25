import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.groupname)) {
    errors.groupname = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
