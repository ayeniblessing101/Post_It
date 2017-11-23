import axios from 'axios';
import { GET_GROUPS, ADD_USER_TO_GROUP, GET_GROUP_USERS } from './types';

/**
 * Creates a new Group.
 * @param {Array} group - groups.
 *
 * @returns {createGroup} -
    returns the createGroup function to perform async dispatch.
 */
export function createGroup(group) {
  return () => axios.post('/api/v1/group/', group);
}

/**
 * Fetch all Groups.
 * @param {Array} groups - groups.
 *
 * @returns {object} action payload data and action type
 */
export function getGroups(groups) {
  return {
    type: GET_GROUPS,
    groups,
  };
}

/**
 * Fetch all Users in a group.
 * @param {Array} groupUsers - groupUsers.
 *
 * @returns {object} action payload data and action type
 */
export function getGroupUsers(groupUsers) {
  return {
    type: GET_GROUP_USERS,
    groupUsers,
  };
}

/**
 * Add user to a group.
 * @param {Boolean} status - status.
 * @param {string} message - message.
 *
 * @returns {object} action payload data and action type
 */
export function addUserStatus(status, message) {
  return {
    type: ADD_USER_TO_GROUP,
    status,
    message,
  };
}

/**
 * Fetch all Groups.
 *  @param {int} offset - offset
 * @param {int} limit - limit
 *
 * @returns {function} dispatches getGroups action
 */
export function fetchGroups(offset = 0, limit = 5) {
  return dispatch =>
    axios
      .get('/api/v1/groups', {
        params: {
          offset,
          limit,
        },
      })
      .then((response) => {
        const groups = response.data;
        dispatch(getGroups(groups));
      })
      .catch((error) => {
        throw error;
      });
}

/**
 * Dispatches an action to fetch all users in a group.
 * @param {Integer} groupId - groupdId.
 *
 * @returns {function} - dispatches fetchGroupUsers action.
 */
export function fetchGroupUsers(groupId) {
  return dispatch =>
    axios
      .get(`/api/v1/group/${groupId}/users`)
      .then(({ data }) => {
        dispatch(getGroupUsers(data.data.members));
      })
      .catch((error) => {
        throw error;
      });
}

/**
 * Dispatches an action to add a user to a group.
 * @param {integer} groupId - The Id of the group.
 * @param {String} user - The username.
 *@returns {function} - dispatches addUserToGroup action.
 */
export function addUserToGroup(groupId, user) {
  return dispatch =>
    axios
      .post(`/api/v1/group/${groupId}/user`, user)
      .then((data) => {
        const message = data.message;
        dispatch(addUserStatus(true, message));
        return true;
      })
      .catch((error) => {
        const message = error.data.message;
        dispatch(addUserStatus(false, message));
        return message;
      });
}
