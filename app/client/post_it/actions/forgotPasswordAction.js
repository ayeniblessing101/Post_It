import axios from 'axios';

/**
 * .
 * @param {string} email - email.
 * @returns {void}
 */
export function forgotPassword(email) {
  return dispatch => (
    axios.post('/api/password/forgot', email)
  );
}

/**
 * Check if Token matches with token in the database.
 * @param {string} token - token.
 * @param {string} email - email.
 * @returns {void}
 */
export function checkToken(token, email) {
  return dispatch => (
    axios.get('/api/password/token/check', {
      params: {
        token,
        email
      } })
  );
}

/**
 * Reset Password.
 * @param {string} newPassword - New Password.
 * @param {string} email - The author of the book.
 * @returns {void}
 */
export function resetPassword(newPassword, email) {
  return dispatch => (
    axios.post('/api/password/verify', { newPassword, email })
  );
}
