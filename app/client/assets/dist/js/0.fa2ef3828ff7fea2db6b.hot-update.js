webpackHotUpdate(0,{

/***/ 565:
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

var _ForgetPasswordModal = __webpack_require__(563);

var _ForgetPasswordModal2 = _interopRequireDefault(_ForgetPasswordModal);

var _authenticationActions = __webpack_require__(129);

var _login = __webpack_require__(584);

var _login2 = _interopRequireDefault(_login);

var _FlashMessagesList = __webpack_require__(130);

var _FlashMessagesList2 = _interopRequireDefault(_FlashMessagesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class LoginForm
 * @extends {React.Component}
 */
var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.state = {
      username: '',
      password: '',
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  /**
   * @returns {isValid} - checks if the fields are not empty
   * @memberof LoginForm
   */


  _createClass(LoginForm, [{
    key: 'isValid',
    value: function isValid() {
      var _validateInput = (0, _login2.default)(this.state),
          errors = _validateInput.errors,
          isValid = _validateInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }
      return isValid;
    }

    /**
     * @param {any} event
     * @memberof LoginForm
     * @returns {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.login(this.state).then(function () {
          return _this2.context.router.history.push('/groups');
        }, function (err) {
          return _this2.setState({
            errors: err.data.errors,
            password: ''
          });
        });
      }
    }

    /**
     * @param {any} event
     * @memberof LoginForm
     * @returns {void}
     */

  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }

    /**
     * @returns {object} - LoginForm component
     * @memberof LoginForm
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          errors = _state.errors,
          username = _state.username,
          password = _state.password;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Login to PostIt'
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
              error: errors.username,
              label: 'Username',
              onChange: this.handleChange,
              value: username,
              field: 'username',
              type: 'text'
            }),
            _react2.default.createElement(_TextFieldGroup2.default, {
              error: errors.password,
              label: 'Password',
              onChange: this.handleChange,
              value: password,
              field: 'password',
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
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col s6' },
            _react2.default.createElement(_ForgetPasswordModal2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col s6' },
            _react2.default.createElement(
              'p',
              null,
              'Do not have an account?',
              _react2.default.createElement(
                'button',
                {
                  className: 'blue-text signUp',
                  onClick: function onClick() {
                    return _this3.props.toggleForm('signup');
                  } },
                _react2.default.createElement(
                  'b',
                  null,
                  'Sign Up'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

LoginForm.propTypes = {
  login: _propTypes2.default.func.isRequired,
  toggleForm: _propTypes2.default.func.isRequired
};

LoginForm.contextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { login: _authenticationActions.login })(LoginForm);

/***/ })

})
//# sourceMappingURL=0.fa2ef3828ff7fea2db6b.hot-update.js.map