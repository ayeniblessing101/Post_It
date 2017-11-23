/* global jest */
import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { MessageBoard } from '../../../components/messages/MessageBoard';

jest.mock('react-router-dom');
jest.mock('../../../components/messages/AllGroups');
jest.mock('../../../components/messages/MessageForm');
jest.mock('../../../components/messages/AllUsers');

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
    addUserToGroup: jest.fn(),
    groups: {},
    selectedGroupId: 1,
  };

  const enzymeWrapper = mount(<MessageBoard {...props} />, mockContext);

  return {
    props,
    enzymeWrapper,
  };
};

describe('Component', () => {
  describe('Message Board', () => {
    it('checks if className message-board exists', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('.message-board').length).toBe(1);
      enzymeWrapper.update();
    });
  });
});
