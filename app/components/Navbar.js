import React from 'react';

import './Navbar.css'

const Navbar = () => {
  return (
    <div id='nav' className='pure-u'>
        <a href='#' className='nav-menu-button'>Menu</a>

        <div className='nav-inner'>
            <button className='primary-button pure-button'>Compose</button>

            <div className='pure-menu'>
                <ul className='pure-menu-list'>
                    <li className='pure-menu-heading'>Labels</li>
                    <li className='pure-menu-item'>
                      <a href='#' className='pure-menu-link'>
                        <span className='question-label-personal'></span>All
                      </a>
                      <a href='#' className='pure-menu-link'>
                        <span className='question-label-personal'></span>Personal
                      </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
