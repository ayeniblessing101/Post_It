webpackHotUpdate(0,{

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(38);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  pageNumber: 0,
  pageCount: 0,
  pageSize: 0,
  totalCount: 0,
  allGroups: []
};

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

/***/ })

})
//# sourceMappingURL=0.0f979ee42e120ca7b3a2.hot-update.js.map