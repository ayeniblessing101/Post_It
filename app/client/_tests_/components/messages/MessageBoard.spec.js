/* global jest */
import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import { MessageBoard } from '../../../components/messages/MessageBoard';

jest.mock('react-router-dom');

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
    addUserToGroup: jest.fn(),
    groups: {},
    selectedGroupId: 1
  };

  const enzymeWrapper = shallow(<MessageBoard {...props} />, mockContext);

  return {
    props,
    enzymeWrapper
  };
};

describe('Component', () => {
  describe('Message Board', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('.message-board').length).toBe(1);

      // expect(enzymeWrapper.find('h1').text()).toBe('todos');
    });
  });
});
