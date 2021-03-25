import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

const Level1: React.FC<{ n: number }> = ({ children, n }) => {
  const [error, setError] = useState<boolean>(false);

  const clickHandler = () => {
    setError(true);
  };

  const renderChildren = () => (
    <div>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );

  if (error) {
    throw 'Render error';
  }

  return (
    <div style={{ marginLeft: `${n * 30}px` }}>
      <h1>Level - {n}</h1>
      <button onClick={clickHandler}>Don&apos;t click</button>
      {children && renderChildren()}
    </div>
  );
};

export default Level1;
