import React, { HTMLProps } from 'react';
import { nanoid } from '@reduxjs/toolkit';

interface Props extends HTMLProps<HTMLSelectElement> {
  label: string;
  options: { name: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
}

const Select: React.FC<Props> = ({ children, label, options, ...props }) => {
  const id = nanoid();

  return (
    <>
      <label className='form-label' htmlFor={id}>
        {label}
      </label>
      <select className='form-select' id={id} {...props}>
        <option defaultChecked></option>
        {options.map((o) => (
          <option key={nanoid()} value={o.value}>
            {o.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
