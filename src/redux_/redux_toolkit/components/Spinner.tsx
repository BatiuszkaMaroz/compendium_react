import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
      <p className='text-primary'>data fetching...</p>
    </div>
  );
};

export default Spinner;
