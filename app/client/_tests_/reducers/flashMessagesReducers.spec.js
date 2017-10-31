import expect from 'expect';
import FlashMessagesReducer from '../../reducers/flashMessagesReducer';
import * as ActionTypes from '../../actions/types';

describe('flash messages reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = [];
    const newState = FlashMessagesReducer(undefined, actionDispatch);
    expect(newState).toEqual([]);
  });

  it('should handle ADD_FLASH_MESSAGE', () => {
    const actionDispatch = {
      type: ActionTypes.ADD_FLASH_MESSAGE,
      flashMessages: [
        {
          id: 'BJ9DwReCZ',
          type: 'error',
          text: 'User does not exist'
        }
      ]
    };
    const newState = FlashMessagesReducer([], actionDispatch);
    expect(newState).toEqual(actionDispatch.flashMessages);
  });
  it('should handle DELETE_FLASH_MESSAGE', () => {
    const actionDispatch = {
      type: ActionTypes.DELETE_FLASH_MESSAGE,
    };
    const newState = FlashMessagesReducer([], actionDispatch);
    expect(newState).toEqual([]);
  });
});
