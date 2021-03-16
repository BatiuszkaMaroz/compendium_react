import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useSelector';

import { login, logout } from './store/actions/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const username = useTypedSelector((s) => s.auth.username);

  const [value, setValue] = useState<string>('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username) {
      dispatch(logout());
      return;
    }

    if (value) {
      dispatch(login(value));
      setValue('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='name'>Username:</label>
      <input
        id='name'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button>{username ? 'logout' : 'login'}</button>
    </form>
  );
};

export default App;
