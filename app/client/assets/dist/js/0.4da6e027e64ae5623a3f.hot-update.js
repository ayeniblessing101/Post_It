webpackHotUpdate(0,{

/***/ 563:
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

var _reactMaterialize = __webpack_require__(483);

var _reactRedux = __webpack_require__(27);

var _TextFieldGroup = __webpack_require__(96);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _forgotpassword = __webpack_require__(583);

var _forgotPasswordActions = __webpack_require__(163);

var _flashMessageActions = __webpack_require__(93);

var _FlashMessagesList = __webpack_require__(130);

var _FlashMessagesList2 = _interopRequireDefault(_FlashMessagesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class ForgetPasswordModal
 * @extends {React.Component}
 */
var ForgetPasswordModal = function (_React$Component) {
  _inherits(ForgetPasswordModal, _React$Component);

  /**
   * Creates an instance of ForgetPasswordModal.
   * @param {any} props
   * @memberof ForgetPasswordModal
   */
  function ForgetPasswordModal(props) {
    _classCallCheck(this, ForgetPasswordModal);

    var _this = _possibleConstructorReturn(this, (ForgetPasswordModal.__proto__ || Object.getPrototypeOf(ForgetPasswordModal)).call(this, props));

    _this.state = {
      email: '',
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  /**
   * @returns {isValid} - Check the form input is valid
   * @memberof ForgetPasswordModal
   */


  _createClass(ForgetPasswordModal, [{
    key: 'isValid',
    value: function isValid() {
      var _validateInput = (0, _forgotpassword.validateInput)(this.state),
          errors = _validateInput.errors,
          isValid = _validateInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }

      return isValid;
    }

    /**
     * @param {any} event
     * @memberof ForgetPasswordModal
     * @return {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({
        email: ''
      });
      if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.resetPasswordEmail(this.state).then(function () {
          _this2.props.addFlashMessage({
            type: 'success',
            text: 'Please check your email and follow the instruction'
          });
        }, function () {
          _this2.props.addFlashMessage({
            type: 'error',
            text: 'Incorrect email'
          });
        });
      }
    }

    /**
     * @param {any} event
     * @memberof ForgetPasswordModal
     * @return {void}
     */

  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }

    /**
     * @returns {object} - Forget Password modal component
     * @memberof ForgetPasswordModal
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          errors = _state.errors,
          email = _state.email;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactMaterialize.Modal,
          {
            header: 'Recover Password',
            trigger: _react2.default.createElement(
              'p',
              { className: 'forgotPassword' },
              'Forgot Password?'
            ) },
          _react2.default.createElement(_FlashMessagesList2.default, null),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            errors.form && _react2.default.createElement(
              'div',
              { className: 'alert alert-danger' },
              errors.form
            ),
            _react2.default.createElement(_TextFieldGroup2.default, {
              label: 'Email',
              field: 'email',
              onChange: this.handleChange,
              type: 'text',
              value: email
            }),
            _react2.default.createElement(
              _reactMaterialize.Button,
              {
                className: 'btn waves-effect waves-light',
                type: 'submit'
              },
              'Reset'
            )
          )
        )
      );
    }
  }]);

  return ForgetPasswordModal;
}(_react2.default.Component);

ForgetPasswordModal.propTypes = {
  resetPasswordEmail: _propTypes2.default.func.isRequired,
  addFlashMessage: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { resetPasswordEmail: _forgotPasswordActions.resetPasswordEmail, addFlashMessage: _flashMessageActions.addFlashMessage })(ForgetPasswordModal);

/***/ })

})
//# sourceMappingURL=0.4da6e027e64ae5623a3f.hot-update.js.map