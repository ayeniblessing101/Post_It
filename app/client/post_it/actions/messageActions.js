import axios from 'axios';
import { POST_MESSAGE, SET_MESSAGES } from './types';


export const postMessageStatus = message => (
  {
    type: POST_MESSAGE,
    message
  }
);

export const getAllMessages = messages => (
  {
    type: SET_MESSAGES,
    messages
  }
);


/**
 * Post a message.
 * @param {integer} groupId - groupdId.
 * @param {string} message - groupdId.
 *@returns {void} - dispatches an action to the redux store.
 */
export function postMessage(groupId, message) {
  return dispatch => (
    axios.post(`/api/group/${groupId}/message`, message)
    .then(({ data }) => {
      dispatch(postMessageStatus(data.data));
    })
  );
}

/**
 * Fetch all Groups.
 * @param {Object} groupId - groupdId.
 *@returns {void} - dispatch an action to get all messages to the store.
 */
export function getMessages(groupId) {
  return dispatch => (
    axios.get(`/api/group/${groupId}/messages`)
    .then(({ data }) => {
      dispatch(getAllMessages(data.data));
    })
  );
}
