import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import GroupCard from '../../../components/group/GroupCard';

const setup = () => {
  const props = {
    group: { groupName: 'Andela' }
  };

  const enzymeWrapper = shallow(<GroupCard {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('GroupCard', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('Link').hasClass('btn')).toBe(true);

      expect(enzymeWrapper.find('img').length).toBe(1);

      expect(enzymeWrapper.find('h5').text()).toBe('Andela');
    });
  });
});
