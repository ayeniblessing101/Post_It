webpackHotUpdate(0,{

/***/ 111:
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

var _FlashMessage = __webpack_require__(562);

var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

var _flashMessageActions = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlashMessagesList = function (_React$Component) {
  _inherits(FlashMessagesList, _React$Component);

  function FlashMessagesList() {
    _classCallCheck(this, FlashMessagesList);

    return _possibleConstructorReturn(this, (FlashMessagesList.__proto__ || Object.getPrototypeOf(FlashMessagesList)).apply(this, arguments));
  }

  _createClass(FlashMessagesList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = this.props.messages.map(function (message) {
        return _react2.default.createElement(_FlashMessage2.default, {
          key: message.id,
          message: message,
          deleteFlashMessage: _this2.props.deleteFlashMessage
        });
      });
      return _react2.default.createElement(
        'div',
        null,
        messages
      );
    }
  }]);

  return FlashMessagesList;
}(_react2.default.Component);

FlashMessagesList.propTypes = {
  messages: _propTypes2.default.array.isRequired,
  deleteFlashMessage: _propTypes2.default.func.isRequired
};

/**
 * takes a state in the store (messages) and passes it to the component as props
 *
 * @param {object} state
 * @returns
 */
function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { deleteFlashMessage: _flashMessageActions.deleteFlashMessage })(FlashMessagesList);

/***/ }),

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(1135);
var isEmpty = __webpack_require__(207);

exports.validateInput = function (data) {
  var errors = {};

  if (Validator.isEmpty(data.groupname)) {
    errors.groupname = 'This field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};

/***/ }),

/***/ 1194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(1135);
var isEmpty = __webpack_require__(207);

exports.validateInput = function (data) {
  var errors = {};
  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};

/***/ }),

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(1135);
var isEmpty = __webpack_require__(207);

exports.validateInput = function (data) {
  var errors = {};
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};

/***/ }),

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateInput;

var _validator = __webpack_require__(1135);

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = __webpack_require__(207);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateInput(data) {
  var errors = {};

  if (_validator2.default.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  if (_validator2.default.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
}

/***/ }),

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(1135);
var isEmpty = __webpack_require__(207);

exports.validateInput = function (data) {
  var errors = {};
  if (Validator.isEmpty(data.newPassword)) {
    errors.newPassword = 'This field is required';
  }
  if (Validator.isEmpty(data.confirmNewPassword)) {
    errors.confirmNewPassword = 'This field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};

/***/ }),

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = __webpack_require__(1135);

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = __webpack_require__(207);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _numberValidation = __webpack_require__(580);

var _numberValidation2 = _interopRequireDefault(_numberValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
  var errors = {};

  if (_validator2.default.isEmpty(data.username)) {
    errors.username = 'This field required';
  }
  if (_validator2.default.isEmpty(data.email)) {
    errors.email = 'This field required';
  }
  if (!(0, _numberValidation2.default)(data.phoneNo)) {
    errors.phoneNo = 'This field required';
  }
  if (!_validator2.default.isEmail(data.email)) {
    errors.email = 'Email is not valid';
  }
  if (_validator2.default.isEmpty(data.password)) {
    errors.password = 'This field required';
  }
  if (_validator2.default.isEmpty(data.confirm_password)) {
    errors.confirm_password = 'This field required';
  }
  if (!_validator2.default.equals(data.password, data.confirm_password)) {
    errors.confirm_password = 'Password must Match';
  }
  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(92);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setAuthorizationToken = function setAuthorizationToken(token) {
  if (token) {
    _axios2.default.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    delete _axios2.default.defaults.headers.common['Authorization'];
  }
};

exports.default = setAuthorizationToken;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_FLASH_MESSAGE = exports.ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
var DELETE_FLASH_MESSAGE = exports.DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';
var GET_CURRENT_AUTHENTICATED_USER = exports.GET_CURRENT_AUTHENTICATED_USER = 'GET_CURRENT_AUTHENTICATED_USER';
var GET_GROUPS = exports.GET_GROUPS = 'GET_GROUPS';
var ADD_USER_TO_GROUP = exports.ADD_USER_TO_GROUP = 'ADD_USER_TO_GROUP';
var POST_MESSAGE = exports.POST_MESSAGE = 'POST_MESSAGE';
var GET_MESSAGES = exports.GET_MESSAGES = 'GET_MESSAGES';
var GET_GROUP_USERS = exports.GET_GROUP_USERS = 'GET_GROUP_USERS';
var UPDATE_READ_STATUS = exports.UPDATE_READ_STATUS = 'UPDATE_READ_STATUS';
var GET_ALL_USERS = exports.GET_ALL_USERS = 'GET_ALL_USERS';

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUsersAction;

var _axios = __webpack_require__(92);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addUsersToReduxState = function addUsersToReduxState(users) {
  return {
    type: _types.GET_ALL_USERS,
    users: users
  };
};

/**
 * @function getUsers
 * @param {string} searchParams - search parameters
 * @param {int} offset - offset
 * @param {int} limit - limit
 * @return {function} action payload data and action type
 */
function getUsersAction(searchParams) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

  return function (dispatch) {
    return _axios2.default.get('/api/v1/user/search', {
      params: {
        q: searchParams,
        offset: offset,
        limit: limit
      }
    }).then(function (response) {
      dispatch(addUsersToReduxState(response.data));
    });
  };
}

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllMessages = exports.postMessageStatus = undefined;
exports.postMessage = postMessage;
exports.getMessages = getMessages;

