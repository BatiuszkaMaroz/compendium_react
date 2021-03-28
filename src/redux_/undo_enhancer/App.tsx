import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  add, //
  remove,
  selectTodo,
  // undo,
  // redo,
} from './store/todoSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { future, list, past } = useSelector(selectTodo);
  const [value, setValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value) {
      dispatch(add(value));
      setValue('');
    }
  };

  const undoHandler = () => {
    // dispatch(undo());
    dispatch({ type: 'todo/undo' });
  };

  const redoHandler = () => {
    // dispatch(redo());
    dispatch({ type: 'todo/redo' });
  };

  const removeHandler = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-6 offset-3'>
          <form className='mb-3' onSubmit={onSubmit}>
            <div className='input-group'>
              <input
                className='form-control'
                onChange={(e) => setValue(e.target.value)}
                placeholder='todo'
                value={value}
              />
              <button className='btn btn-primary'>Add</button>
            </div>
          </form>
          <div className='mb-3'>
            <ul className='list-group'>
              {list.map((t) => (
                <li
                  key={nanoid()}
                  className='list-group-item d-flex justify-content-between'
                >
                  <span>{t.value}</span>
                  <button
                    onClick={() => removeHandler(t.id)}
                    className='btn btn-close'
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <div className='btn-group d-flex justify-content-center'>
            <button
              className='btn btn-success'
              disabled={!past}
              onClick={undoHandler}
            >
              &larr; Undo
            </button>
            <button
              className='btn btn-danger'
              disabled={!future}
              onClick={redoHandler}
            >
              Redo &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
