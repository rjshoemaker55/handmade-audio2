import React from 'react';
import './styles.css';

const brandsList = require('../../brandList.json');

const Brands = () => {
  const divStyle = src => ({
    backgroundImage: 'url(' + src + ')'
  });
  return (
    <div id='brands-page-wrapper'>
      {brandsList.brands.map(brand => {
        return <div style={divStyle(brand.bgImage)}>{brand.name}</div>;
      })}
    </div>
  );
};

export default Brands;
