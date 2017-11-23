/* global jest */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { AddUserModal } from '../../../components/messages/AddUserModal';

jest.mock('react-router-dom');

const addUserToGroup = sinon.spy();
const fetchGroupUsers = sinon.spy();
const addFlashMessage = sinon.spy();
const setup = () => {
  const props = {
    addUserToGroup,
    fetchGroupUsers,
    addFlashMessage,
    groupId: 1,
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = shallow(<AddUserModal {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('Add User', () => {
    const { enzymeWrapper, props } = setup();
    it('checks if className add-user-modal exists', () => {
      expect(enzymeWrapper.find('.add-user-modal').length).toBe(1);
    });

    it('simulate Handle submit event', () => {
      const spy = sinon.spy(AddUserModal.prototype, 'handleSubmit');
      const wrapper = shallow(<AddUserModal {...props} />);
      const form = wrapper.find('form');
      wrapper.setState({
        errors: {},
      });
      form.simulate('submit', { preventDefault: () => null });
      expect(spy.called).toBeTruthy();
      spy.reset();
      spy.restore();
    });

    it('simulates on change event', () => {
      const spy = sinon.spy(AddUserModal.prototype, 'handleChange');
      const wrapper = shallow(<AddUserModal {...props} />);
      wrapper.find('TextFieldGroup').simulate('change', {
        preventDefault: () => null,
        target: { name: 'hello', value: 'hello' },
      });
      expect(spy.called).toBeTruthy();
    });
  });
});
