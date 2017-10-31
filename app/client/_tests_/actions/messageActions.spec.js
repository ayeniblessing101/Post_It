/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import * as ActionTypes from '../../actions/types';
import * as MessageActions from '../../actions/messageAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Message', () => {
  it('should post a new message to a group', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {
          data: {
            data: {
              message_body: 'Wassup Boy',
              priority_level: 'Normal'
            }
          }
        }

      );
    });
    const groupId = 1;
    const message = {
      message_body: 'Wassup Boy',
      priority_level: 'Normal',
    };
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.POST_MESSAGE,
      message
    };
    store.dispatch(MessageActions.postMessage(groupId, message))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('should fetch all messages in a group', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          data: {
            messages:
            [
              {
                id: 1,
                message_body: 'YUU',
                priority_level: 'Normal',
                group_id: 1,
                createdAt: '2017-10-16T11:13:27.265Z',
                User: {
                  id: 1,
                  username: 'blessing',
                  email: 'blessing.ayeni@andela.com'
                }
              },
              {
                id: 2,
                message_body: 'Hello Man',
                priority_level: 'Normal',
                group_id: 1,
                createdAt: '2017-10-16T11:13:27.265Z',
                User: {
                  id: 1,
                  username: 'blessing',
                  email: 'blessing.ayeni@andela.com'
                }
              }
            ]
          }
        }
      );
    });
    const groupId = 1;
    const messages =
      [
        {
          id: 1,
          message_body: 'YUU',
          priority_level: 'Normal',
          group_id: 1,
          createdAt: '2017-10-16T11:13:27.265Z',
          User: {
            id: 1,
            username: 'blessing',
            email: 'blessing.ayeni@andela.com'
          }
        },
        {
          id: 2,
          message_body: 'Hello Man',
          priority_level: 'Normal',
          group_id: 1,
          createdAt: '2017-10-16T11:13:27.265Z',
          User: {
            id: 1,
            username: 'blessing',
            email: 'blessing.ayeni@andela.com'
          }
        }
      ];
    const store = mockStore({}, messages);
    const expectedAction = {
      type: ActionTypes.GET_MESSAGES,
      messages
    };
    return store.dispatch(MessageActions.getMessages(groupId))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
