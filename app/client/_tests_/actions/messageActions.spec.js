/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import mockData from './../../../__mocks__/mockData';
import * as ActionTypes from '../../actions/types';
import * as messageActions from '../../actions/messageAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Message', () => {
  it('should dispatch post message action when messages is created', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        mockData.postMessageResponse
      );
    });
    const groupId = 1;
    const message = mockData.messageBody;
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.POST_MESSAGE,
      message
    };
    store.dispatch(messageActions.postMessage(groupId, message))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('should dispatch a get message action when messages are fetched', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          data: {
            messages: mockData.allMessages
          }
        }
      );
    });
    const groupId = 1;
    const messages = mockData.allMessages;
    const store = mockStore({}, messages);
    const expectedAction = {
      type: ActionTypes.GET_MESSAGES,
      messages
    };
    return store.dispatch(messageActions.getMessages(groupId))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
