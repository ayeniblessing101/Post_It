/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { SignupForm } from '../../../components/user/SignupForm';
import mockData from '../../../../__mocks__/mockData';

jest.mock('react-router-dom');

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
const userSignupRequest = jest.fn(() => Promise.resolve());
const toggleForm = jest.fn();
const setup = () => {
  const props = {
    userSignupRequest,
    toggleForm,
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = mount(<SignupForm {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('Signup Form component', () => {
  const { enzymeWrapper, props } = setup();
  it('should className signup', () => {
    expect(enzymeWrapper.find('.signup').length).toBe(1);
  });

  it('should handle HandleSubmit event', () => {
    const spy = sinon.spy(SignupForm.prototype, 'handleSubmit');
    const wrapper = mount(<SignupForm {...props} />, mockContext);
    const form = wrapper.find('form');
    wrapper.setState(mockData.signupPayload);
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
