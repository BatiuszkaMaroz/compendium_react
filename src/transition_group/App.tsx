import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedRoute from './components/AnimatedRoute';
import Navbar from './components/Navbar';

import Switch from './components/Switch';
import Group from './components/Group';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5 position-relative'>
        <AnimatedRoute path='/'>
          <Home />
        </AnimatedRoute>
        <AnimatedRoute path='/switch'>
          <Switch />
        </AnimatedRoute>
        <AnimatedRoute path='/group'>
          <Group />
        </AnimatedRoute>
      </div>
    </>
  );
};

export default App;
