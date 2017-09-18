import axios from 'axios';

/**
 * Handles sigup Request.
 * @param {Object} userData - user id.
 * @returns {void} .
 */
exports.userSignupRequest = (userData) => {
  return (dispatch) => {
    return axios.post('/api/user/signup', userData);
  };
};

/**
 * Checks if a User exist.
 * @param {Object} identifier - user id.
 *@returns {void} .
 */
exports.isUserExists = (identifier) => {
  return (dispatch) => {
    return axios.get(`/api/user/signup/${identifier}`);
  };
};
