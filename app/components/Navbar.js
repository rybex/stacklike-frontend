import React from 'react';

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'><a className='navbar-link' href='/'>Stacklike questions</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
