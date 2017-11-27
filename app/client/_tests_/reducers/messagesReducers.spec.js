import expect from 'expect';
import messagesReducer from '../../reducers/messagesReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    const initialState = mockData.initialState;
    const actionDispatch = {};
    const newState = messagesReducer(undefined, actionDispatch);
    expect(newState).toEqual(initialState);
  });

  it('should handle GET_MESSAGES', () => {
    const initialState = mockData.initialState;
    const actionDispatch = {
      type: ActionTypes.GET_MESSAGES,
      messages: mockData.reduxMessages,
    };
    const newState = messagesReducer(initialState, actionDispatch);
    expect(newState).toEqual(actionDispatch.messages);
  });
  it('should handle POST_MESSAGE', () => {
    const initialState = mockData.messages;
    const newMessage = mockData.newMessage;
    const actionDispatch = {
      type: ActionTypes.POST_MESSAGE,
      message: newMessage,
    };
    const messages = {
      ...initialState,
      Messages: [...initialState.Messages, newMessage],
    };
    const newState = messagesReducer(initialState, actionDispatch);

    expect(newState).toEqual(messages);
  });
});
