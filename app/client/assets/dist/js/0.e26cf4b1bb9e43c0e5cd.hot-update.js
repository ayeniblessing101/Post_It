webpackHotUpdate(0,{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(38);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  members: [],
  messages: []
};

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
    case _types.GET_GROUP_WITH_MESSAGE:
      return action.groupInfo;
    case _types.POST_MESSAGE:
      return [].concat(_toConsumableArray(state), [action.message]);
    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=0.e26cf4b1bb9e43c0e5cd.hot-update.js.map