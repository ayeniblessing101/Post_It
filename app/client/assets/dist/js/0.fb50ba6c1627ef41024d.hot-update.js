webpackHotUpdate(0,{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordEmail = resetPasswordEmail;
exports.checkToken = checkToken;
exports.resetPassword = resetPassword;

var _axios = __webpack_require__(92);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * dispatches an action to send token to reset password via email.
 * @param {string} email - email.
 *
 * @returns {function} - makes an async post request to forgotPassword endpoint
 */
function resetPasswordEmail(email) {
  return function () {
    return _axios2.default.post('/api/v1/password/forgot', email);
  };
}

/**
 * Check if Token matches with token in the database.
 * @param {string} token - token.
 * @param {string} email - email.
 *
 * @returns {function} - makes an async get request to checkToken endpoint
 */
function checkToken(token, email) {
  return function () {
    return _axios2.default.get('/api/v1/password/token/check', {
      params: {
        token: token,
        email: email
      } });
  };
}

/**
 * Dispatches an action to Reset User Password.
 * @param {string} newPassword - New Password.
 * @param {string} email - email.
 *
 * @returns {function} - makes an async post request to resetPassword endpoint
 */
function resetPassword(newPassword, confirmPassword, email) {
  return function () {
    return _axios2.default.put('/api/v1/password/verify', { newPassword: newPassword, confirmPassword: confirmPassword, email: email });
  };
}

/***/ })

})
//# sourceMappingURL=0.fb50ba6c1627ef41024d.hot-update.js.map