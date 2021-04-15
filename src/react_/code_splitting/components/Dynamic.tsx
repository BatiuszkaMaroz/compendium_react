import React from 'react';

const About: React.FC = () => {
  const clickHandler = async () => {
    const n = Math.floor(Math.random() * 2) + 1;
    const module = await import(`../handlers/${n}`);

    module.clickHandler();
  };

  return (
    <div>
      <button className='btn btn-primary' onClick={clickHandler}>
        Click
      </button>
    </div>
  );
};

export default About;
