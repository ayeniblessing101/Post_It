webpackHotUpdate(0,{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupAllMessages = exports.postMessageStatus = undefined;
exports.postMessage = postMessage;
exports.getGroupWithMessages = getGroupWithMessages;

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
var getGroupAllMessages = exports.getGroupAllMessages = function getGroupAllMessages(groupInfo) {
  return {
    type: _types.GET_GROUP_WITH_MESSAGE,
    groupInfo: groupInfo
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
      console.log(res.data);
      dispatch(postMessageStatus(res.data));
    });
  };
}

/**
 * Fetch all Messages.
 * @param {Integer} groupId - groupdId.
 *
 * @returns {function} - dispatch an action to get all messages to the store.
 */
function getGroupWithMessages(groupId) {
  return function (dispatch) {
    return _axios2.default.get('/api/v1/group/' + groupId + '/').then(function (_ref) {
      var data = _ref.data;

      dispatch(getGroupAllMessages(data.data));
    });
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ })

})
//# sourceMappingURL=0.1e07189515b8982ba697.hot-update.js.map