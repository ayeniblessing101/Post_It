webpackHotUpdate(0,{

/***/ 1212:
false,

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
function resetPassword(newPassword, email) {
  return function () {
    return _axios2.default.put('/api/v1/password/verify', { newPassword: newPassword, email: email });
  };
}

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
      _react2.default.createElement(Route, { exact: true, path: '/', component: _LandingPage2.default }),
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

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GroupCard;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders GroupCard component
 * @export
 * @param {any} group
 * @returns {object} - GroupCard component
 */
function GroupCard(_ref) {
  var group = _ref.group;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/group/' + group.id },
      _react2.default.createElement(
        'div',
        { className: 'col s12 m5 l3 small-cards' },
        _react2.default.createElement('br', null),
        _react2.default.createElement('img', {
          src: group.image,
          alt: 'avatar'
        }),
        _react2.default.createElement(
          'h5',
          null,
          _react2.default.createElement(
            'b',
            null,
            group.groupName
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/group/' + group.id, className: 'btn btn-primary' },
          'Enter Group'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      )
    )
  );
}

GroupCard.propTypes = {
  group: _propTypes2.default.object.isRequired
};

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _messageAction = __webpack_require__(547);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class MessageForm
 * @extends {React.Component}
 */
var MessageForm = function (_React$Component) {
  _inherits(MessageForm, _React$Component);

  /**
   * Creates an instance of MessageForm.
   * @param {any} props
   * @memberof MessageForm
   */
  function MessageForm(props) {
    _classCallCheck(this, MessageForm);

    var _this = _possibleConstructorReturn(this, (MessageForm.__proto__ || Object.getPrototypeOf(MessageForm)).call(this, props));

    _this.state = {
      messages: _this.props.messages,
      group: _this.props.group,
      groupId: _this.props.groupId,
      message: '',
      priority: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  /**
   * @param {any} event
   * @memberof MessageForm
   * @returns {void}
   */


  _createClass(MessageForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }

    /**
     * @param {any} event
     * @memberof MessageForm
     * @return {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var message = {
        message_body: this.state.message,
        priority_level: this.state.priority
      };
      this.props.postMessage(this.state.groupId, message).then(function () {
        _this2.setState({
          message: '',
          priority: ''
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getMessages(this.props.groupId);
      $(document).ready(function () {
        $('select').material_select();
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        messages: nextProps.messages,
        group: nextProps.group,
        grouId: nextProps.groudId
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var allMessages = void 0;
      var group = this.state.group;
      var messages = this.state.messages;

      var groupId = parseInt(this.props.groupId, 10);
      var groupTitle = 'No Group Found';

      group.map(function (currentGroup) {
        var id = currentGroup.id,
            groupName = currentGroup.groupName;

        if (id === groupId) {
          groupTitle = groupName;
        }
      });

      if (messages.length > 0) {
        allMessages = messages.map(function (message) {
          return _react2.default.createElement(
            'div',
            { key: message.id },
            _react2.default.createElement(
              'b',
              { className: 'senderName' },
              message.User.username
            ),
            _react2.default.createElement(
              'span',
              { className: 'right sentTime' },
              (0, _moment2.default)(message.createdAt, _moment2.default.ISO_8601).fromNow()
            ),
            _react2.default.createElement(
              'p',
              { key: message.id, className: 'messageBody' },
              message.message_body,
              _react2.default.createElement('span', {
                className: 'new badge ' + message.priority_level.toLowerCase(),
                'data-badge-caption': message.priority_level })
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement('br', null)
          );
        });
      } else {
        allMessages = _react2.default.createElement(
          'h6',
          null,
          'No messages to show'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m12 l6 message-cards' },
          _react2.default.createElement(
            'div',
            { className: 'message-cards-board' },
            _react2.default.createElement(
              'h5',
              { className: 'groupTitle' },
              groupTitle
            ),
            _react2.default.createElement(
              'div',
              { className: 'messages' },
              allMessages
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'message-cards-form' },
            _react2.default.createElement(
              'form',
              { onSubmit: this.handleSubmit, method: 'post' },
              _react2.default.createElement(
                'div',
                { className: 'input-field col s8' },
                _react2.default.createElement('textarea', {
                  placeholder: 'Write your message Here',
                  id: 'message',
                  type: 'text',
                  required: true,
                  name: 'message',
                  onChange: this.handleChange,
                  value: this.state.message,
                  className: 'materialize-textarea'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col s4 mySelect' },
                _react2.default.createElement(
                  'select',
                  {
                    className: 'browser-default',
                    required: true,
                    value: this.state.priority,
                    name: 'priority',
                    onChange: this.handleChange },
                  _react2.default.createElement(
                    'option',
                    { value: '', disabled: true },
                    'Select Priority'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'Normal' },
                    'Normal'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'Critical' },
                    'Critical'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'Urgent' },
                    'Urgent'
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'button',
                  { className: 'btn messageBtn', type: 'submit' },
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'send'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MessageForm;
}(_react2.default.Component);

MessageForm.propTypes = {
  postMessage: _propTypes2.default.func.isRequired,
  getMessages: _propTypes2.default.func.isRequired,
  groupId: _propTypes2.default.number.isRequired,
  messages: _propTypes2.default.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages,
    group: state.groups
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getMessages: _messageAction.getMessages, postMessage: _messageAction.postMessage })(MessageForm);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),

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
          isValid = _validateInput.isValid,
          email = _validateInput.email,
          addFlashMessage = _validateInput.addFlashMessage;

      if (!isValid) {
        this.setState({ errors: errors });
      }

      return isValid;
    }

    /**
     * @param {any} e
     * @memberof ForgetPasswordModal
     * @return {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
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
     * @param {any} e
     * @memberof ForgetPasswordModal
     * @return {void}
     */

  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
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

/***/ }),

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
            username: '',
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

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
          }, function (err) {
            return _this2.setState({
              errors: err.data.errors,
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
          confirmNewPassword = _state.confirmNewPassword,
          addFlashMessage = _state.addFlashMessage;

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

/***/ }),

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
            username: '',
            email: '',
            phone: '',
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

/***/ }),

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

var _reactRouterDom = __webpack_require__(60);

var _reactRedux = __webpack_require__(27);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _authenticationActions = __webpack_require__(129);

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
      var _this2 = this;

      $('.tooltipped').tooltip();
      $('.editButtons').click(function () {
        $(_this2).tooltip('close');
      });
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
                { to: '/', className: 'brand-logo' },
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
                { className: 'side-nav', id: 'nav_mobile' },
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
                      'Welcome ',
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
                      'data-activates': 'mobile_menu_escrow_accounts', 'data-beloworigin': 'true' },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons left' },
                      'group'
                    ),
                    'Menu',
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
                      className: 'tooltipped',
                      'data-position': 'top',
                      'data-tooltip': 'Logout',
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
                      'Welcome ',
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
                    'Menu',
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
                      className: 'tooltipped',
                      'data-position': 'top',
                      'data-tooltip': 'Logout',
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ })

})
//# sourceMappingURL=0.dc38d715b4801fd2fcfd.hot-update.js.map