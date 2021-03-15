import React from 'react';
import { useParams } from 'react-router-dom';

const Param: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Param {id}</div>;
};

export default Param;
