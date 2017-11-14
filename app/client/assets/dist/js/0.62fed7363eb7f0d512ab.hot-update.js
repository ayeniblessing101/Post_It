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
  groups: []
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
      return {
        pageNumber: action.gr.pageNumber,
        pageCount: action.users.pageCount,
        pageSize: action.users.pageSize,
        users: action.users.users,
        totalCount: action.users.totalCount
      };
    // return [
    //   ...action.groups
    // ];
    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=0.62fed7363eb7f0d512ab.hot-update.js.map