import React, { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../store/todoContext';
import { addTodo } from '../store/todoActions';

const Input: React.FC = () => {
  const { dispatch } = useContext(TodoContext);
  const [value, setValue] = useState<string>('');

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (value) {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  return (
    <form onSubmit={submitHandler} className='col-6 offset-3'>
      <div className='input-group'>
        <input
          className='form-control'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='todo'
        />
        <button className='btn btn-primary border'>Add</button>
      </div>
    </form>
  );
};

export default Input;
