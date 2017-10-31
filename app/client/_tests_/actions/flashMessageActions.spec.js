/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import * as ActionTypes from '../../actions/types';
import * as FlashMessageActions from '../../actions/flashMessageActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('flash message', () => {
  it('should add flash message', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {
          data: [
            {
              id: 'BJ9DwReCZ',
              type: 'error',
              text: 'User does not exist'
            }
          ]
        }
      );
    });
    const message =
      [
        {
          id: 'BJ9DwReCZ',
          type: 'error',
          text: 'User does not exist'
        }
      ];
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.ADD_FLASH_MESSAGE,
      // message
    };
    store.dispatch(FlashMessageActions.addFlashMessage(message))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
