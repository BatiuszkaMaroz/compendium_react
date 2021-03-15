import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLButtonElement> {}

const WrappedComponent = React.forwardRef<HTMLButtonElement, Props>(
  function FancyButton({ children }, ref) {
    return <button ref={ref}>{children}</button>;
  },
);

export default WrappedComponent;