var _axios = __webpack_require__(92);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * post message status
 * @param {any} message
 * @return {object} -action payload data and action type
 */
var postMessageStatus = exports.postMessageStatus = function postMessageStatus(message) {
  return {
    type: _types.POST_MESSAGE,
    message: message
  };
};

/**
 * action to fetch all messages
 * @param {any} messages
 * @return {object} - action payload data and action type
 */
var getAllMessages = exports.getAllMessages = function getAllMessages(messages) {
  return {
    type: _types.GET_MESSAGES,
    messages: messages
  };
};

/**
 * Post a message.
 * @param {integer} groupId - groupdId.
 * @param {string} message - groupdId.
 *
 *@returns {function} - dispatches an action to post message.
 */
function postMessage(groupId, message) {
  return function (dispatch) {
    return _axios2.default.post('/api/v1/group/' + groupId + '/message', message).then(function (_ref) {
      var data = _ref.data;

      dispatch(postMessageStatus(data.data));
    });
  };
}

/**
 * Fetch all Messages.
 * @param {Integer} groupId - groupdId.
 *
 *@returns {function} - dispatch an action to get all messages to the store.
 */
function getMessages(groupId) {
  return function (dispatch) {
    return _axios2.default.get('/api/v1/group/' + groupId + '/messages').then(function (_ref2) {
      var data = _ref2.data;

      dispatch(getAllMessages(data.messages));
    });
  };
}

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddGroupForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(27);

var _TextFieldGroup = __webpack_require__(95);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _groupActions = __webpack_require__(93);

var _addgroup = __webpack_require__(1193);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class AddGroupForm
 * @extends {React.Component}
 */
var AddGroupForm = exports.AddGroupForm = function (_React$Component) {
  _inherits(AddGroupForm, _React$Component);

  /**
   * Creates an instance of AddGroupForm.
   * @param {any} props
   * @memberof AddGroupForm
   */
  function AddGroupForm(props) {
    _classCallCheck(this, AddGroupForm);

    var _this = _possibleConstructorReturn(this, (AddGroupForm.__proto__ || Object.getPrototypeOf(AddGroupForm)).call(this, props));

    _this.state = {
      groupname: '',
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(AddGroupForm, [{
    key: 'isValid',
    value: function isValid() {
      var _validateInput = (0, _addgroup.validateInput)(this.state),
          errors = _validateInput.errors,
          isValid = _validateInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }

      return isValid;
    }

    /**
     * @param {any} event
     * @memberof AddGroupForm
     * @return {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.createGroup(this.state).then(function () {
          _this2.context.router.history.push('/groups');
        }, this.setState({
          groupname: '',
          errors: {}
        }));
      }
    }

    /**
     * @param {any} event
     * @memberof AddGroupForm
     * @return {void}
     */

  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }

    /**
     * Render AddGroup Form component
     * @returns {object} Add group form component
     * @memberof AddGroupForm
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          errors = _state.errors,
          groupname = _state.groupname;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m10 l10 col-md-10' },
          _react2.default.createElement(
            'div',
            { className: 'mycontainer' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement('div', { className: 'col s12 m4 l2' }),
              _react2.default.createElement(
                'div',
                { className: 'col s12 m4 l8 large-cards' },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Add Group'
                ),
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit },
                  errors.form && _react2.default.createElement(
                    'div',
                    {
                      className: 'alert alert-danger' },
                    errors.form
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: '' },
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      error: errors.groupname,
                      label: 'Group Name',
                      onChange: this.handleChange,
                      value: groupname,
                      field: 'groupname',
                      type: 'text'
                    }),
                    _react2.default.createElement(
                      'div',
                      { className: 'input-field col s12' },
                      _react2.default.createElement(
                        'button',
                        {
                          className: 'btn waves-effect waves-light',
                          type: 'submit' },
                        'Create'
                      ),
                      _react2.default.createElement('br', null),
                      _react2.default.createElement('br', null)
                    )
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null)
                )
              ),
              _react2.default.createElement('div', { className: 'col s12 m4 l2' })
            )
          )
        )
      );
    }
  }]);

  return AddGroupForm;
}(_react2.default.Component);

AddGroupForm.propTypes = {
  createGroup: _propTypes2.default.func.isRequired
};

AddGroupForm.contextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { createGroup: _groupActions.createGroup })(AddGroupForm);

/***/ }),

/***/ 553:
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

var avatar1 = __webpack_require__(1119);

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
          src: avatar1,
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

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupCard = __webpack_require__(553);

var _GroupCard2 = _interopRequireDefault(_GroupCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = __webpack_require__(207);

var GroupsList = function GroupsList(_ref) {
  var groups = _ref.groups;

  var emptyMessage = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      { className: 'emptyMessage' },
      'No Groups'
    )
  );
  var groupsList = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { className: 'col s12 m1 l1' }),
    _react2.default.createElement(
      'div',
      { id: 'groupsList', className: 'col s12 m11 l11 col-md-10 no-float' },
      _react2.default.createElement(
        'div',
        { className: 'mycontainer' },
        _react2.default.createElement(
          'div',
          { className: 'row ' },
          _react2.default.createElement(
            'h4',
            null,
            'All Groups'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'mycontainer' },
            _react2.default.createElement(
              'div',
              { className: 'row ' },
              groups.map(function (group, i) {
                return _react2.default.createElement(_GroupCard2.default, { group: group, key: i });
              })
            )
          )
        )
      )
    )
  );

  return isEmpty(groups) ? emptyMessage : groupsList;
};

