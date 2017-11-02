import expect from 'expect';
import messagesReducer from '../../reducers/messagesReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = {};
    const newState = messagesReducer(undefined, actionDispatch);
    expect(newState).toEqual([]);
  });

  it('should handle GET_MESSAGES', () => {
    const actionDispatch = {
      type: ActionTypes.GET_MESSAGES,
      messages: mockData.allMessages
    };
    const newState = messagesReducer([], actionDispatch);
    expect(newState).toEqual(actionDispatch.messages);
  });
  it('should handle POST_MESSAGE', () => {
    const actionDispatch = {
      type: ActionTypes.POST_MESSAGE,
      message: {
        message_body: 'hello-world',
        priority_level: 'Normal'
      }
    };
    const messages = [
      {
        message_body: 'hello-world',
        priority_level: 'Normal'
      }
    ];
    const newState = messagesReducer([], actionDispatch);

    expect(newState).toEqual(messages);
  });
});
