import React, { FormEvent, useContext, useState } from 'react';
import { AppContext } from '../store/AppContext';
import { AT } from '../store/AppReducer';

const Input: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const [value, setValue] = useState<string>('');

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (value) {
      dispatch({ type: AT.ADD, todo: value });
    }

    setValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default Input;
