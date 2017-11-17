/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import sinon from 'sinon';
// import 'materialize-css/dist/js/materialize';
import { MessageForm } from '../../../components/messages/MessageForm';

jest.mock('react-router-dom');

const postMessage = jest.fn(() => Promise.resolve());
const getGroupWithMessages = sinon.spy();
const setup = () => {
  const props = {
    postMessage,
    getGroupWithMessages,
    messages: {
      Messages: [{ User: {
        username: ''
      } }],
      groupName: 'Andela'
    },
    groupId: 1,
    group: [],
    auth: {
      isAuthenticated: false,
      user: {}
    }
  };

  const enzymeWrapper = mount(
    <MessageForm {...props} />
  );
  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('Message Form', () => {
    const { enzymeWrapper, props } = setup();
    it('renders self and subcomponents', () => {
      expect(enzymeWrapper.find('h5').hasClass('groupName')).toBe(true);
    });

    it('simulate Handle submit method is called', () => {
      const spy = sinon.spy(MessageForm.prototype, 'handleSubmit');
      const wrapper = mount(<MessageForm {...props} />);
      const form = wrapper.find('form');
      form.simulate('submit', { preventDefault: () => null });
      expect(spy.called).toBeTruthy();
      spy.reset();
      spy.restore();
    });

    it('simulates on change event', () => {
      const spy = sinon.spy(MessageForm.prototype, 'handleChange');
      const wrapper = mount(<MessageForm {...props} />);
      wrapper.find('textarea').simulate('change', { preventDefault: () => null, target: { name: 'hello', value: 'hello' } });
      expect(spy.called).toBeTruthy();
    });
  });
});
