// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);

//   expect(div.innerHTML).toContain('Hey there!');

//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';
import Box from '../Box/Box';
import List from '../List/List';

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a box', () => {
  expect(wrapped.find(Box).length).toEqual(1);
});

it('shows a list', () => {
  expect(wrapped.find(List).length).toEqual(1);
});
