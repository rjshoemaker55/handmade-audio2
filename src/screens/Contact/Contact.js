import React from 'react';

import './styles.css';

const Contact = () => {
  return (
    <div id='contact-wrapper'>
      <div id='contact-header'>Contact</div>
      <div id='contact-info-wrapper'>
        <div className='contact-row'>
          <i class='fas fa-phone contact-row-icon'></i>
          <div className='contact-row-text'>908-555-5555</div>
        </div>
        <div className='contact-row'>
          <i class='far fa-envelope'></i>
          <div className='contact-row-text'>mike@fiajf.kadifj</div>
        </div>
        <div className='contact-row'>
          <i class='fas fa-location-arrow'></i>
          <div className='contact-row-text'>Flemington, NJ</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
