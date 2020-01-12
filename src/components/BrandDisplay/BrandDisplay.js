import React from 'react';

import './styles.css';

const BrandDisplay = props => {
  let logoWrapperID;
  if (props.logoWrapperID) {
    logoWrapperID = props.logoWrapperID;
  } else {
    logoWrapperID = null;
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
      {/* <div className='brand-name'>{props.brandName}</div> */}
    </div>
  );
};

export default BrandDisplay;
