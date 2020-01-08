import React from 'react';

import './styles.css';

const Navbar = () => {
  return (
    <div id='nav-wrapper'>
      <ul id='nav-list'>
        <li id='brand-item' className='nav-item'>
          Handmade Audio
        </li>
        <li className='nav-item'>Brands</li>
        <li className='nav-item'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
