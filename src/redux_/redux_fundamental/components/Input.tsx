import React, { HTMLProps } from 'react';
import { nanoid } from '@reduxjs/toolkit';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const Input: React.FC<Props> = ({ children, label, ...props }) => {
  const id = nanoid();

  return (
    <>
      <label className='form-label' htmlFor={id}>
        {label}
      </label>
      <input className='form-control' id={id} {...props} />
    </>
  );
};

export default Input;
