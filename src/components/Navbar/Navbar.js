import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <div id='nav-wrapper'>
      <Link id='brand-item' to='/'>
        Handmade Audio
      </Link>
      <ul id='nav-list'>
        <li className='nav-item'>
          <Link className='nav-link' to='/brands'>
            Brands
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </li>
        <li className='mobile-nav-item'>
          <Link className='mobile-nav-link' to='/brands'>
            <i className='fas fa-tag'></i>
          </Link>
        </li>
        <li className='mobile-nav-item'>
          <Link className='mobile-nav-link' to='/contact'>
            <i className='fas fa-envelope'></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
