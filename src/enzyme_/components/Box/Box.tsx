import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, fetch } from '../../store/commentsSlice';

const Box: React.FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (input) {
      dispatch(add(input));
      setInput('');
    }
  };

  const fetchHandler = () => {
    dispatch(fetch());
  };

  return (
    <>
      <form onSubmit={submitHandler} className='col-6 offset-3 mb-3'>
        <div className='input-group'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Your comment'
            type='text'
            className='form-control'
          />
          <button className='btn btn-primary'>Add</button>
        </div>
      </form>
      <button
        onClick={fetchHandler}
        className='btn btn-success'
        data-role='fetch'
      >
        Fetch
      </button>
    </>
  );
};

export default Box;
