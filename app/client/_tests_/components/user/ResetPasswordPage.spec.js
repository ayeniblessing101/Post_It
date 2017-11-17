/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import sinon from 'sinon';
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

  const enzymeWrapper = mount(<ResetPasswordPage {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('Reset Password Form', () => {
    it('should check if the className resetPassword exist', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.resetPassword').length).toBe(1);
    });
  });
});
