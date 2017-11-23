/* global jest */
import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { LandingPage } from '../../../components/user/LandingPage';

jest.mock('react-router-dom');
jest.mock('../../../components/user/SignupForm');
jest.mock('../../../components/user/LoginForm');

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

const setup = () => {
  const props = {};

  const enzymeWrapper = mount(<LandingPage {...props} />, mockContext);

  return {
    props,
    enzymeWrapper,
  };
};

describe('Component', () => {
  describe('Landing Page', () => {
    it('checks if h1 exists', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('h1').text()).toBe(
        'Welcome to the BiggestSocial Network in the World',
      );
    });
  });
});
