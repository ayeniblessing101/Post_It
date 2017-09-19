import { SET_GROUPS } from '../actions/types';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_GROUPS:
    return [
      ...action.groups
    ];
  default:
    return state;
  }
};
