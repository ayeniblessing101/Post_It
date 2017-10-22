import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import checkNum from '../utils/numberValidation';

export default (data) => {
  const errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field required';
  }
  if (!checkNum(data.phoneNo)) {
    errors.phoneNo = 'This field required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is not valid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field required';
  }
  if (Validator.isEmpty(data.confirm_password)) {
    errors.confirm_password = 'This field required';
  }
  if (!Validator.equals(data.password, data.confirm_password)) {
    errors.confirm_password = 'Password must Match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