GroupsList.propTypes = {
  groups: _propTypes2.default.array.isRequired
};

exports.default = GroupsList;

/***/ }),

/***/ 555:
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

var _GroupsList = __webpack_require__(554);

var _GroupsList2 = _interopRequireDefault(_GroupsList);

var _Header = __webpack_require__(94);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(110);

var _Footer2 = _interopRequireDefault(_Footer);

var _groupActions = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * renders groups page compoent
 * @class GroupsPage
 * @extends {React.Component}
 */
var GroupsPage = function (_React$Component) {
  _inherits(GroupsPage, _React$Component);

  /**
   * Creates an instance of GroupsPage.
   * @memberof GroupsPage
   */
  function GroupsPage() {
    _classCallCheck(this, GroupsPage);

    var _this = _possibleConstructorReturn(this, (GroupsPage.__proto__ || Object.getPrototypeOf(GroupsPage)).call(this));

    _this.state = {
      groups: []
    };
    return _this;
  }
  /**
   * @memberof GroupsPage
   * @return {void}
   */


  _createClass(GroupsPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchGroups();
    }

    /**
     * @param {any} nextProps
     * @memberof GroupsPage
     * @return {void}
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        groups: nextProps.groups
      });
    }

    /**
     * @returns {object} groupsPage Component
     * @memberof GroupsPage
     */

  }, {
    key: 'render',
    value: function render() {
      var groups = this.state.groups;


      return _react2.default.createElement(
        'div',
        { id: 'groupsPage' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'mycontainer' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_GroupsList2.default, { groups: groups })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return GroupsPage;
}(_react2.default.Component);

// as props is introduced to this component its documented with propTypes


GroupsPage.propTypes = {
  fetchGroups: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groups
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchGroups: _groupActions.fetchGroups })(GroupsPage);

/***/ }),

/***/ 556:
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

var _reactMaterialize = __webpack_require__(484);

var _reactRedux = __webpack_require__(27);

var _TextFieldGroup = __webpack_require__(95);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _adduser = __webpack_require__(1194);

var _flashMessageActions = __webpack_require__(73);

var _groupActions = __webpack_require__(93);

var _FlashMessagesList = __webpack_require__(111);

