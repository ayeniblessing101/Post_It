import shortid from 'shortid';
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';

/**
 * updates the flashMessages property of the store
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
 */
export default (state = [], action = {}) => {
  switch (action.type) {
  case ADD_FLASH_MESSAGE:
    return [
      ...state,
      {
        // A library for generating unique id
        id: shortid.generate(),
        type: action.message.type,
        text: action.message.text
      }
    ];
  case DELETE_FLASH_MESSAGE:
    return [];
  default: return state;
  }
};
