import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import List from './components/List';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to='/'>List</Link>
        <Link to='/form'>Form</Link>
      </nav>
      <main>
        <Switch>
          <Route path='/' exact component={List} />
          <Route path='/form' exact component={Form} />
          <Redirect to='/' />
        </Switch>
      </main>
    </div>
  );
};

export default App;
