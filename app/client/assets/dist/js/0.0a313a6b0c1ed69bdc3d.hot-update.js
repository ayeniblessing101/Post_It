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

var _reactRedux = __webpack_require__(26);

var _MessageBoard = __webpack_require__(561);

var _MessageBoard2 = _interopRequireDefault(_MessageBoard);

var _Header = __webpack_require__(95);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(111);

var _Footer2 = _interopRequireDefault(_Footer);

var _groupActions = __webpack_require__(94);

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
  groups: _propTypes2.default.object.isRequired
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

/***/ })

})
//# sourceMappingURL=0.0a313a6b0c1ed69bdc3d.hot-update.js.map