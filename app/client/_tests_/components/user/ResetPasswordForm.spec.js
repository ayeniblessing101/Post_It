/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { ResetPasswordForm } from '../../../components/user/ResetPasswordForm';

jest.dontMock('react-router-dom');
jest.mock('../../../components/notification/FlashMessagesList');

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
    resetPassword: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
    location: {
      search: {},
    },
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = mount(<ResetPasswordForm {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('Reset Password Form', () => {
    const { enzymeWrapper, props } = setup();
    it('renders self and subcomponents', () => {
      expect(enzymeWrapper.find('h4').text()).toBe('Reset Password');
    });

    it('simulate HandleSubmit event', () => {
      const spy = sinon.spy(ResetPasswordForm.prototype, 'handleSubmit');
      const wrapper = mount(<ResetPasswordForm {...props} />, mockContext);
      const form = wrapper.find('form');
      wrapper.setState({
        newPassword: '1234',
        confirmNewPassword: '1234',
        errors: {},
      });
      form.simulate('submit', { preventDefault: () => null });
      expect(spy.called).toBeTruthy();
      spy.reset();
      spy.restore();
    });

    it('simulates OnChange event', () => {
      const event = {
        target: {
          name: 'newPassword',
          value: '1234',
        },
      };
      enzymeWrapper.instance().handleChange(event);
      expect(enzymeWrapper.state().newPassword).toEqual('1234');
    });
  });
});
