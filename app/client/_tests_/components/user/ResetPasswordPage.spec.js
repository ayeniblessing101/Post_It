/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ResetPasswordPage } from '../../../components/user/ResetPasswordPage';

jest.dontMock('react-router-dom');
jest.mock('../../../components/user/ResetPasswordForm');

const mockContext = {
  childContextTypes: { router: React.PropTypes.object },
  context: {
    router: {
      history: {
        push: () => null,
        replace: () => null,
        createHref: () => null,
      },
    },
  },
};

const setup = () => {
  const props = {
    checkToken: jest.fn(() => Promise.resolve()),
    location: {
      search: {},
    },
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = mount(<ResetPasswordPage {...props} />, mockContext);
  return {
    props,
    enzymeWrapper,
  };
};

describe('Reset Password Form component', () => {
  it('should have className resetPassword', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.resetPassword').length).toBe(1);
  });
});
