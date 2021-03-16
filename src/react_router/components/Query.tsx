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
    <div>
      <nav>
        <Link to={`${url}`}>None</Link>
        <Link to={`${url}?name=adam`}>Name</Link>
        <Link to={`${url}?age=69`}>Age</Link>
        <Link to={`${url}?name=adam&age=69`}>Name&Age</Link>
      </nav>
      <section>
        {params.map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Query;