var _FlashMessagesList2 = _interopRequireDefault(_FlashMessagesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class AddUserModal
 * @extends {React.Component}
 */
var AddUserModal = function (_React$Component) {
  _inherits(AddUserModal, _React$Component);

  /**
   * Creates an instance of AddUserModal.
   * @param {any} props
   * @memberof AddUserModal
   */
  function AddUserModal(props) {
    _classCallCheck(this, AddUserModal);

    var _this = _possibleConstructorReturn(this, (AddUserModal.__proto__ || Object.getPrototypeOf(AddUserModal)).call(this, props));

    _this.state = {
      username: '',
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  /**
   * Checks if form input(s) is valid
   * @returns {isValid} - checks if form input is valid
   * @memberof AddUserModal
   */


  _createClass(AddUserModal, [{
    key: 'isValid',
    value: function isValid() {
      var _validateInput = (0, _adduser.validateInput)(this.state),
          errors = _validateInput.errors,
          isValid = _validateInput.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }

      return isValid;
    }

    /**
     * Handles submit request
     * @param {any} event
     * @memberof AddUserModal
     * @returns {void}
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var groupId = this.props.groupId;
      if (this.isValid()) {
        this.setState({ errors: {} });
        this.props.addUserToGroup(groupId, {
          username: this.state.username
        }).then(function (res) {
          if (res === true) {
            _this2.props.addFlashMessage({
              type: 'success',
              text: 'User has been add to Group Successfully'
            });
            _this2.props.fetchGroupUsers(groupId);
          } else {
            _this2.props.addFlashMessage({
              type: 'error',
              text: res
            });
          }
        });
      }
      this.setState({
        username: '',
        errors: {}
      });
    }

    /**
     * Handles onChange event
     * @param {any} event
     * @memberof AddUserModal
     * @return {void}
     */

  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }

    /**
     * @memberof AddUserModal
     * @returns {object} - AddUserModal Component
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          errors = _state.errors,
          username = _state.username;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactMaterialize.Modal,
          {
            header: 'Add User to Group',
            trigger: _react2.default.createElement(
              _reactMaterialize.Button,
              { className: 'add_user' },
              'Add User'
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
              error: errors.username,
              label: 'Username',
              onChange: this.handleChange,
              value: username,
              field: 'username',
              type: 'text'
            }),
            _react2.default.createElement(
              _reactMaterialize.Button,
              {
                className: 'btn waves-effect waves-light',
                type: 'submit'
              },
              'Add'
            )
          )
        )
      );
    }
  }]);

  return AddUserModal;
}(_react2.default.Component);

AddUserModal.propTypes = {
  addUserToGroup: _propTypes2.default.func.isRequired,
  fetchGroupUsers: _propTypes2.default.func.isRequired,
  addFlashMessage: _propTypes2.default.func.isRequired,
  groupId: _propTypes2.default.number.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { addFlashMessage: _flashMessageActions.addFlashMessage, fetchGroupUsers: _groupActions.fetchGroupUsers })(AddUserModal);

/***/ }),

/***/ 557:
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

var _reactRouterDom = __webpack_require__(60);

var _reactRedux = __webpack_require__(27);

var _groupActions = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class AllGroups
 * @extends {React.Component}
 */
var AllGroups = function (_React$Component) {
  _inherits(AllGroups, _React$Component);

  /**
   * Creates an instance of AllGroups.
   * @param {any} props
   * @memberof AllGroups
   */
  function AllGroups(props) {
    _classCallCheck(this, AllGroups);

    var _this = _possibleConstructorReturn(this, (AllGroups.__proto__ || Object.getPrototypeOf(AllGroups)).call(this, props));

    _this.state = {
      groups: _this.props.groups
    };
    return _this;
  }

  /**
   * @memberof AllGroups
   * @return {void}
   */


  _createClass(AllGroups, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchGroups();
    }

    /**
     * @param {any} nextProps
     * @memberof AllGroups
     * @return {void}
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        groups: nextProps.groups,
        messages: nextProps.messages
      });
    }
    /**
     * Renders the AllGroup Component
     * @memberof AllGroups
     * @returns {object} - AllGroups Component
     */

  }, {
    key: 'render',
    value: function render() {
      var groups = this.state.groups;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m12 l3 ' },
          _react2.default.createElement(
            'ul',
            {
              className: 'collapsible allMessageCard',
              'data-collapsible': 'accordion'
            },
            groups.map(function (group) {
              return _react2.default.createElement(
                'li',
                { key: group.id },
                _react2.default.createElement(
                  'div',
                  { className: 'collapsible-header' },
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'filter_drama'
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/group/' + group.id, className: 'groupNames' },
                    group.groupName
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return AllGroups;
}(_react2.default.Component);

AllGroups.propTypes = {
  groups: _propTypes2.default.array.isRequired,
  fetchGroups: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groups,
    messages: state.messages
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchGroups: _groupActions.fetchGroups })(AllGroups);

/***/ }),

/***/ 558:
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

var _reactRouterDom = __webpack_require__(60);

var _reactRedux = __webpack_require__(27);

var _groupActions = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllUsers = function (_Component) {
  _inherits(AllUsers, _Component);

  function AllUsers() {
    _classCallCheck(this, AllUsers);

    return _possibleConstructorReturn(this, (AllUsers.__proto__ || Object.getPrototypeOf(AllUsers)).apply(this, arguments));
  }

  _createClass(AllUsers, [{
    key: 'componentWillMount',

    /**
     * @memberof AllUsers
     * @return {void}
     */
    value: function componentWillMount() {
      this.props.fetchGroupUsers(this.props.groupId);
    }
  }, {
    key: 'render',
    value: function render() {
      var groupUsers = this.props.groupUsers;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m12 l3 ' },
          _react2.default.createElement(
            'ul',
            {
              className: 'collapsible allMessageCard',
              'data-collapsible': 'accordion' },
            groupUsers.map(function (groupUser) {
              return _react2.default.createElement(
                'li',
                { key: groupUser.id },
                _react2.default.createElement(
                  'div',
                  { className: 'collapsible-header' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      to: '#',
                      className: 'userNames' },
                    groupUser.username
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return AllUsers;
}(_react.Component);

AllUsers.propTypes = {
  fetchGroupUsers: _propTypes2.default.func.isRequired,
  groupUsers: _propTypes2.default.array.isRequired,
  groupId: _propTypes2.default.number.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    groupUsers: state.groupUsers
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchGroupUsers: _groupActions.fetchGroupUsers })(AllUsers);

/***/ }),

/***/ 559:
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

var _AddUserModal = __webpack_require__(556);

var _AddUserModal2 = _interopRequireDefault(_AddUserModal);

var _MessageForm = __webpack_require__(560);

var _MessageForm2 = _interopRequireDefault(_MessageForm);

var _AllGroups = __webpack_require__(557);

var _AllGroups2 = _interopRequireDefault(_AllGroups);

var _AllUsers = __webpack_require__(558);

var _AllUsers2 = _interopRequireDefault(_AllUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class MessageBoard
 * @extends {React.Component}
 */
var MessageBoard = function (_React$Component) {
  _inherits(MessageBoard, _React$Component);

  /**
   * Creates an instance of MessageBoard.
   * @param {any} props
   * @memberof MessageBoard
   */
  function MessageBoard(props) {
    _classCallCheck(this, MessageBoard);

    var _this = _possibleConstructorReturn(this, (MessageBoard.__proto__ || Object.getPrototypeOf(MessageBoard)).call(this, props));

    _this.state = {
      groups: _this.props.groups
    };
    return _this;
  }

  /**
   * @param {any} nextProps
   * @memberof MessageBoard
   * @return {void}
   */


  _createClass(MessageBoard, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        groups: nextProps.groups
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var groups = this.props.groups;
      var selectedGroupId = this.props.selectedGroupId;
      var addUserToGroup = this.props.addUserToGroup;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m12 l12 col-md-10' },
          _react2.default.createElement(
            'div',
            { id: 'messageBoard', className: 'mycontainer' },
            _react2.default.createElement(_AddUserModal2.default, {
              addUserToGroup: addUserToGroup,
              groupId: selectedGroupId
              /* statusMessage={statusMessage} */
            }),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_AllGroups2.default, {
                groups: this.props.groups
              }),
              _react2.default.createElement(_MessageForm2.default, {
                groupId: selectedGroupId
              }),
              _react2.default.createElement(_AllUsers2.default, { groupId: selectedGroupId })
            )
          )
        )
      );
    }
  }]);

  return MessageBoard;
}(_react2.default.Component);

MessageBoard.propTypes = {
  addUserToGroup: _propTypes2.default.func.isRequired,
  groups: _propTypes2.default.array.isRequired,
  selectedGroupId: _propTypes2.default.number.isRequired
};

exports.default = (0, _reactRedux.connect)(null)(MessageBoard);

/***/ }),

/***/ 560:
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

var _reactRouterDom = __webpack_require__(60);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _messageAction = __webpack_require__(548);

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
      var _this3 = this;

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
              { className: 'right' },
              (0, _moment2.default)(message.createdAt, _moment2.default.ISO_8601).fromNow()
            ),
            _react2.default.createElement(
              'p',
              { key: message.id },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  id: message.id,
                  className: 'messageLink',
                  to: '#',
                  onClick: _this3.handleMessageStatus },
                message.message_body
              ),
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
              { className: 'groupName' },
              groupTitle
            ),
            allMessages
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

/***/ 561:
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

var _MessageBoard = __webpack_require__(559);

var _MessageBoard2 = _interopRequireDefault(_MessageBoard);

var _Header = __webpack_require__(94);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(110);

var _Footer2 = _interopRequireDefault(_Footer);

var _groupActions = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class MessagePage
 * @extends {React.Component}
 */
var MessagePage = function (_React$Component) {
  _inherits(MessagePage, _React$Component);

  function MessagePage() {
    _classCallCheck(this, MessagePage);

    return _possibleConstructorReturn(this, (MessagePage.__proto__ || Object.getPrototypeOf(MessagePage)).apply(this, arguments));
  }

  _createClass(MessagePage, [{
    key: 'componentWillMount',


    /**
     * @memberof MessagePage
     * @return {void}
     */
    value: function componentWillMount() {
      var groupId = this.props.match.params.id;
      this.setState({
        groupId: groupId
      });
    }
    /**
     * @param {any} nextProps
     * @memberof MessagePage
     * @return {void}
     */

    /**
     * @returns {object} - Message Component
     * @memberof MessagePage
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'mycontainer' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_MessageBoard2.default, {
              groups: this.props.groups,
              addUserToGroup: this.props.addUserToGroup,
              selectedGroupId: Number(this.state.groupId),
              selectedGroupName: this.state.selectedGroupName
            })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return MessagePage;
}(_react2.default.Component);

MessagePage.propTypes = {
  addUserToGroup: _propTypes2.default.func.isRequired,
  groups: _propTypes2.default.array.isRequired,
  message: _propTypes2.default.string
};

MessagePage.defaultProps = {
  message: ''
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groups
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { addUserToGroup: _groupActions.addUserToGroup })(MessagePage);

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class FlashMessage
 * @extends {React.Component}
 */
var FlashMessage = function (_React$Component) {
  _inherits(FlashMessage, _React$Component);

  /**
   * Creates an instance of FlashMessage.
   * @param {any} props
   * @memberof FlashMessage
   */
  function FlashMessage(props) {
    _classCallCheck(this, FlashMessage);

    var _this = _possibleConstructorReturn(this, (FlashMessage.__proto__ || Object.getPrototypeOf(FlashMessage)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }
  /**
   * @memberof FlashMessage
   * @returns {void}
   */


  _createClass(FlashMessage, [{
    key: 'onClick',
    value: function onClick() {
      this.props.deleteFlashMessage(this.props.message.id);
    }
    /**
     * @returns {object} flash message component
     * @memberof FlashMessage
     */

  }, {
    key: 'render',
    value: function render() {
      var _props$message = this.props.message,
          id = _props$message.id,
          type = _props$message.type,
          text = _props$message.text;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('alert', {
            'alert-success': type === 'success',
            'alert-danger': type === 'error'
          }) },
        _react2.default.createElement(
          'button',
          {
            onClick: this.onClick,
            className: 'close' },
          _react2.default.createElement(
            'span',
            null,
            '\xD7'
          )
        ),
        text
      );
    }
  }]);

  return FlashMessage;
}(_react2.default.Component);

FlashMessage.propTypes = {
  message: _propTypes2.default.object.isRequired,
  deleteFlashMessage: _propTypes2.default.func.isRequired
};

exports.default = FlashMessage;

/***/ }),

/***/ 564:
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

var _reactMaterialize = __webpack_require__(484);

var _reactRedux = __webpack_require__(27);

var _TextFieldGroup = __webpack_require__(95);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _forgotpassword = __webpack_require__(1195);

var _forgotPasswordActions = __webpack_require__(162);

var _flashMessageActions = __webpack_require__(73);

var _FlashMessagesList = __webpack_require__(111);

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

/***/ 566:
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

var _TextFieldGroup = __webpack_require__(95);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _ForgetPasswordModal = __webpack_require__(564);

var _ForgetPasswordModal2 = _interopRequireDefault(_ForgetPasswordModal);

var _authenticationActions = __webpack_require__(129);

var _login = __webpack_require__(1196);

var _login2 = _interopRequireDefault(_login);

var _FlashMessagesList = __webpack_require__(111);

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

/***/ 567:
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

var _TextFieldGroup = __webpack_require__(95);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _reset_password = __webpack_require__(1197);

var _FlashMessagesList = __webpack_require__(111);

var _FlashMessagesList2 = _interopRequireDefault(_FlashMessagesList);

var _forgotPasswordActions = __webpack_require__(162);

var _flashMessageActions = __webpack_require__(73);

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

var _queryString = __webpack_require__(210);

var _queryString2 = _interopRequireDefault(_queryString);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(27);

var _ResetPasswordForm = __webpack_require__(567);

var _ResetPasswordForm2 = _interopRequireDefault(_ResetPasswordForm);

var _forgotPasswordActions = __webpack_require__(162);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class ResetPasswordPage
 * @extends {React.Component}
 */
var ResetPasswordPage = function (_React$Component) {
  _inherits(ResetPasswordPage, _React$Component);

  /**
   * Creates an instance of ResetPasswordPage.
   * @param {any} props
   * @memberof ResetPasswordPage
   */
  function ResetPasswordPage(props) {
    _classCallCheck(this, ResetPasswordPage);

    var _this = _possibleConstructorReturn(this, (ResetPasswordPage.__proto__ || Object.getPrototypeOf(ResetPasswordPage)).call(this, props));

    _this.state = {
      ok: false
    };
    return _this;
  }

  /**
   * @memberof ResetPasswordPage
   * @return {void}
   */


  _createClass(ResetPasswordPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var query = _queryString2.default.parse(this.props.location.search);
      var token = query.token;
      var email = query.email;
      this.props.checkToken(token, email).then(function () {
        _this2.setState({
          ok: true
        });
      }, function () {
        //
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.ok && _react2.default.createElement(_ResetPasswordForm2.default, null)
      );
    }
  }]);

  return ResetPasswordPage;
}(_react2.default.Component);

ResetPasswordPage.propTypes = {
  checkToken: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { checkToken: _forgotPasswordActions.checkToken })(ResetPasswordPage);

/***/ }),

