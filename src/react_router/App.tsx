import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Custom from './components/Custom';
import Nested from './components/Nested';
import Param from './components/Param';
import Prevent from './components/Prevent';
import Recursive from './components/Recursive';

const App: React.FC = () => {
  return (
    <main>
      <nav>
        <NavLink to='/' exact>
          Home
        </NavLink>
        <NavLink to='/nested'>Nested</NavLink>
        <NavLink to='/custom'>Custom</NavLink>
        <NavLink to='/prevent'>Prevent</NavLink>
        <NavLink to='/recursive'>Recursive</NavLink>
        <NavLink to='/param/1'>Param1</NavLink>
        <NavLink to='/param/2'>Param2</NavLink>
        <NavLink to='/redirect'>Redirect</NavLink>
      </nav>
      <section>
        <Switch>
          <Route path='/' exact>
            <div>Home</div>
          </Route>
          <Route path='/nested'>
            <Nested />
          </Route>
          <Route path='/custom'>
            <Custom />
          </Route>
          <Route path='/prevent'>
            <Prevent />
          </Route>
          <Route path='/recursive'>
            <Recursive />
          </Route>
          <Route path='/param/:id'>
            <Param />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </section>
    </main>
  );
};

export default App;
