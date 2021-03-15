import React, { useContext } from 'react';
import { nanoid } from 'nanoid';

import { AppContext } from '../store/AppContext';
import { AT } from '../store/AppReducer';

const List: React.FC = () => {
  const {
    dispatch,
    state: { todos },
  } = useContext(AppContext);

  const removeHandler = (idx: number) => {
    dispatch({ type: AT.REMOVE, idx });
  };

  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={nanoid()}>
          <p>{todo}</p>
          <button onClick={() => removeHandler(idx)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
