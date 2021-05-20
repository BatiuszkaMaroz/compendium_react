import React from 'react';
import axios from 'axios';
import { mocked } from 'ts-jest';
import { mount } from 'enzyme';

import { PreloadedState, withRoot } from '../test-utils';
import App from '../components/App/App';

jest.mock('axios');

const mAxios = mocked(axios, true);
mAxios.get.mockResolvedValue({
  data: [
    {
      id: 1,
      title: 'john doe',
    },
    {
      id: 2,
      title: 'keyboard cat',
    },
  ],
});

afterEach(() => {
  jest.resetAllMocks();
});

it('render list after fetch', async () => {
  const state: PreloadedState = {};
  const { Root, store } = withRoot(App, state);

  const wrapper = mount(<Root />);
  wrapper.find('button[data-role="fetch"]').simulate('click');

  await new Promise(setImmediate);
  wrapper.update();

  expect(wrapper.find('li').length).toBe(2);
  expect(store.getState().comments.length).toEqual(2);
});
