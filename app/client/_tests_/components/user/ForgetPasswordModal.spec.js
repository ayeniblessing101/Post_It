/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ForgetPasswordModal } from '../../../components/user/ForgetPasswordModal';

jest.mock('react-router-dom');
jest.mock('../../../components/notification/FlashMessagesList', () =>
  jest.fn().mockReturnValue(null),
);

const event = {
  preventDefault: jest.fn(),
  target: {
    name: 'username',
    value: 'ble-ble',
  },
};
const resetPasswordEmail = jest.fn(() => Promise.resolve());
const addFlashMessage = jest.fn();
const setup = () => {
  const props = {
    resetPasswordEmail,
    addFlashMessage,
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = mount(<ForgetPasswordModal {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('ForgetPassword Modal components', () => {
  const { enzymeWrapper, props } = setup();
  it('should have modal tag', () => {
    expect(enzymeWrapper.find('Modal').length).toBe(1);
  });

  it('should handle handleSubmit event', () => {
    enzymeWrapper.setState({ email: 'name@name.com' });
    enzymeWrapper.instance().handleSubmit(event);
    expect(props.resetPasswordEmail).toBeCalled();
  });

  it('handle handleChange event', () => {
    enzymeWrapper.instance().handleChange(event);
    expect(enzymeWrapper.state().username).toEqual('ble-ble');
  });
});
