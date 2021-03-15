import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const Nested: React.FC = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <nav>
        <Link to={`${url}/`}>Home</Link>
        <Link to={`${url}/profile`}>Profile</Link>
        <Link to={`${url}/info`}>Info</Link>
      </nav>
      <section>
        <Switch>
          <Route path={`${path}/profile`}>Profile</Route>
          <Route path={`${path}/info`}>Info</Route>
        </Switch>
      </section>
    </div>
  );
};

export default Nested;
