import axios from 'axios';

/**
 * dispatches an action to send token to reset password via email.
 * @param {string} email - email.
 *
 * @returns {function} - makes an async post request to forgotPassword endpoint
 */
export function resetPasswordEmail(email) {
  return () => (
    axios.post('/api/v1/password/forgot', email)
  );
}

/**
 * Check if Token matches with token in the database.
 * @param {string} token - token.
 * @param {string} email - email.
 *
 * @returns {function} - makes an async get request to checkToken endpoint
 */
export function checkToken(token, email) {
  return () => (
    axios.get('/api/v1/password/token/check', {
      params: {
        token,
        email
      } })
  );
}

/**
 * Dispatches an action to Reset User Password.
 * @param {string} newPassword - New Password.
 * @param {string} email - email.
 *
 * @returns {function} - makes an async post request to resetPassword endpoint
 */
export function resetPassword(newPassword, email) {
  return () => (
    axios.post('/api/password/verify', { newPassword, email })
  );
}
