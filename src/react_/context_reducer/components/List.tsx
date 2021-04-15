import React, { useContext } from 'react';

import { TodoContext } from '../store/todoContext';
import { removeTodo } from '../store/todoActions';

const List: React.FC = () => {
  const {
    dispatch,
    state: { list },
  } = useContext(TodoContext);

  const removeHandler = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul className='list-group list-group-flush col-6 offset-3'>
      {list.map((todo) => (
        <li
          className='list-group-item d-flex justify-content-between align-items-center'
          key={todo.id}
        >
          <div className='fw-bold'>{todo.value}</div>
          <button
            className='btn btn-danger'
            onClick={() => removeHandler(todo.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