/***/ 569:
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

var _TextFieldGroup = __webpack_require__(95);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _signup = __webpack_require__(1198);

var _signup2 = _interopRequireDefault(_signup);

var _authenticationActions = __webpack_require__(129);

var _flashMessageActions = __webpack_require__(73);

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

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactPaginate = __webpack_require__(228);

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(27);

var _reactRouterDom = __webpack_require__(60);

var _queryString = __webpack_require__(210);

var _queryString2 = _interopRequireDefault(_queryString);

var _getUsersAction = __webpack_require__(547);

var _getUsersAction2 = _interopRequireDefault(_getUsersAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class UserList
 * @extends {Component}
 */
var UserList = function (_React$Component) {
  _inherits(UserList, _React$Component);

  /**
   * Creates an instance of UserList.
   * @param {object} props
   * @memberof UserList
   */
  function UserList(props) {
    _classCallCheck(this, UserList);

    var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

    _this.usersPerPage = 5;
    var pagination = _this.props.pagination;

    _this.state = {
      users: pagination.users,
      offset: 0,
      pageCount: Math.ceil(pagination.count / _this.usersPerPage)
    };
    _this.handlePageClick = _this.handlePageClick.bind(_this);
    _this.searchParams = _queryString2.default.parse(_this.props.location.search).q;
    return _this;
  }

  /**
   * call the getUsers method after component have mounted
   * @memberof UserList
   * @return {void}
   */


  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getUsersAction(this.searchParams);
    }

    /**
     * update component with new props
     * @param {object} nextProps
     * @memberof UserList
     * @return {void}
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        users: nextProps.pagination.users,
        pageCount: Math.ceil(nextProps.pagination.totalCount / this.usersPerPage)
      });
    }

    /**
     * used to calculate offset
     * @param {number} page
     * @memberof UserList
     * @return {page} - page
     */

  }, {
    key: 'handlePageClick',
    value: function handlePageClick(page) {
      var _this2 = this;

      var selected = page.selected;
      var offset = Math.ceil(selected * this.usersPerPage);

      this.setState({ offset: offset }, function () {
        _this2.props.getUsersAction(_this2.searchParams, offset);
      });
    }

    /**
     * Renders the UserList component
     * @memberof UserList
     * @return {object} - UserList component
     */

  }, {
    key: 'render',
    value: function render() {
      var users = this.state.users;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m10 l10 col-md-10' },
          _react2.default.createElement(
            'div',
            { className: 'mycontainer' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement('div', { className: 'col s12 m4 l2' }),
              _react2.default.createElement(
                'div',
                { className: 'col s12 m4 l8 large-cards' },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Users'
                ),
                _react2.default.createElement(
                  'table',
                  { className: 'striped responsive-table' },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    users.length > 0 ? users.map(function (user, index) {
                      return _react2.default.createElement(
                        'tr',
                        { key: index },
                        _react2.default.createElement(
                          'td',
                          null,
                          user.username
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          user.email
                        )
                      );
                    }) : _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        {
                          className: 'center',
                          col: '2', colSpan: '2' },
                        'No user found'
                      )
                    )
                  )
                ),
                users.length > 5 && _react2.default.createElement(_reactPaginate2.default, {
                  previousLabel: 'previous',
                  nextLabel: 'next',
                  breakLabel: _react2.default.createElement(
                    'a',
                    { href: '' },
                    '...'
                  ),
                  breakClassName: 'break-me',
                  pageCount: this.state.pageCount,
                  marginPagesDisplayed: 2,
                  pageRangeDisplayed: 5,
                  onPageChange: this.handlePageClick,
                  containerClassName: 'pagination',
                  subContainerClassName: 'pages pagination',
                  activeClassName: 'active'
                })
              ),
              _react2.default.createElement('div', { className: 'col s12 m4 l2' })
            )
          )
        )
      );
    }
  }]);

  return UserList;
}(_react2.default.Component);

