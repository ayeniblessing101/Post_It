/* global jest */
import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { AllUsers } from '../../../components/messages/AllUsers';

jest.mock('react-router-dom');
jest.mock('../../../components/messages/AddUserModal');

const mockContext = {
  childContextTypes: { router: React.PropTypes.object },
  context: {
    router: {
      history: {
        push: () => null,
        replace: () => null,
        createHref: () => null,
        createGroup: '[function ]',
      },
    },
  },
};

const setup = () => {
  const props = {
    addUserToGroup: jest.fn(),
    fetchGroupUsers: jest.fn(),
    groupUsers: [],
    groupId: 1,
  };

  const enzymeWrapper = mount(<AllUsers {...props} />, mockContext);

  return {
    props,
    enzymeWrapper,
  };
};

describe('Component', () => {
  describe('All Users', () => {
    it('checks if className allUsers exists', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.allUsers').length).toBe(1);
    });
  });
});
