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
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <ListItem
          {...{
            title: 'test Title',
            desc: 'Some text'
          }}
        />
      );
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
  describe('Should NOT Render', function() {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ListItem {...{ desc: 'Some text' }} />);
    });
    it('should NOT Render without title', function() {
      expect(findByTestAtrr(wrapper, 'listItemComponent').length).toBe(0);
    });
  });
});
