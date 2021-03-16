import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedRoute from './components/AnimatedRoute';

import Switch from './components/Switch';
import Group from './components/Group';
import Home from './components/Home';

// const Home = React.lazy(() => import('./components/Home'));
// const Group = React.lazy(() => import('./components/Group'));
// const Switch = React.lazy(() => import('./components/Switch'));

const App: React.FC = () => {
  return (
    <main>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/switch'>Switch</Link>
        <Link to='/group'>Group</Link>
      </nav>
      <section>
        <AnimatedRoute path='/'>
          <Home />
        </AnimatedRoute>
        <AnimatedRoute path='/switch'>
          <Switch />
        </AnimatedRoute>
        <AnimatedRoute path='/group'>
          <Group />
        </AnimatedRoute>
      </section>
    </main>
  );
};

export default App;
