import React from 'react';
import './styles.css';

import BrandDisplay from '../../components/BrandDisplay/BrandDisplay';

import naimLogo from '../../assets/images/logos/naim_logo.jpeg';
import focalLogo from '../../assets/images/logos/focal_logo.png';
import isoAcousticsLogo from '../../assets/images/logos/iso_acoustics_logo.png';
import credoLogo from '../../assets/images/logos/credo_audio.png';
import emmlabsLogo from '../../assets/images/logos/emmlabs_logo.jpeg';

const Brands = () => {
  return (
    <div id='brands-page-wrapper'>
      <BrandDisplay
        brandId='naim-brand'
        brandURL='http://www.naimaudio.com'
        logoURL={naimLogo}
        logoAlt='Naim Logo'
        logoID='naim-logo'
        brandName='Naim Audio'
      />
      <BrandDisplay
        brandId='focal-brand'
        brandURL='http://www.focalaudio.com'
        logoURL={focalLogo}
        logoAlt='Focal Logo'
        logoID='focal-logo'
        brandName='Focal Audio'
      />
      <BrandDisplay
        brandId='iso-acoustics-brand'
        brandURL='http://www.isoacoustics.com'
        logoURL={isoAcousticsLogo}
        logoAlt='ISO Acoustics Logo'
        logoID='iso-acoustics-logo'
        brandName='ISO Acoustics'
      />
      <BrandDisplay
        brandId='credo-audio-brand'
        brandURL='https://www.credo-audio.ch/credo-loudspeakers-en.html'
        logoURL={credoLogo}
        logoAlt='Credo Audio Logo'
        logoID='credo-audio-logo'
        brandName='Credo Audio'
        logoWrapperID='credo-logo-wrapper'
      />
      <BrandDisplay
        brandId='emmlabs-brand'
        brandURL='http://www.emmlabs.com'
        logoURL={emmlabsLogo}
        logoAlt='EmmLabs Logo'
        logoID='emmlabs-logo'
        brandName='Emmlabs'
        logoWrapperID='emmlabs-logo-wrapper'
      />
    </div>
  );
};

export default Brands;