UserList.propTypes = {
  location: _propTypes2.default.object.isRequired,
  getUsersAction: _propTypes2.default.func.isRequired

};

var mapStateToProps = function mapStateToProps(state) {
  return {
    pagination: state.pagination,
    pageCount: state.pagination.pageCount
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getUsersAction: _getUsersAction2.default })((0, _reactRouterDom.withRouter)(UserList));

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(38);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

/**
 * updates the groups property of the store
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
 */

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _types.GET_GROUPS:
      return [].concat(_toConsumableArray(action.groups));
    default:
      return state;
  }
};

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(38);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

/**
 * updates the messages property of the store
 *
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
 */

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _types.GET_MESSAGES:
      return [].concat(_toConsumableArray(action.messages));
    case _types.POST_MESSAGE:
      return [].concat(_toConsumableArray(state), [action.message]);
    default:
      return state;
  }
};

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(38);

var initialState = {
  pageNumber: 0,
  pageCount: 0,
  pageSize: 0,
  totalCount: 0,
  users: []
};

/**
 * updates the messages property of the store
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
*/

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _types.GET_ALL_USERS:
      return {
        pageNumber: action.users.pageNumber,
        pageCount: action.users.pageCount,
        pageSize: action.users.pageSize,
        users: action.users.users,
        totalCount: action.users.totalCount
      };
    default:
      return state;
  }
};

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var checkNum = function checkNum(num) {
  var rawNum = parseInt(num, 10);
  if (isNaN(rawNum)) {
    return false;
  }
  return true;
};

