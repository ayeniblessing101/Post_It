/* global jest */
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/common/Header';

jest.mock('react-router-dom');

sinon.spy(Header.prototype, 'handleSubmit');
sinon.spy(Header.prototype, 'handleChange');
sinon.spy(Header.prototype, 'componentDidMount');

const mockContext = {
  childContextTypes: { router: React.PropTypes.object },
  context: {
    router: {
      history: {
        push: () => null,
        replace: () => null,
        createHref: () => null,
        auth: {
          isAuthenticated: true,
          user: {},
        },
        logout: '[function ]',
      },
    },
  },
};

const setup = () => {
  const props = {
    logout: jest.fn(),
    auth: {
      isAuthenticated: false,
      user: {},
    },
  };

  const enzymeWrapper = mount(<Header {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('Header component', () => {
  const { enzymeWrapper, props } = setup();
  it('calls componentDidMount', () => {
    expect(Header.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  it('should check if it has brand-logo', () => {
    expect(
      enzymeWrapper.contains(
        <Link to="/" className="brand-logo">
          PostIt
        </Link>,
      ),
    ).toBeTruthy();
  });
  it('simulates on click event', () => {
    const wrapper = mount(<Header {...props} />, mockContext);
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().logout(event);
    expect(props.logout).toBeCalled();
  });
});
