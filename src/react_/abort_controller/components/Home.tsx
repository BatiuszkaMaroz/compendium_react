import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsername('john_doe');
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const renderContent = () => {
    if (!username) {
      return <div className='spinner-border text-primary' />;
    } else {
      return <p>user: {username}</p>;
    }
  };

  return (
    <>
      <h3 className='mb-3'>Home</h3>
      {renderContent()}
    </>
  );
};

export default Home;
