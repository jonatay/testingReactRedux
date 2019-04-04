import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAtrr, checkProps } from '../../../Utils';

import ListItem from './index';

describe('ListItemComponent', function() {
  describe('Checking PropTypes', function() {
    it('should NOT throw warning', function() {
      const expectedProps = {
        title: 'test Title',
        desc: 'Some text'
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Component Renders', function() {
    const props = {
      title: 'test Title',
      desc: 'Some text'
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ListItem {...props} />);
    });
    it('should Render without error', function() {
      expect(findByTestAtrr(wrapper, 'listItemComponent').length).toBe(1);
    });
    it('should Render a title', function() {
      expect(findByTestAtrr(wrapper, 'componentTitle').length).toBe(1);
    });
    it('should Render a desc', function() {
      expect(findByTestAtrr(wrapper, 'componentDesc').length).toBe(1);
    });
  });
});