module.exports = checkNum;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroup = createGroup;
exports.getGroups = getGroups;
exports.getGroupUsers = getGroupUsers;
exports.addUserStatus = addUserStatus;
exports.fetchGroups = fetchGroups;
exports.fetchGroupUsers = fetchGroupUsers;
exports.addUserToGroup = addUserToGroup;

var _axios = __webpack_require__(92);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Group.
 * @param {Array} group - groups.
 *
 * @returns {createGroup} -
    returns the createGroup function to perform async dispatch.
 */
function createGroup(group) {
  return function () {
    return _axios2.default.post('/api/v1/group/', group);
  };
}

/**
 * Fetch all Groups.
 * @param {Array} groups - groups.
 *
 * @returns {object} action payload data and action type
 */
function getGroups(groups) {
  return {
    type: _types.GET_GROUPS,
    groups: groups
  };
}

/**
 * Fetch all Users in a group.
 * @param {Array} groupUsers - groupUsers.
 *
 * @returns {object} action payload data and action type
 */
function getGroupUsers(groupUsers) {
  return {
    type: _types.GET_GROUP_USERS,
    groupUsers: groupUsers
  };
}

/**
 * Add user to a group.
 * @param {Boolean} status - status.
 * @param {string} message - message.
 *
 * @returns {object} action payload data and action type
 */
