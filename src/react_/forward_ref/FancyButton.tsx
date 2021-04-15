import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLButtonElement> {}

const WrappedComponent = React.forwardRef<HTMLButtonElement, Props>(
  function FancyButton({ children }, ref) {
    return (
      <button className='btn btn-primary' ref={ref}>
        {children}
      </button>
    );
  },
);

export default WrappedComponent;
