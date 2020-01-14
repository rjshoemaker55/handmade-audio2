import React from 'react';
import { Link } from 'react-router-dom';

import soundwaveLogoWhite from '../../assets/images/logos/Soundwave_logo_white.png';
import soundwaveLogoBlack from '../../assets/images/logos/Soundwave_logo-black.png';

import './styles.css';

const Navbar = () => {
  return (
    <div id='nav-wrapper'>
      <Link to='/'>
        <img
          className='handmade-logo'
          id='handmade-logo-white'
          src={soundwaveLogoWhite}
        />
      </Link>
      <Link to='/'>
        <img
          className='handmade-logo'
          id='handmade-logo-black'
          src={soundwaveLogoBlack}
        />
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
      <div id='appointment-text'>Demonstrations by appointment.</div>
    </div>
  );
};

export default Navbar;