function addUserStatus(status, message) {
  return {
    type: _types.ADD_USER_TO_GROUP,
    status: status,
    message: message
  };
}

/**
 * Fetch all Groups.
 * @returns {function} dispatches getGroups action
 */
function fetchGroups() {
  return function (dispatch) {
    return _axios2.default.get('/api/v1/groups').then(function (response) {
      var groups = response.data;
      dispatch(getGroups(groups));
    }).catch(function (error) {
      throw error;
    });
  };
}

/**
 * Dispatches an action to fetch all users in a group.
 * @param {Integer} groupId - groupdId.
 * @returns {function} - dispatches fetchGroupUsers action.
 */
function fetchGroupUsers(groupId) {
  return function (dispatch) {
    return _axios2.default.get('/api/v1/group/' + groupId + '/users').then(function (_ref) {
      var data = _ref.data;

      dispatch(getGroupUsers(data.data.members));
    }).catch(function (error) {
      throw error;
    });
  };
}

/**
 * Dispatches an action to add a user to a group.
 * @param {integer} groupId - The Id of the group.
 * @param {String} user - The username.
 *@returns {function} - dispatches addUserToGroup action.
 */
function addUserToGroup(groupId, user) {
  return function (dispatch) {
    return _axios2.default.post('/api/v1/group/' + groupId + '/user', user).then(function (data) {
      var message = data.message;
      dispatch(addUserStatus(true, message));
      return true;
    }).catch(function (error) {
      var message = error.data.message;
      dispatch(addUserStatus(false, message));
      return message;
    });
  };
}

/***/ }),

/***/ 96:
false

})
//# sourceMappingURL=0.796c39d438ac6c8fe831.hot-update.js.map