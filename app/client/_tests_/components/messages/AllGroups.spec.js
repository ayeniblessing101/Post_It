/* global jest */
import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { AllGroups } from '../../../components/messages/AllGroups';
import mockData from '../../../../__mocks__/mockData';

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
    groups: mockData.allGroups,
    fetchGroups: jest.fn(),
  };

  const enzymeWrapper = mount(<AllGroups {...props} />, mockContext);

  return {
    props,
    enzymeWrapper,
  };
};

describe('Component', () => {
  describe('All Groups', () => {
    it('checks if the className allGroups exists', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.allGroups').length).toBe(1);
    });
  });
});
