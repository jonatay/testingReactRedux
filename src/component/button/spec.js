import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAtrr } from '../../../Utils';
import SharedButton from './index';

describe('SharedButton Component', function() {
  describe('Checking PropTypes', function() {
    it('Should NOT throw warning', function() {
      const expectedProps = {
        buttonText: 'Example Btn Txt',
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Renders', function() {
    let wrapper;
    let props = {
      buttonText: 'Example Btn Txt',
      emitEvent: () => {}
    };
    beforeEach(() => {
      wrapper = shallow(<SharedButton {...props} />);
    });
    it('should Render a Button', function() {
      const button = findByTestAtrr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
