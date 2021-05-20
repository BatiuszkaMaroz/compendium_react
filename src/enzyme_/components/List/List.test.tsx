import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import List from './List';
import { Root } from '../../test-utils';

describe('list', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root
        state={{
          comments: [
            { id: '1', title: 'box box 1' },
            { id: '2', title: 'box box 2' },
          ],
        }}
      >
        <List />
      </Root>,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders <li> tags', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('shows <li> tags content', () => {
    const lis = wrapper.find('li');

    const li1 = lis.at(0).text();
    expect(li1).toBe('box box 1');

    const li2 = lis.at(1).text();
    expect(li2).toBe('box box 2');
  });
});
