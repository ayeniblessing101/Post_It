/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import sinon from 'sinon';
// import 'materialize-css/dist/js/materialize';
import { MessageForm } from '../../../components/messages/MessageForm';

jest.mock('react-router-dom');

const postMessage = jest.fn(() => Promise.resolve());
const getMessages = sinon.spy();
const setup = () => {
  const props = {
    postMessage,
    getMessages,
    messages: {
      Messages: [
        {
          User: {
            username: '',
          },
        },
      ],
      groupName: 'Andela',
    },
    groupId: 1,
    group: [],
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = mount(<MessageForm {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('Message Form component', () => {
  const { enzymeWrapper, props } = setup();
  it('should have className groupName', () => {
    expect(enzymeWrapper.find('h5').hasClass('groupName')).toBe(true);
  });

  it('should handle handleSubmit method', () => {
    const spy = sinon.spy(MessageForm.prototype, 'handleSubmit');
    const wrapper = mount(<MessageForm {...props} />);
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => null });
    expect(spy.called).toBeTruthy();
    spy.reset();
    spy.restore();
  });

  it('should handle handleChange event', () => {
    const spy = sinon.spy(MessageForm.prototype, 'handleChange');
    const wrapper = mount(<MessageForm {...props} />);
    wrapper.find('textarea').simulate('change', {
      preventDefault: () => null,
      target: { name: 'hello', value: 'hello' },
    });
    expect(spy.called).toBeTruthy();
  });
});
