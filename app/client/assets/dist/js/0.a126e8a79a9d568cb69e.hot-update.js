webpackHotUpdate(0,{

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
    return _axios2.default.post('/api/v1/group/' + groupId + '/message', message).then(function (res) {
      dispatch(postMessageStatus(res.data.newMessage));
    });
  };
}

/**
 * Fetch all Messages.
 * @param {Integer} groupId - groupdId.
 *
 * @returns {function} - dispatch an action to get all messages to the store.
 */
function getMessages(groupId) {
  return function (dispatch) {
    return _axios2.default.get('/api/v1/group/' + groupId + '/messages').then(function (_ref) {
      var data = _ref.data;

      dispatch(getAllMessages(data.messages));
    });
  };
}

/***/ })

})
//# sourceMappingURL=0.a126e8a79a9d568cb69e.hot-update.js.map