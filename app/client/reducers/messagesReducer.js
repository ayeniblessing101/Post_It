import { GET_GROUP_WITH_MESSAGE, POST_MESSAGE } from '../actions/types';

const initialState = {
  id: '',
  groupName: '',
  Messages: [],
  members: []
};

/**
 * updates the messages property of the store
 *
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case GET_GROUP_WITH_MESSAGE:
    return action.groupInfo;
  case POST_MESSAGE:
    return {
      ...state,
      Messages: [
        ...state.Messages,
        action.message,
      ]
    };
  default:
    return state;
  }
};
