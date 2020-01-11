import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import Navbar from '../../components/Navbar/Navbar';

const Landing = () => {
  return (
    <div id='landing-wrapper'>
      <div id='landing-jumbo-wrapper'>
        <div id='landing-jumbo-header'>Statement.</div>
        <div id='landing-jumbo-body'>by naim audio.</div>
        <Link id='brands-button-wrapper' to='/brands'>
          <div id='brands-button'>Explore our brands ></div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
