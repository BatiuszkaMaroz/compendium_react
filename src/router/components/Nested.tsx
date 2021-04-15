import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const Nested: React.FC = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <nav className='nav mb-3'>
        <Link className='nav-link' to={`${url}`}>
          Home
        </Link>
        <Link className='nav-link' to={`${url}/profile`}>
          Profile
        </Link>
        <Link className='nav-link' to={`${url}/info`}>
          Info
        </Link>
      </nav>
      <div className='text-center'>
        <Switch>
          <Route path={`${path}`} exact>
            Home
          </Route>
          <Route path={`${path}/profile`}>Profile</Route>
          <Route path={`${path}/info`}>Info</Route>
        </Switch>
      </div>
    </div>
  );
};

export default Nested;
