import React          from 'react';
import { withRouter } from 'react-router-dom';

import './Navbar.css'

const Navbar = ({history}) => {
  const handleOnClick = () => {
    history.push('/');
  }

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <a className='navbar-link' href='#' onClick={handleOnClick}>Stacklike questions</a>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
