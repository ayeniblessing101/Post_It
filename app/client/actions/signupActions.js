import axios from 'axios';

/**
 * Handles sigup Request.
 * @param {Object} userData - user id.
 * @returns {function} makes an async post request to signup endpoint.
 */
exports.userSignupRequest = (userData) => {
  return (dispatch) => {
    return axios.post('/api/v1/user/signup', userData);
  };
};

/**
 * Checks if a User exist.
 * @param {Object} userId - user id.
 *@returns {function} makes an async get to user exist endpoint.
 */
exports.isUserExists = (userId) => {
  return (dispatch) => {
    return axios.get(`/api/v1/user/signup/${userId}`);
  };
};
