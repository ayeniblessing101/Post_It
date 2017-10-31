import expect from 'expect';
import MessagesReducer from '../../reducers/messagesReducer';
import * as ActionTypes from '../../actions/types';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = {};
    const newState = MessagesReducer(undefined, actionDispatch);
    expect(newState).toEqual([]);
  });

  it('should handle GET_MESSAGES', () => {
    const actionDispatch = {
      type: ActionTypes.GET_MESSAGES,
      messages: [
        {
          id: 38,
          message_body: 'Enter a messagejjjjjj',
          priority_level: 'Normal',
          group_id: 2,
          createdAt: '2017-10-26T14:38:52.020Z',
          User: {
            id: 1,
            username: 'blessing',
            email: 'blessing.ayeni@andela.com'
          }
        }
      ]
    };
    const newState = MessagesReducer([], actionDispatch);
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
    const newState = MessagesReducer([], actionDispatch);

    expect(newState).toEqual(messages);
  });
});
