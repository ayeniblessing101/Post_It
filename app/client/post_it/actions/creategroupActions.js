import axios from 'axios';
import { SET_GROUPS, ADD_USER_TO_GROUP, SET_GROUP_USERS } from './types';

/**
 * Creates a Group.
 * @param {Object} group - groups.
 *@returns {group} - returns group.
 */
export function createGroup(group) {
  return dispatch => (
    axios.post('/api/group', group)
  );
}

/**
 * Fetch all Groups.
 * @param {Object} groups - groups.
 *@returns {groups} - returns group.
 */
export function setGroups(groups) {
  return {
    type: SET_GROUPS,
    groups
  };
}

/**
 * Fetch all Users in a group.
 * @param {Object} groupUsers - groupUsers.
 * @returns {groupUsers} - returns groupUsers.
 */
export function setGroupUsers(groupUsers) {
  return {
    type: SET_GROUP_USERS,
    groupUsers
  };
}

/**
 * Add user to a group.
 * @param {boolean} status - status.
 * @param {string} message - message.
 * @returns {status} - returns status.
 */
export function addUserStatus(status, message) {
  return {
    type: ADD_USER_TO_GROUP,
    status,
    message
  };
}

/**
 * Fetch all Groups.
 * @returns {void} .
 */
export function fetchGroups() {
  return dispatch => (
    axios.get('/api/groups').then((response) => {
      const groups = response.data;
      dispatch(setGroups(groups));
    }).catch((error) => {
      throw (error);
    })
  );
}

/**
 * Dispatches an action to fetch all users in a group.
 * @param {Object} groupId - groupdId.
 * @returns {void} - The group id and group name.
 */
export function fetchGroupUsers(groupId) {
  return dispatch => (
    axios.get(`/api/group/${groupId}/users`)
    .then(({ data }) => {
      dispatch(setGroupUsers(data.data.members));
    }).catch((error) => {
      throw (error);
    })
  );
}

/**
 * Dispatches an action to add user to a group.
 * @param {integer} groupId - The Id of the group.
 * @param {user} user - The Id of the group.
 *@returns {void} - returns void.
 */
export function addUserToGroup(groupId, user) {
  return dispatch =>
  axios.post(`/api/group/${groupId}/user`, user)
    .then(() => {
      dispatch(addUserStatus(true));
    }).catch((error) => {
      const message = error.data.message;
      dispatch(addUserStatus(false, message));
    });
}
