import React, { useReducer } from 'react';
import { AppContext } from './store/AppContext';
import { reducer, defaultState } from './store/AppReducer';

import Input from './components/Input';
import List from './components/List';

const App: React.FC = () => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, defaultState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Input />
      <List />
    </AppContext.Provider>
  );
};

export default App;
