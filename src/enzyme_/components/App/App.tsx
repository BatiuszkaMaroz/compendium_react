import React from 'react';

import Box from '../Box/Box';
import List from '../List/List';

const App: React.FC = () => {
  return (
    <div className='container text-center'>
      <h3>Comment Box</h3>
      <div className='mt-3'>
        <Box />
      </div>
      <div className='mt-3'>
        <List />
      </div>
    </div>
  );
};

export default App;
