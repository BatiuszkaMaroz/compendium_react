import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import classnames from 'classnames';

import Private from './components/Private';
import Public from './components/Public';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const privClass = classnames('nav-link', { 'text-danger': !isAuth });
  const btnClass = classnames(
    'btn',
    { 'btn-danger': isAuth },
    { 'btn-primary': !isAuth },
  );

  const authHandler = () => {
    setIsAuth((val) => !val);
  };

  return (
    <>
      <nav className='nav mb-3'>
        <Link className='nav-link' to='/'>
          Public
        </Link>
        <Link className={privClass} to='/private'>
          Private
        </Link>
        <li className='nav-item'>
          <button className={btnClass} onClick={authHandler}>
            {isAuth ? 'Logout' : 'Login'}
          </button>
        </li>
      </nav>
      <div className='container text-center'>
        <Switch>
          <Route exact path='/'>
            <Public />
          </Route>
          <Route path='/private'>
            <Private isAuth={isAuth} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
