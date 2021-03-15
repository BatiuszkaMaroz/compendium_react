import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Private from './components/Private';
import Public from './components/Public';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const authHandler = () => {
    setIsAuth((val) => !val);
  };

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/public'>Public</Link>&nbsp;
        <Link to='/private'>Private</Link>
      </nav>
      <Switch>
        <Route path='/public'>
          <Public />
        </Route>
        <Route path='/private'>
          <Private isAuth={isAuth} />
        </Route>
      </Switch>
      <button onClick={authHandler}>{isAuth ? 'Logout' : 'Login'}</button>
    </div>
  );
};

export default App;
