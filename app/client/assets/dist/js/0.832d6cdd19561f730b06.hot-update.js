webpackHotUpdate(0,{

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
      this.props.getGroupWithMessages(this.props.groupId);
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
        groupId: nextProps.groupId
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var allMessages = void 0;
      // const { group } = this.state;
      var messages = this.state.messages;
      // const groupId = parseInt(this.props.groupId, 10);
      // let groupTitle = 'No Group Found';

      // group.map((currentGroup) => {
      //   const { id, groupName } = currentGroup;
      //   if (id === groupId) {
      //     groupTitle = groupName;
      //   }
      // });

      if (messages.length > 0) {
        allMessages = messages && messages.map(function (message) {
          return _react2.default.createElement(
            'div',
            { key: message.id },
            _react2.default.createElement(
              'b',
              { className: 'senderName' },
              message.members.username
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
              messages.groupName
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
    group: state.groups.allGroups
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getGroupWithMessages: _messageAction.getGroupWithMessages, postMessage: _messageAction.postMessage })(MessageForm);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ })

})
//# sourceMappingURL=0.832d6cdd19561f730b06.hot-update.js.map