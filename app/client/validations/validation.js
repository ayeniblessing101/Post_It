import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import checkNum from '../utils/numberValidation';


module.exports = {
  /**
    * Checks if the input in Signup form is Valid
    * @param {Object} inputData - inputData.
    *
    * @returns {errors} - returns errors.
  */
  validateSignUpInput: (inputData) => {
    const errors = {};

    if (Validator.isEmpty(inputData.username)) {
      errors.username = 'This field required';
    }
    if (Validator.isEmpty(inputData.email)) {
      errors.email = 'This field required';
    }
    if (!checkNum(inputData.phoneNo)) {
      errors.phoneNo = 'This field required';
    }
    if (!Validator.isEmail(inputData.email)) {
      errors.email = 'Email is not valid';
    }
    if (Validator.isEmpty(inputData.password)) {
      errors.password = 'This field required';
    }
    if (Validator.isEmpty(inputData.confirm_password)) {
      errors.confirm_password = 'This field required';
    }
    if (!Validator.equals(inputData.password, inputData.confirm_password)) {
      errors.confirm_password = 'Password must Match';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  },
  /**
    * Checks if the input in Login form is Valid
    * @param {Object} inputData - inputData.
    *
    * @returns {errors} - returns errors.
  */
  validateLoginInput: (inputData) => {
    const errors = {};
    if (Validator.isEmpty(inputData.username)) {
      errors.username = 'This field is required';
    }
    if (Validator.isEmpty(inputData.password)) {
      errors.password = 'This field is required';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  },
  /**
    * Checks if the input in Add User form is Valid
    * @param {Object} inputData - inputData.
    *
    * @returns {errors} - returns errors.
  */
  validateAddUserInput: (inputData) => {
    const errors = {};
    if (Validator.isEmpty(inputData.username)) {
      errors.username = 'This field is required';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  },
  /**
    * Checks if the input Add Group in  form is Valid
    * @param {Object} inputData - inputData.
    *
    * @returns {errors} - returns errors.
  */
  validateAddGroupInput: (inputData) => {
    const errors = {};
    if (Validator.isEmpty(inputData.groupname)) {
      errors.groupname = 'This field is required';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  },
  /**
    * Checks if the inputs in Forgot Password form is Valid
    * @param {Object} inputData - inputData.
    *
    * @returns {errors} - returns errors.
  */
  validateForgotPasswordInput: (inputData) => {
    const errors = {};
    if (Validator.isEmpty(inputData.email)) {
      errors.email = 'This field is required';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  },

  /**
  * Checks if the inputs in Reset Password form is Valid
  * @param {Object} inputData - inputData.
  *
  * @returns {errors} - returns errors.
 */
  validateResetPasswordInput: (inputData) => {
    const errors = {};
    if (Validator.isEmpty(inputData.newPassword)) {
      errors.newPassword = 'This field is required';
    }
    if (Validator.isEmpty(inputData.confirmNewPassword)) {
      errors.confirmNewPassword = 'This field is required';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

};
