import React, { Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const Dynamic = React.lazy(() => import('./components/Dynamic'));
const Error = React.lazy(() => import('./components/Error'));

import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/dynamic'>Dynamic</Link>&nbsp;
        <Link to='/error'>Error</Link>
      </header>
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          <Route path='/' exact={true} component={Home} />
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
