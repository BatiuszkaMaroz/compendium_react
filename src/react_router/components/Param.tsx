/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from 'react';
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Boundary from '../hoc/ErrorBoundary';

const art = [
  { id: 0, title: 'rose', color: '	#F92A82' },
  { id: 1, title: 'light coral', color: '	#ED7B84' },
  { id: 2, title: 'champagne pink', color: '	#F5DBCB' },
];

const ParamChild: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { title, color } = art.find((e) => e.id === +id)!;

  return (
    <div className='color' style={{ background: color }}>
      {title}
    </div>
  );
};

const Param: React.FC = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <nav>
        <Link to={`${url}`}>Home</Link>
        <Link to={`${url}/about`}>About</Link>
        <Link to={`${url}/0`}>Color 0</Link>
        <Link to={`${url}/1`}>Color 1</Link>
        <Link to={`${url}/2`}>Color 2</Link>
        <Link to={`${url}/3`}>Color 3</Link>
      </nav>
      <section>
        <Switch>
          <Route path={`${path}/about`}>
            <div>About</div>
          </Route>
          <Route path={`${path}/:id`}>
            <Boundary errorPath={`${path}`}>
              <ParamChild />
            </Boundary>
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Param;
