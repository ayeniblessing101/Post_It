webpackHotUpdate(0,{

/***/ 559:
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
      var selectedGroupId = this.props.selectedGroupId;
      var addUserToGroup = this.props.addUserToGroup;

      console.log(this.props, '========');

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
  groups: _propTypes2.default.object.isRequired,
  selectedGroupId: _propTypes2.default.number.isRequired
};

exports.default = (0, _reactRedux.connect)(null)(MessageBoard);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ })

})
//# sourceMappingURL=0.30ae685da11c2b600835.hot-update.js.map