import React, { Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Dynamic = React.lazy(() => import('./components/Dynamic'));
const Error = React.lazy(() => import('./components/Error'));
const Home = React.lazy(() => import('./components/Home'));

import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/dynamic'>Dynamic</Link>
        <Link to='/error'>Error</Link>
      </nav>
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dynamic' component={Dynamic} />
          <Route path='/error'>
            <ErrorBoundary>
              <Error />
            </ErrorBoundary>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
