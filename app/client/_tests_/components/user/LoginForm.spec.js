/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { LoginForm } from '../../../components/user/LoginForm';

jest.mock('react-router-dom');
jest.mock('../../../components/notification/FlashMessagesList', () =>
  jest.fn().mockReturnValue(null),
);
jest.mock('../../../components/user/ForgetPasswordModal', () =>
  jest.fn().mockReturnValue(null),
);

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
const login = jest.fn(() => Promise.resolve());
const toggleForm = jest.fn();
const setup = () => {
  const props = {
    login,
    toggleForm,
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = mount(<LoginForm {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('Login Form component', () => {
  const { enzymeWrapper, props } = setup();
  it('should have h4 tag', () => {
    expect(enzymeWrapper.find('h4').text()).toBe('Login to PostIt');
  });

  it('should handle handleSubmit event', () => {
    const spy = sinon.spy(LoginForm.prototype, 'handleSubmit');
    const wrapper = mount(<LoginForm {...props} />, mockContext);
    const form = wrapper.find('form');
    wrapper.setState({
      username: 'ade',
      password: 'ade',
      errors: {},
    });
    form.simulate('submit', { preventDefault: () => null });
    expect(spy.called).toBeTruthy();
    spy.reset();
    spy.restore();
  });

  it('should handle handleChange event', () => {
    const event = {
      target: {
        name: 'username',
        value: 'ble-ble',
      },
    };
    enzymeWrapper.instance().handleChange(event);
    expect(enzymeWrapper.state().username).toEqual('ble-ble');
  });
});
