import axios from 'axios';
import { POST_MESSAGE, SET_MESSAGES } from './types';

/**
 * Fetch all Groups.
 * @param {Object} message- status.
 *@returns {message} - returns message.
 */
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
 * Fetch all Groups.
 * @param {Object} groupId - groupdId.
 *@returns {status} - returns status.
 */
export function postMessage(groupId, message) {
  return dispatch => (
    axios.post(`/api/group/${groupId}/message`, { message })
    .then(({ data }) => {
      dispatch(postMessageStatus(data.data));
    })
  );
}

/**
 * Fetch all Groups.
 * @param {Object} groupId - groupdId.
 *@returns {data} - returns data pertaining to the message.
 */
export function getMessages(groupId) {
  return dispatch => (
    axios.get(`/api/group/${groupId}/messages`)
    .then(({ data }) => {
      dispatch(getAllMessages(data.data));
    })
  );
}
