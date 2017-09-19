import axios from 'axios';
import { POST_MESSAGE, SET_MESSAGES, UPDATE_READ_STATUS } from './types';


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

export const messageReadStatus = messageId => (
  {
    type: UPDATE_READ_STATUS,
    data: {
      messageId,
      updated: true
    }
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
 * Fetch all Messages.
 * @param {Integer} groupId - groupdId.
 *@returns {void} - dispatch an action to get all messages to the store.
 */
export function getMessages(groupId) {
  return dispatch => (
    axios.get(`/api/group/${groupId}/messages`)
    .then(({ data }) => {
      dispatch(getAllMessages(data.messages));
    })
  );
}

/**
 * change Message status.
 * @param {Integer} messageId - messageId.
 * @param {Integer} groupId - groupId.
 *@returns {void} - dispatch an action to get all messages to the store.
 */
export function updateMessageStatus(messageId) {
  return dispatch => (
    axios.post('/api/record-message-views', { messageId })
    .then(({ data }) => {
      dispatch(messageReadStatus(messageId));
    })
  );
}

