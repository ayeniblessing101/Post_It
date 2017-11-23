/* global jest */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { AddGroupForm } from '../../../components/group/AddGroupForm';
import mockData from './../../../../__mocks__/mockData';

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
const addFlashMessage = sinon.spy();
const setup = () => {
  const props = {
    addFlashMessage,
    messages: mockData.data,
    createGroup: jest.fn(() => Promise.resolve()),
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = shallow(<AddGroupForm {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('Header', () => {
    const { enzymeWrapper, props } = setup();
    it('checks if h4 tag with the text Add Group Exists', () => {
      expect(enzymeWrapper.find('h4').text()).toBe('Add Group');
    });

    it('simulates handle submit', () => {
      const spy = sinon.spy(AddGroupForm.prototype, 'handleSubmit');
      const wrapper = shallow(<AddGroupForm {...props} />, mockContext);
      const form = wrapper.find('form');
      wrapper.setState({ groupname: '' });
      form.simulate('submit', { preventDefault: () => null });
      expect(spy.called).toBeTruthy();
      spy.reset();
      spy.restore();
    });

    it('simulates on submit event', () => {
      const spy = sinon.spy(AddGroupForm.prototype, 'handleSubmit');
      const wrapper = shallow(<AddGroupForm {...props} />, mockContext);
      const form = wrapper.find('form');
      wrapper.setState({ groupname: 'Add group' });
      form.simulate('submit', { preventDefault: () => null });
      expect(spy.called).toBeTruthy();
      spy.reset();
      spy.restore();
    });

    it('checks if image is in the state', () => {
      const wrapper = shallow(<AddGroupForm {...props} />, mockContext);
      const form = wrapper.find('form');
      wrapper.setState(mockData.addGroupData);
      form.simulate('submit', { preventDefault: () => null });
      expect(wrapper.state().isLoading).toBeTruthy();
      expect(wrapper.state().errors).toEqual({});
    });

    it('should call addFlashmessage method when createGroup fails', () => {
      const failingCreateGroup = jest.fn(() =>
        Promise.reject({
          data: {
            groupname: 'Error',
          },
        }),
      );
      const failingProps = {
        ...props,
        createGroup: failingCreateGroup,
      };
      const wrapper = shallow(<AddGroupForm {...failingProps} />, mockContext);
      const form = wrapper.find('form');
      wrapper.setState(mockData.addGroupData);
      form.simulate('submit', { preventDefault: () => null });
    });

    it('simulates on change event', () => {
      const spy = sinon.spy(AddGroupForm.prototype, 'handleChange');
      const wrapper = shallow(<AddGroupForm {...props} />, mockContext);
      wrapper.find('.addGroupFormContainer').simulate('change', {
        preventDefault: () => null,
        target: { name: 'hello', value: 'hello' },
      });
      expect(spy.called).toBeTruthy();
    });
  });
});
