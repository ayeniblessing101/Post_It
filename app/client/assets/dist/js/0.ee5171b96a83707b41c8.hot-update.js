webpackHotUpdate(0,{

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(27);

var _TextFieldGroup = __webpack_require__(96);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _signup = __webpack_require__(586);

var _signup2 = _interopRequireDefault(_signup);

var _authenticationActions = __webpack_require__(129);

var _flashMessageActions = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SignupForm
 * @extends {React.Component}
 */
var SignupForm = function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  function SignupForm(props) {
    _classCallCheck(this, SignupForm);

    var _this = _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));

    _this.state = {
      username: '',
      email: '',
      phoneNo: '',
      password: '',
      confirm_password: '',
      errors: {},
      isLoading: false,
      invalid: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  /**
   * Handle onChange event
   * @param {any} event
   * @memberof SignupForm
   * @return {void}
   */


  _createClass(SignupForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }

    /**
     * Checks if the form input(s) is valid
     * @memberof SignupForm
     * @return {isValid} - checks if the fields are not empty
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      var _validateInput = (0, _signup2.default)(this.state),
          errors = _validateInput.errors,
          isValid = _validateInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }

      return isValid;
    }

    /**
     * Handles submit event
     * @param {any} event
     * @memberof SignupForm
     * @return {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();

      if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.userSignupRequest(this.state).then(function () {
          _this2.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Login!'
          });
          _this2.context.router.history.push('/groups');
        }, function (_ref) {
          var data = _ref.data;
          return _this2.setState({
            errors: data,
            isLoading: false,
            password: '',
            confirm_password: ''
          });
        });
      }
    }
    /**
     * renders the signup form component
     * @returns {object} - signup component
     * @memberof SignupForm
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var errors = this.state.errors;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Register to PostIt'
        ),
        _react2.default.createElement(
          'form',
          { className: 'col s12', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: '' },
            _react2.default.createElement(_TextFieldGroup2.default, {
              error: errors.username,
              label: 'Username',
              onChange: this.handleChange,
              checkUserExits: this.checkUserExits,
              value: this.state.username,
              field: 'username',
              type: 'text'
            }),
            _react2.default.createElement(_TextFieldGroup2.default, {
              error: errors.email,
              label: 'Email',
              onChange: this.handleChange,
              checkUserExits: this.checkUserExits,
              value: this.state.email,
              field: 'email',
              type: 'text'
            }),
            _react2.default.createElement(_TextFieldGroup2.default, {
              error: errors.phone,
              label: 'Phone Number',
              onChange: this.handleChange,
              value: this.state.phoneNo,
              field: 'phoneNo',
              type: 'number'
            }),
            _react2.default.createElement(_TextFieldGroup2.default, {
              error: errors.password,
              label: 'Password',
              onChange: this.handleChange,
              value: this.state.password,
              field: 'password',
              type: 'password'
            }),
            _react2.default.createElement(_TextFieldGroup2.default, {
              error: errors.confirm_password,
              label: 'Confirm Password',
              onChange: this.handleChange,
              value: this.state.confirm_password,
              field: 'confirm_password',
              type: 'password'
            }),
            _react2.default.createElement(
              'div',
              { className: 'input-field col s12' },
              _react2.default.createElement(
                'button',
                {
                  disabled: this.state.isLoading || this.state.invalid,
                  className: 'btn waves-effect waves-light', type: 'submit',
                  name: 'action' },
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
        ),
        _react2.default.createElement(
          'p',
          null,
          'Have an account already?',
          _react2.default.createElement(
            'button',
            {
              className: 'blue-text signUp',
              onClick: function onClick() {
                return _this3.props.toggleForm('login');
              }
            },
            _react2.default.createElement(
              'b',
              null,
              'Login'
            )
          )
        )
      );
    }
  }]);

  return SignupForm;
}(_react2.default.Component);

SignupForm.propTypes = {
  userSignupRequest: _propTypes2.default.func.isRequired,
  addFlashMessage: _propTypes2.default.func.isRequired,
  toggleForm: _propTypes2.default.func.isRequired
};

SignupForm.contextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { userSignupRequest: _authenticationActions.userSignupRequest, addFlashMessage: _flashMessageActions.addFlashMessage })(SignupForm);

/***/ })

})
//# sourceMappingURL=0.ee5171b96a83707b41c8.hot-update.js.map