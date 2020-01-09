import React from 'react';

import './styles.css';

const Navbar = () => {
  return (
    <div id='nav-wrapper'>
      <ul id='nav-list'>
        <li id='brand-item'>Handmade Audio</li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Brands
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
