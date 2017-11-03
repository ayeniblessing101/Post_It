/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { AddGroupForm } from '../../../components/group/AddGroupForm';

jest.mock('react-router-dom');

const middlewares = [thunk];
const fakeStore = configureMockStore(middlewares);
sinon.spy(AddGroupForm.prototype, 'handleSubmit');
sinon.spy(AddGroupForm.prototype, 'handleChange');

const mockContext = {
  childContextTypes: { router: React.PropTypes.object },
  context: { router: {
    history: {
      push: () => null,
      replace: () => null,
      createHref: () => null,
      createGroup: '[function ]'
    }
  } }
};

const setup = () => {
  const props = {
    createGroup: jest.fn(() => Promise.resolve()),
    auth: {
      isAuthenticated: false,
      user: {}
    }
  };
  const mockStates = {
    auth: {
      isAuthenticated: false,
      user: {}
    }
  };
  const store = fakeStore(mockStates);
  const enzymeWrapper = mount(
    <Provider store={store}>
      <AddGroupForm {...props} />
    </Provider>,
    mockContext
  );
  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('Header', () => {
    const { enzymeWrapper, props } = setup();
    it('renders self and subcomponents', () => {
      expect(enzymeWrapper.find('h4').text()).toBe('Add Group');
    });

    it('should not dispatch createGroup when validation fails', () => {
      const wrapper = mount(<AddGroupForm {...props} />, mockContext);
      const form = wrapper.find('form');
      wrapper.setState({ groupname: '' });
      form.simulate('submit');
      expect(props.createGroup).not.toBeCalled();
    });

    it('simulates on submit event', () => {
      const wrapper = mount(<AddGroupForm {...props} />, mockContext);
      const form = wrapper.find('form');
      wrapper.setState({ groupname: 'Add group' });
      form.simulate('submit');
      expect(props.createGroup).toBeCalled();
    });

    it('simulates on change event', () => {
      enzymeWrapper.find('input').first().simulate('change');
      expect(AddGroupForm.prototype.handleChange.calledOnce).toBe(true);
    });
  });
});
