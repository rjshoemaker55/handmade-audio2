import React from 'react';

import './styles.css';

import Navbar from '../../components/Navbar/Navbar';

const Landing = () => {
  return (
    <div id='landing-wrapper'>
      <div id='landing-jumbo-wrapper'>
        <div id='landing-jumbo-header'>Statement.</div>
        <div id='landing-jumbo-body'>by naim audio.</div>
        <a id='brands-button-wrapper' href='#'>
          <div id='brands-button'>Explore our brands ></div>
        </a>
      </div>
    </div>
  );
};

export default Landing;
