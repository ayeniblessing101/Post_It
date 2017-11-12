webpackHotUpdate(0,{

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

var _reactMaterialize = __webpack_require__(483);

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
              'a',
              {
                className: 'btn-floating add_user btn-small waves-effect waves-light red' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'add'
              )
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
/* WEBPACK VAR INJECTION */(function(console) {

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

var _AddUserModal = __webpack_require__(555);

var _AddUserModal2 = _interopRequireDefault(_AddUserModal);

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
      console.log(this.props, '##########');
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col s12 m12 l3 ' },
          _react2.default.createElement(_AddUserModal2.default, {
            addUserToGroup: addUserToGroup,
            groupId: selectedGroupId
          }),
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ })

})
//# sourceMappingURL=0.fd215d6a54814a4a7c26.hot-update.js.map