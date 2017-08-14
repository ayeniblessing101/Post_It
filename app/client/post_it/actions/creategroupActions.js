import axios from 'axios';
import { SET_GROUPS, ADD_USER_TO_GROUP } from './types';
/**
 * Fetch all Groups.
 * @param {Object} group - groups.
 *@returns {group} - returns group.
 */
export function createGroup(group) {
  return dispatch => {
    return axios.post('/api/group', group);
  };
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
 * Fetch all Groups.
 * @param {Object} status - status.
 *@returns {status} - returns status.
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
 * @returns {res} - The group id and group name.
 */
export function fetchGroups() {
  return (dispatch) => {
    return axios.get('/api/groups').then((response) => {
      const groups = response.data;
      dispatch(setGroups(groups));
    }).catch((error) => {
      throw (error);
    });
  };
}

/**
 * Add user to a group.
 * @param {Object} groupId - The Id of the group.
 * @param {Object} userID - The Id of the user.
 *@returns {groupId} - The groupId.
 */
export function addUserToGroup(groupId, user) {
  return dispatch =>
  axios.post(`/api/group/${groupId}/user`, user)
    .then((response) => {
      dispatch(addUserStatus(true));
    }).catch((error) => {
      const message = error.data.message;
      dispatch(addUserStatus(false, message));
    });
}
