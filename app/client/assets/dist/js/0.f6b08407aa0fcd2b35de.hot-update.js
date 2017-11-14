webpackHotUpdate(0,{

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
        pageCount: action.users.pageCount,
        pageSize: action.users.pageSize,
        users: action.users.users,
        totalCount: action.users.totalCount
      };
    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=0.f6b08407aa0fcd2b35de.hot-update.js.map