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

describe('components', () => {
  describe('ForgetPassword Modal', () => {
    const { enzymeWrapper, props } = setup();
    it('checks if modal exists', () => {
      expect(enzymeWrapper.find('Modal').length).toBe(1);
    });

    it('simulate HandleSubmit event', () => {
      enzymeWrapper.setState({ email: 'name@name.com' });
      enzymeWrapper.instance().handleSubmit(event);
      expect(props.resetPasswordEmail).toBeCalled();
    });

    it('simulates OnChange event', () => {
      enzymeWrapper.instance().handleChange(event);
      expect(enzymeWrapper.state().username).toEqual('ble-ble');
    });
  });
});
