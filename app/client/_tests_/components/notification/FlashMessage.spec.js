/* global jest */
import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { FlashMessage } from '../../../components/notification/FlashMessage';

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

const setup = () => {
  const props = {
    message: {},
    deleteFlashMessage: jest.fn(),
  };

  const enzymeWrapper = mount(<FlashMessage {...props} />, mockContext);

  return {
    props,
    enzymeWrapper,
  };
};

describe('Component', () => {
  describe('Flash Message', () => {
    it('checks if button tag exists', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('button').length).toBe(1);
    });
  });
});
