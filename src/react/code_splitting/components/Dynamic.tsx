import React from 'react';

const About: React.FC = () => {
  const clickHandler = async () => {
    const no = Math.floor(Math.random() * 2) + 1;
    const module = await import(`../handlers/${no}`);

    module.clickHandler();
  };

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default About;
