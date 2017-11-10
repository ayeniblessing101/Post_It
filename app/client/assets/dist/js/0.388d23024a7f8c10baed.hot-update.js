webpackHotUpdate(0,{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _SignupForm = __webpack_require__(568);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

var _LoginForm = __webpack_require__(565);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SignupForm
 * @extends {React.Component}
 */
var LandingPage = function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage(props) {
    _classCallCheck(this, LandingPage);

    var _this = _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this, props));

    _this.state = {
      display: 'login'
    };
    _this.toggleForm = _this.toggleForm.bind(_this);
    return _this;
  }

  _createClass(LandingPage, [{
    key: 'toggleForm',
    value: function toggleForm(form) {
      this.setState({
        display: form
      });
    }
    /**
     * renders the signup form component
     * @returns {object} - signup component
     * @memberof SignupForm
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { classID: 'wrapper', className: 'login-register' },
          _react2.default.createElement(
            'div',
            { className: 'wrapper_cen' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col s12 m12 l6 welcome' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Welcome to the Biggest',
                  _react2.default.createElement('br', null),
                  'Social Network in the World'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We are the best and biggest Messaging Platform with 5 billion active users all around the world. Create account, create group add other users to your group and post messages'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col s12 m12 l6 reg_form' },
                _react2.default.createElement(
                  'div',
                  { className: 'reg_form_cen' },
                  this.state.display === 'login' ? _react2.default.createElement(_LoginForm2.default, {
                    toggleForm: this.toggleForm
                  }) : _react2.default.createElement(_SignupForm2.default, {
                    toggleForm: this.toggleForm
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LandingPage;
}(_react2.default.Component);

exports.default = LandingPage;

/***/ })

})
//# sourceMappingURL=0.388d23024a7f8c10baed.hot-update.js.map