import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

const Level1: React.FC<{ n: number }> = ({ children, n }) => {
  const [error, setError] = useState<boolean>(false);

  const clickHandler = () => {
    setError(true);
  };

  const renderChildren = () => (
    <div className='mt-3'>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );

  if (error) {
    throw 'Render error';
  }

  return (
    <div className='px-5'>
      <h1>Level - {n}</h1>
      <button className='btn btn-danger' onClick={clickHandler}>
        Do not click
      </button>
      {children && renderChildren()}
    </div>
  );
};

export default Level1;
