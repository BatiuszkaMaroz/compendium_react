import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Root } from '../../test-utils';

import Box from './Box';

let wrapper: ReactWrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <Box />
    </Root>,
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('renders button', () => {
  expect(wrapper.find('button').length).toEqual(2);
});

describe('input', () => {
  const inputValue = 'box box';

  it('renders', () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  describe('is', () => {
    beforeEach(() => {
      wrapper.find('input').simulate('change', {
        target: { value: inputValue },
      });
      wrapper.update();
    });

    it('controlled', () => {
      expect(wrapper.find('input').prop('value')).toBe(inputValue);
    });

    it('cleared after submit', () => {
      wrapper.find('form').simulate('submit', {
        preventDefault: jest.fn(),
      });
      wrapper.update();

      expect(wrapper.find('input').prop('value')).toBe('');
    });
  });
});
