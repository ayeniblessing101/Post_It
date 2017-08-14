import { ADD_USER_TO_GROUP } from '../actions/types';

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER_TO_GROUP:
      return Object.assign({}, { message: action.message });
    default:
      return state;
  }
};
