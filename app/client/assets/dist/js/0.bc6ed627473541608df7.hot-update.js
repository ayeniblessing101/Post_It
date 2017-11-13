webpackHotUpdate(0,{

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A middleware that ensure a user is authenticated to access certain routes
 * @param {object} ComposedComponent - ComposedComponent
 * @return {void} - void
 */
exports.default = function (ComposedComponent) {
  var Authenticate = function (_React$Component) {
    _inherits(Authenticate, _React$Component);

    function Authenticate() {
      _classCallCheck(this, Authenticate);

      return _possibleConstructorReturn(this, (Authenticate.__proto__ || Object.getPrototypeOf(Authenticate)).apply(this, arguments));
    }

    _createClass(Authenticate, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.props.isAuthenticated) {
          this.context.router.history.push('/groups');
        }
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps) {
        if (nextProps.isAuthenticated) {
          this.context.router.history.push('/groups');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, this.props);
      }
    }]);

    return Authenticate;
  }(_react2.default.Component);

  Authenticate.propTypes = {
    isAuthenticated: _propTypes2.default.bool.isRequired
  };

  Authenticate.contextTypes = {
    router: _propTypes2.default.object.isRequired
  };
  /**
   * maps the store state isAuthenticated to props
   * @param {*} state
   * @returns {void}
   */
  var mapStateToProps = function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(Authenticate);
};

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _LandingPage = __webpack_require__(564);

var _LandingPage2 = _interopRequireDefault(_LandingPage);

var _GroupsPage = __webpack_require__(554);

var _GroupsPage2 = _interopRequireDefault(_GroupsPage);

var _AddGroupPage = __webpack_require__(551);

var _AddGroupPage2 = _interopRequireDefault(_AddGroupPage);

var _AddUser = __webpack_require__(562);

var _AddUser2 = _interopRequireDefault(_AddUser);

var _MessagePage = __webpack_require__(560);

var _MessagePage2 = _interopRequireDefault(_MessagePage);

var _ResetPasswordPage = __webpack_require__(567);

var _ResetPasswordPage2 = _interopRequireDefault(_ResetPasswordPage);

var _requireAuth = __webpack_require__(580);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _isAuthenticated = __webpack_require__(1212);

var _isAuthenticated2 = _interopRequireDefault(_isAuthenticated);

var _UserPage = __webpack_require__(570);

var _UserPage2 = _interopRequireDefault(_UserPage);

var _NotFoundPage = __webpack_require__(548);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactRouter = __webpack_require__(60);

var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Routes = function Routes() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      Switch,
      null,
      _react2.default.createElement(Route, { exact: true, path: '/', component: (0, _isAuthenticated2.default)(_LandingPage2.default) }),
      _react2.default.createElement(Route, { path: '/user/password/verify', component: _ResetPasswordPage2.default }),
      _react2.default.createElement(Route, { path: '/groups', component: (0, _requireAuth2.default)(_GroupsPage2.default) }),
      _react2.default.createElement(Route, { path: '/group/:id', component: (0, _requireAuth2.default)(_MessagePage2.default) }),
      _react2.default.createElement(Route, { path: '/add-group', component: (0, _requireAuth2.default)(_AddGroupPage2.default) }),
      _react2.default.createElement(Route, { path: '/add-user', component: (0, _requireAuth2.default)(_AddUser2.default) }),
      _react2.default.createElement(Route, { path: '/user/search/', component: (0, _requireAuth2.default)(_UserPage2.default) }),
      _react2.default.createElement(Route, {
        render: function render() {
          return _react2.default.createElement(_NotFoundPage2.default, null);
        }
      })
    )
  );
};
exports.default = Routes;

/***/ })

})
//# sourceMappingURL=0.bc6ed627473541608df7.hot-update.js.map