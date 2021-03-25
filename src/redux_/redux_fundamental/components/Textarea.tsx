import React, { HTMLProps } from 'react';
import { nanoid } from '@reduxjs/toolkit';

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
}

const Textarea: React.FC<Props> = ({ children, label, ...props }) => {
  const id = nanoid();

  return (
    <>
      <label className='form-label' htmlFor={id}>
        {label}
      </label>
      <textarea className='form-control' id={id} {...props} />
    </>
  );
};

export default Textarea;
