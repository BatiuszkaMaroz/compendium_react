import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Navbar: React.FC = () => {
  const id = nanoid();

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Home
        </Link>
        <button
          className='navbar-toggler'
          data-bs-toggle='collapse'
          data-bs-target={`#${id}`}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-md-end'
          id={id}
        >
          <nav className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/switch'>
                Switch
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/group'>
                Group
              </NavLink>
            </li>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
