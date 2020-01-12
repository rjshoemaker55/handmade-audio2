import React from 'react';

import './styles.css';

const Contact = () => {
  return (
    <div id='contact-wrapper'>
      <div id='contact-header'>Contact</div>
      <div id='contact-info-wrapper'>
        <div className='contact-row'>
          <i class='fas fa-phone contact-row-icon'></i>
          <div className='contact-row-text'>(609) 273-6804</div>
        </div>
        <div className='contact-row'>
          <i class='far fa-envelope'></i>
          <div className='contact-row-text'>mpacholick@gmail.com</div>
        </div>
        <div className='contact-row'>
          <div className='contact-row-text'>Flemington, NJ</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
