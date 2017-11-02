/* global jest */
import 'babel-polyfill';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import mockData from './../../../__mocks__/mockData';
import * as ActionTypes from '../../actions/types';
import * as flashMessageActions from '../../actions/flashMessageActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('flash message', () => {
  it('should add flash message from the store', () => {
    const message = mockData.flashMessageResponse;
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.ADD_FLASH_MESSAGE,
      message: mockData.flashMessageResponse
    };
    store.dispatch(flashMessageActions.addFlashMessage(message));
    expect(store.getActions()).toEqual([expectedAction]);
  });
  it('should remove or delete flash message from the store', () => {
    const id = 'BJ9DwReCZ';
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.DELETE_FLASH_MESSAGE,
      id
    };
    store.dispatch(flashMessageActions.deleteFlashMessage(id));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
