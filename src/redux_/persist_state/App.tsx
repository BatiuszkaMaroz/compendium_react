import React, { useState } from 'react';
import { add, getTodos, remove, toggle } from './store/todosSlice';
import { useSelector, useDispatch } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');
  const posts = useSelector(getTodos);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (input) {
      dispatch(add(input));
      setInput('');
    }
  };

  const removeHandler = (id: string) => {
    dispatch(remove(id));
  };

  const toggleHandler = (id: string) => {
    dispatch(toggle(id));
  };

  return (
    <div className='container mt-3'>
      <div className='col-6 offset-3'>
        <form onSubmit={submitHandler} className='input-group mb-3'>
          <input
            className='form-control'
            onChange={(e) => setInput(e.target.value)}
            type='text'
            value={input}
          />
          <button className='btn btn-primary'>Add</button>
        </form>
        <ul className='list-group'>
          {posts.map((p) => (
            <li
              key={p.id}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              <span>{p.value}</span>
              <div className='btn-group'>
                <div
                  onClick={() => toggleHandler(p.id)}
                  className={'btn ' + (p.done ? 'btn-success' : 'btn-warning')}
                >
                  {p.done ? 'Done' : 'Undone'}
                </div>
                <button
                  onClick={() => removeHandler(p.id)}
                  className='btn btn-danger'
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
