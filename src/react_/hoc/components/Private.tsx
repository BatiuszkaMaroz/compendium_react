import React from 'react';
import IsAuth from './IsAuth';

const Private: React.FC = () => {
  return <h3>Private</h3>;
};

export default IsAuth(Private);
