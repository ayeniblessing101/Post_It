webpackHotUpdate(0,{

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroup = createGroup;
exports.getGroups = getGroups;
exports.getGroupUsers = getGroupUsers;
exports.addUserStatus = addUserStatus;
exports.fetchGroups = fetchGroups;
exports.fetchGroupUsers = fetchGroupUsers;
exports.addUserToGroup = addUserToGroup;

var _axios = __webpack_require__(92);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Group.
 * @param {Array} group - groups.
 *
 * @returns {createGroup} -
    returns the createGroup function to perform async dispatch.
 */
function createGroup(group) {
  return function () {
    return _axios2.default.post('/api/v1/group/', group);
  };
}

/**
 * Fetch all Groups.
 * @param {Array} groups - groups.
 *
 * @returns {object} action payload data and action type
 */
function getGroups(groups) {
  return {
    type: _types.GET_GROUPS,
    groups: groups
  };
}

/**
 * Fetch all Users in a group.
 * @param {Array} groupUsers - groupUsers.
 *
 * @returns {object} action payload data and action type
 */
function getGroupUsers(groupUsers) {
  return {
    type: _types.GET_GROUP_USERS,
    groupUsers: groupUsers
  };
}

/**
 * Add user to a group.
 * @param {Boolean} status - status.
 * @param {string} message - message.
 *
 * @returns {object} action payload data and action type
 */
function addUserStatus(status, message) {
  return {
    type: _types.ADD_USER_TO_GROUP,
    status: status,
    message: message
  };
}

/**
 * Fetch all Groups.
 *  @param {int} offset - offset
 * @param {int} limit - limit
 *
 * @returns {function} dispatches getGroups action
 */
function fetchGroups() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

  return function (dispatch) {
    return _axios2.default.get('/api/v1/groups', {
      params: {
        offset: offset,
        limit: limit
      }
    }).then(function (response) {
      var groups = response.data;
      dispatch(getGroups(groups));
    }).catch(function (error) {
      throw error;
    });
  };
}

/**
 * Dispatches an action to fetch all users in a group.
 * @param {Integer} groupId - groupdId.
 *
 * @returns {function} - dispatches fetchGroupUsers action.
 */
function fetchGroupUsers(groupId) {
  return function (dispatch) {
    return _axios2.default.get('/api/v1/group/' + groupId + '/users').then(function (_ref) {
      var data = _ref.data;

      dispatch(getGroupUsers(data.data.members));
    }).catch(function (error) {
      throw error;
    });
  };
}

/**
 * Dispatches an action to add a user to a group.
 * @param {integer} groupId - The Id of the group.
 * @param {String} user - The username.
 *@returns {function} - dispatches addUserToGroup action.
 */
function addUserToGroup(groupId, user) {
  return function (dispatch) {
    return _axios2.default.post('/api/v1/group/' + groupId + '/user', user).then(function (data) {
      var message = data.message;
      dispatch(addUserStatus(true, message));
      return true;
    }).catch(function (error) {
      var message = error.data.message;
      dispatch(addUserStatus(false, message));
      return message;
    });
  };
}

/***/ })

})
//# sourceMappingURL=0.e788a4b4ddec8c81f492.hot-update.js.map