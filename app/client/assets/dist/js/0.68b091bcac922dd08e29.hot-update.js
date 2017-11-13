webpackHotUpdate(0,{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(60);

var _queryString = __webpack_require__(210);

var _queryString2 = _interopRequireDefault(_queryString);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(27);

var _TextFieldGroup = __webpack_require__(96);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _reset_password = __webpack_require__(585);

var _FlashMessagesList = __webpack_require__(130);

var _FlashMessagesList2 = _interopRequireDefault(_FlashMessagesList);

var _forgotPasswordActions = __webpack_require__(163);

var _flashMessageActions = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class ResetPasswordForm
 * @extends {React.Component}
 */
var ResetPasswordForm = function (_React$Component) {
  _inherits(ResetPasswordForm, _React$Component);

  /**
   * Creates an instance of ResetPasswordForm.
   * @param {any} props
   * @memberof ResetPasswordForm
   */
  function ResetPasswordForm(props) {
    _classCallCheck(this, ResetPasswordForm);

    var _this = _possibleConstructorReturn(this, (ResetPasswordForm.__proto__ || Object.getPrototypeOf(ResetPasswordForm)).call(this, props));

    _this.state = {
      newPassword: '',
      confirmNewPassword: '',
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  /**
   * @memberof ResetPasswordForm
   * @returns {isValid} - checks if the text field are not empty
   */


  _createClass(ResetPasswordForm, [{
    key: 'isValid',
    value: function isValid() {
      var _validateInput = (0, _reset_password.validateInput)(this.state),
          errors = _validateInput.errors,
          isValid = _validateInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }
      return isValid;
    }

    /**
     * @param {any} event
     * @memberof ResetPasswordForm
     * @returns {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      if (this.isValid()) {
        var query = _queryString2.default.parse(this.props.location.search);
        var email = query.email;
        this.setState({ errors: {} });
        if (this.state.newPassword === this.state.confirmNewPassword) {
          this.props.resetPassword(this.state.newPassword, email).then(function () {
            return _this2.context.router.history.push('/');
          }, function (_ref) {
            var data = _ref.data;

            console.log('errors', data.message);
            _this2.setState({
              errors: data.message,
              newPassword: '',
              confirmNewPassword: ''
            });
          });
        } else {
          this.props.addFlashMessage({
            type: 'error',
            text: 'Password does not Match'
          });
        }
      }
    }

    /**
     * @param {any} e
     * @memberof ResetPasswordForm
     * @return {void}
     */

  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }

    /**
     * @memberof ResetPasswordForm
     * @returns {object} - ResetPasswordForm Component
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          errors = _state.errors,
          newPassword = _state.newPassword,
          confirmNewPassword = _state.confirmNewPassword;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { classID: 'wrapper', className: 'resetPasswordForm' },
          _react2.default.createElement(
            'div',
            { className: 'wrapper_cen2' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col s12 m12 l12 reg_form' },
                _react2.default.createElement(
                  'div',
                  { className: 'reg_form_cen' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    'Reset Password'
                  ),
                  _react2.default.createElement(_FlashMessagesList2.default, null),
                  _react2.default.createElement(
                    'form',
                    { className: 'col s12', onSubmit: this.handleSubmit },
                    errors.form && _react2.default.createElement(
                      'div',
                      { className: 'alert alert-danger' },
                      errors.form
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: '' },
                      _react2.default.createElement(_TextFieldGroup2.default, {
                        error: errors.newPassword,
                        label: 'New Password',
                        field: 'newPassword',
                        onChange: this.handleChange,
                        value: newPassword,
                        type: 'password'
                      }),
                      _react2.default.createElement(_TextFieldGroup2.default, {
                        error: errors.confirmNewPassword,
                        label: 'Confirm New Password',
                        field: 'confirmNewPassword',
                        value: confirmNewPassword,
                        onChange: this.handleChange,
                        type: 'password'
                      }),
                      _react2.default.createElement(
                        'div',
                        { className: 'input-field col s12' },
                        _react2.default.createElement(
                          'button',
                          {
                            className: 'btn waves-effect waves-light',
                            type: 'submit', name: 'action' },
                          'Submit',
                          _react2.default.createElement(
                            'i',
                            { className: 'material-icons right' },
                            'send'
                          )
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null)
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ResetPasswordForm;
}(_react2.default.Component);

ResetPasswordForm.propTypes = {
  resetPassword: _propTypes2.default.func.isRequired,
  addFlashMessage: _propTypes2.default.func.isRequired
};

ResetPasswordForm.contextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { resetPassword: _forgotPasswordActions.resetPassword, addFlashMessage: _flashMessageActions.addFlashMessage })((0, _reactRouterDom.withRouter)(ResetPasswordForm));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ })

})
//# sourceMappingURL=0.68b091bcac922dd08e29.hot-update.js.map