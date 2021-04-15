import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary sticky-top shadow-sm'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Json Poster
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/form'>
                Form
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
