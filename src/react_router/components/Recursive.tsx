/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from 'react';
import {
  Link,
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

const graph = [
  { id: 0, name: 'Adam', friends: [1, 2, 3] },
  { id: 1, name: 'Betty', friends: [2] },
  { id: 2, name: 'Charlie', friends: [1, 3] },
  { id: 3, name: 'Danny', friends: [0, 2] },
];

function findById(id: number) {
  return graph.find((p) => p.id === id);
}

const Person: React.FC = () => {
  const { url, path } = useRouteMatch();

  const { id } = useParams<{ id: string }>();
  const { friends, name } = findById(+id)!;

  return (
    <div>
      <h3>{name}&apos;s friends</h3>
      {friends.map((id) => {
        const f = findById(id)!;

        return (
          <Link key={id} to={`${url}/${f.id}`}>
            {f.name}
          </Link>
        );
      })}
      <Route path={`${path}/:id`}>
        <Person />
      </Route>
    </div>
  );
};

const Recursive: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/:id`}>
          <Person />
        </Route>
        <Redirect from='*' to={`${path}/0`} />
      </Switch>
    </div>
  );
};

export default Recursive;
