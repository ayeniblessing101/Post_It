import expect from 'expect';
import AuthReducer from '../../reducers/authReducer';
import * as ActionTypes from '../../actions/types';

describe('authentication reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = {};
    const newState = AuthReducer(undefined, actionDispatch);
    expect(newState).toEqual(
      {
        isAuthenticated: false,
        user: {}
      }
    );
  });

  it('should handle GET_CURRENT_AUTHENTICATED_USER', () => {
    const actionDispatch = {
      type: ActionTypes.GET_CURRENT_AUTHENTICATED_USER,
      user: {
        id: 1,
        username: 'blessing',
        email: 'blessing.ayeni@andela.com',
        phone: '8064476683',
        iat: 1509101121,
        exp: 1653545561
      }
    };
    const newState = AuthReducer({
      isAuthenticated: false,
      user: {}
    }, actionDispatch);
    expect(newState).toEqual({
      isAuthenticated: true,
      user: actionDispatch.user
    });
  });
});
