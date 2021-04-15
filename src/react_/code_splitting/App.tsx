import React, { Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';

const Dynamic = React.lazy(() => import('./components/Dynamic'));
const Error = React.lazy(() => import('./components/Error'));
const Home = React.lazy(() => import('./components/Home'));

const App: React.FC = () => {
  return (
    <>
      <nav className='nav mb-3'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
        <Link className='nav-link' to='/dynamic'>
          Dynamic
        </Link>
        <Link className='nav-link' to='/error'>
          Error
        </Link>
      </nav>
      <div className='container d-flex justify-content-center'>
        <Suspense fallback={<Spinner />}>
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
      </div>
    </>
  );
};

export default App;
