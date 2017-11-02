import expect from 'expect';
import flashMessagesReducer from '../../reducers/flashMessagesReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('flash messages reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = [];
    const newState = flashMessagesReducer(undefined, actionDispatch);
    expect(newState).toEqual([]);
  });

  it('should handle ADD_FLASH_MESSAGE action', () => {
    const actionDispatch = {
      type: ActionTypes.ADD_FLASH_MESSAGE,
      message: mockData.flashMessageResponse
    };
    const newState = flashMessagesReducer([], actionDispatch);
    expect(newState[0].type).toEqual(actionDispatch.message.type);
    expect(newState[0].text).toEqual(actionDispatch.message.text);
  });
  it('should handle DELETE_FLASH_MESSAGE action', () => {
    const actionDispatch = {
      type: ActionTypes.DELETE_FLASH_MESSAGE,
    };
    const newState = flashMessagesReducer([], actionDispatch);
    expect(newState).toEqual([]);
  });
});
