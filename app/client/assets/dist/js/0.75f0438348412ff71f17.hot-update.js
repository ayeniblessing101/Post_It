webpackHotUpdate(0,{

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
      var selectedGroupId = this.props.groupId;
      var addUserToGroup = this.props.addUserToGroup;

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
  addUserToGroup: _propTypes2.default.func.isRequired,
  groupId: _propTypes2.default.number.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    groupUsers: state.groupUsers
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchGroupUsers: _groupActions.fetchGroupUsers })(AllUsers);

/***/ })

})
//# sourceMappingURL=0.75f0438348412ff71f17.hot-update.js.map