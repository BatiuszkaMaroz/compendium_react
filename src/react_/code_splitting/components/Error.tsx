import React, { useState } from 'react';

const Error: React.FC = () => {
  const [error, setError] = useState<boolean>(false);

  const clickHandler = () => {
    setError(true);
  };

  if (error) {
    throw 'Render error';
  } else {
    return <button onClick={clickHandler}>Don&apos;t click</button>;
  }
};

export default Error;
