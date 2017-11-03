import axios from 'axios';
import { POST_MESSAGE, GET_MESSAGES } from './types';

/**
 * post message status
 * @param {any} message
 * @return {object} -action payload data and action type
 */
export const postMessageStatus = message => (
  {
    type: POST_MESSAGE,
    message
  }
);

/**
 * action to fetch all messages
 * @param {any} messages
 * @return {object} - action payload data and action type
 */
export const getAllMessages = messages => (
  {
    type: GET_MESSAGES,
    messages
  }
);

/**
 * Post a message.
 * @param {integer} groupId - groupdId.
 * @param {string} message - groupdId.
 *
 *@returns {function} - dispatches an action to post message.
 */
export function postMessage(groupId, message) {
  return dispatch => (
    axios.post(`/api/v1/group/${groupId}/message`, message)
    .then(({ data }) => {
      dispatch(postMessageStatus(data.data));
    })
  );
}

/**
 * Fetch all Messages.
 * @param {Integer} groupId - groupdId.
 *
 *@returns {function} - dispatch an action to get all messages to the store.
 */
export function getMessages(groupId) {
  return dispatch => (
    axios.get(`/api/v1/group/${groupId}/messages`)
    .then(({ data }) => {
      dispatch(getAllMessages(data.messages));
    })
  );
}
