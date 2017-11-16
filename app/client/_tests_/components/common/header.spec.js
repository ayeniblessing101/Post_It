/* global jest */
import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Header } from '../../../components/common/Header';

jest.mock('react-router-dom');

const middlewares = [thunk];
const fakeStore = configureMockStore(middlewares);
sinon.spy(Header.prototype, 'handleSubmit');
sinon.spy(Header.prototype, 'handleChange');
sinon.spy(Header.prototype, 'componentDidMount');

const mockContext = {
  childContextTypes: { router: React.PropTypes.object },
  context: { router: {
    history: {
      push: () => null,
      replace: () => null,
      createHref: () => null,
      auth: {
        isAuthenticated: true,
        user: {}
      },
      logout: '[function ]'
    }

  } }
};

const setup = () => {
  const props = {
    logout: jest.fn(),
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
      <Header {...props} />
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
    it('calls componentDidMount', () => {
      expect(Header.prototype.componentDidMount.calledOnce).toEqual(true);
    });
    it('should check if it has brand-logo', () => {
      expect(enzymeWrapper.contains(<Link to="/" className="brand-logo">
      PostIt</Link>)).toBeTruthy();
    });
    it('simulates on click event', () => {
      const wrapper = shallow(<Header {...props} />, mockContext);
      const event = {
        preventDefault: jest.fn()
      };
      wrapper.instance().logout(event);
      expect(props.logout).toBeCalled();
    });
  });
});
