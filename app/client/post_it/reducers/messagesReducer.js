// import filter from 'lodash/filter';
import { SET_MESSAGES, POST_MESSAGE, UPDATE_READ_STATUS }
from '../actions/types';

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
  case UPDATE_READ_STATUS:
    // const me = filter(state, { id: action.data.messageId });
    // var difficult_tasks = tasks.filter((task) => task.duration >= 120 );
    return [
      ...state,
      action.data.updated
    ];
  default:
    return state;
  }
};
