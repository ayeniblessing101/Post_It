import { SET_MESSAGES, POST_MESSAGE } from '../actions/types';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_MESSAGES:
    return [
      ...action.messages
    ];
  case POST_MESSAGE:
    return [
      ...state,
      action.message
    ];
  default:
    return state;
  }
};
