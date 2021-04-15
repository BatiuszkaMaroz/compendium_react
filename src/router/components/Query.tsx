import React, { useEffect, useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

const Query: React.FC = () => {
  const [params, setParams] = useState<string[][]>([]);
  const { url } = useRouteMatch();
  const { search } = useLocation();

  useEffect(() => {
    const q = new URLSearchParams(search);
    setParams([...q]);
  }, [search]);

  return (
    <>
      <nav className='nav'>
        <Link className='nav-link' to={`${url}`}>
          None
        </Link>
        <Link className='nav-link' to={`${url}?name=adam`}>
          Name
        </Link>
        <Link className='nav-link' to={`${url}?age=69`}>
          Age
        </Link>
        <Link className='nav-link' to={`${url}?name=adam&age=69`}>
          Name_Age
        </Link>
      </nav>
      <div className='text-center'>
        {params.map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))}
      </div>
    </>
  );
};

export default Query;
