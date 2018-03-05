import React          from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes      from 'prop-types';

import './Navbar.css';

const Navbar = ({user, history}) => {
  var userItem = null;
  const handleOnClick = () => {
    history.push('/');
  }

  if(user) {
    userItem = (
      <li className='navbar-item' style={{float: 'right'}}>
        <img className='avatar' src={user.image} />
        <a className='navbar-link' href={`${process.env.API_URL}/signout?redirect_url=${process.env.REDIRECT_URL}`}>Logout</a>
      </li>
    )
  } else {
    userItem = (
      <li className='navbar-item' style={{float: 'right'}}>
        <a className='navbar-link' href={`${process.env.API_URL}/auth/google_oauth2?redirect_url=${process.env.REDIRECT_URL}`}>Login</a>
      </li>
    )
  }

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <a className='navbar-link' href='#' onClick={handleOnClick}>Stacklike questions</a>
        </li>
        {userItem}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
};

export default withRouter(Navbar);
