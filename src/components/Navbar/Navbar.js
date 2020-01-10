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
          <a className='mobile-nav-link' href='#'>
            <i className='fas fa-tag'></i>
          </a>
        </li>
        <li className='mobile-nav-item'>
          <a className='mobile-nav-link' href='#'>
            <i className='fas fa-envelope'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
