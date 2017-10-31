import expect from 'expect';
import PaginationReducer from '../../reducers/paginationReducer';
import * as ActionTypes from '../../actions/types';

describe('authentication reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = {};
    const newState = PaginationReducer(undefined, actionDispatch);
    expect(newState).toEqual(
      {
        pageNumber: 0,
        pageCount: 0,
        pageSize: 0,
        totalCount: 0,
        users: []
      }
    );
  });

  it('should handle GET_ALL_USERS', () => {
    const actionDispatch = {
      type: ActionTypes.GET_ALL_USERS,
      users: [
        {
          username: 'Blessing',
          email: 'blesssing.ayeni@andela.com'
        }
      ]
    };
    const newState = PaginationReducer({
      pageNumber: 0,
      pageCount: 0,
      pageSize: 0,
      totalCount: 0,
      users: []
    }, actionDispatch);
    expect(newState).toEqual({
      pageNumber: actionDispatch.users.pageNumber,
      pageCount: actionDispatch.users.pageCount,
      pageSize: actionDispatch.users.pageSize,
      users: actionDispatch.users.users,
      totalCount: actionDispatch.users.totalCount
    });
  });
});
