import React from 'react';

import './styles.css';

import Navbar from '../../components/Navbar/Navbar';

const Landing = () => {
  return (
    <div id='landing-wrapper'>
      <Navbar />
      <div id='statement-text'>Statement.</div>
    </div>
  );
};

export default Landing;
