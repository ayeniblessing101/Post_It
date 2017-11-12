webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(66);

var _reactRedux = __webpack_require__(27);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _authenticationActions = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class Header
 * @extends {React.Component}
 */
var Header = exports.Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  /**
   * Creates an instance of Header.
   * @param {any} props
   * @memberof Header
   */
  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      searchParam: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.dropdown-button').dropdown();
      $('.button-collapse').sideNav();
    }

    /**
     * redirects to search result page
     * @memberof Header
     * @return {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.context.router.history.push('/user/search?q=' + this.state.searchParam);
    }

    /**
     * @param {any} event
     * @memberof Header
     * @return {void}
     */

  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }

    /**
     * @param {any} event
     * @memberof Header
     * @return {void}
     */

  }, {
    key: 'logout',
    value: function logout(event) {
      event.preventDefault();
      this.props.logout(this.state);
    }

    /**
     * Renders the header component
     * @returns {object} - header component
     * @memberof Header
     */

  }, {
    key: 'render',
    value: function render() {
      var _props$auth = this.props.auth,
          isAuthenticated = _props$auth.isAuthenticated,
          user = _props$auth.user;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'navbar-fixed' },
          isAuthenticated ? _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              'div',
              { className: 'nav-wrapper' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/groups', className: 'brand-logo' },
                'PostIt'
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: '#',
                  'data-activates': 'mobile-demo',
                  className: 'button-collapse' },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons' },
                  'menu'
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'side-nav', id: 'mobile-demo' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      to: '#',
                      'data-activates': 'dropdown1' },
                    _react2.default.createElement(
                      'span',
                      { className: 'welcome' },
                      'Welcome'
                    ),
                    _react2.default.createElement(
                      'span',
                      {
                        className: 'authUser' },
                      isAuthenticated ? user.username : ''
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      to: '#', className: 'dropdown-button',
                      'data-activates': 'dropdown1' },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons left' },
                      'group'
                    ),
                    'Groups',
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons right' },
                      'arrow_drop_down'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      to: '#',
                      onClick: this.logout.bind(this) },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons' },
                      'power_settings_new'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'ul',
                {
                  classID: 'nav-mobile',
                  className: 'right hide-on-med-and-down' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'form',
                    { id: 'searchForm', onSubmit: this.handleSubmit },
                    _react2.default.createElement('input', {
                      type: 'text',
                      name: 'searchParam',
                      placeholder: 'Search for Friends',
                      id: 'searchBar',
                      value: this.state.searchParam,
                      onChange: this.handleChange
                    })
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'authUser' },
                    _react2.default.createElement(
                      'span',
                      { className: 'welcome' },
                      'Welcome'
                    ),
                    _react2.default.createElement(
                      'span',
                      {
                        className: 'authUser' },
                      isAuthenticated ? user.username : ''
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'ul',
                    { id: 'dropdown1', className: 'dropdown-content' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/groups' },
                        _react2.default.createElement('i', {
                          className: 'fa fa-eye',
                          'aria-hidden': 'true' }),
                        'View all Groups'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/add-group' },
                        _react2.default.createElement('i', {
                          className: 'fa fa-plus-circle',
                          'aria-hidden': 'true' }),
                        'Add Groups'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      to: '#', className: 'dropdown-button',
                      'data-activates': 'dropdown1' },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons left' },
                      'group'
                    ),
                    'Groups',
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons right' },
                      'arrow_drop_down'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      to: '#',
                      id: 'logout',
                      onClick: this.logout.bind(this) },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons' },
                      'power_settings_new'
                    )
                  )
                )
              )
            )
          ) : _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'brand-logo' },
              'PostIt'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.propTypes = {
  auth: _propTypes2.default.object.isRequired,
  logout: _propTypes2.default.func.isRequired
};

Header.contextTypes = {
  router: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logout: _authenticationActions.logout })(Header);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ })

})
//# sourceMappingURL=0.af08029b3d9340f7302a.hot-update.js.map