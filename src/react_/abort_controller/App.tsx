import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import List from './components/List';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className='container'>
      <nav className='nav nav-pills mb-3'>
        <NavLink className='nav-link' to='/' exact>
          Home
        </NavLink>
        <NavLink className='nav-link' to='/about'>
          List
        </NavLink>
      </nav>
      <div className='text-center'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={List} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
