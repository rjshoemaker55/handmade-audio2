import React from 'react';

import './styles.css';

const BrandDisplay = (props) => {
  let logoWrapperID;
  let scrollDisplay;

  if (props.logoWrapperID) {
    logoWrapperID = props.logoWrapperID;
  } else {
    logoWrapperID = null;
  }

  if (props.brandId === 'chord-brand') {
    scrollDisplay = 'hide';
  } else {
    scrollDisplay = 'scroll-wrapper';
  }

  return (
    <div id={props.brandId} className='brand-wrapper'>
      <a
        id={logoWrapperID}
        className='brand-logo-wrapper'
        href={props.brandURL}
        target='_blank'
      >
        <img
          id={props.brandId}
          id={props.logoID}
          className='brand-logo'
          src={props.logoURL}
          alt={props.logoAlt}
        />
        <div className='brand-visit-link'>click to visit site</div>
      </a>
      <div className={scrollDisplay}>
        <div className='scroll-text'>Scroll for more.</div>
        <div className='scroll-arrow-wrapper'>
          <i className='fas fa-arrow-down'></i>
        </div>
      </div>
    </div>
  );
};

export default BrandDisplay;
