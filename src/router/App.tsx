import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Custom from './components/Custom';
import Nested from './components/Nested';
import Param from './components/Param';
import Prevent from './components/Prevent';
import Query from './components/Query';
import Recursive from './components/Recursive';

const App: React.FC = () => {
  return (
    <>
      <nav className='nav nav-pills mb-3'>
        <NavLink className='nav-link' to='/' exact>
          Home
        </NavLink>
        <NavLink className='nav-link' to='/nested'>
          Nested
        </NavLink>
        <NavLink className='nav-link' to='/param'>
          Param
        </NavLink>
        <NavLink className='nav-link' to='/query'>
          Query
        </NavLink>
        <NavLink className='nav-link' to='/recursive'>
          Recursive
        </NavLink>
        <NavLink className='nav-link' to='/custom'>
          Custom
        </NavLink>
        <NavLink className='nav-link' to='/prevent'>
          Prevent
        </NavLink>
        <NavLink className='nav-link' to='/any/path/that/does/not/exist'>
          Redirect
        </NavLink>
      </nav>
      <div className='container'>
        <Switch>
          <Route path='/' exact>
            <div>
              <h3>Other:</h3>
              <ul>
                <li>Private Route Redirect in &apos;react/hoc&apos;</li>
                <li>Manual scroll restoration (hook or hoc)</li>
              </ul>
              <h3>Todo:</h3>
              <ul>
                <li>Nested params /:r/:g/:b</li>
              </ul>
            </div>
          </Route>
          <Route path='/nested' component={Nested} />
          <Route path='/param' component={Param} />
          <Route path='/query' component={Query} />
          <Route path='/recursive' component={Recursive} />
          <Route path='/custom' component={Custom} />
          <Route path='/prevent' component={Prevent} />
          <Redirect to='/' />
        </Switch>
      </div>
    </>
  );
};

export default App;
