import React from 'react';
import { TodoContext } from './store/todoContext';
import { useTodoReducer } from './store/todoReducer';

import Input from './components/Input';
import List from './components/List';

const App: React.FC = () => {
  const [state, dispatch] = useTodoReducer();

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className='container'>
        <div className='my-5'>
          <Input />
        </div>
        <List />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
