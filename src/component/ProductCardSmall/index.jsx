/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './index.css';

// eslint-disable-next-line object-curly-spacing, react/prop-types
function SmallCard({image, button, heading}) {
  return (
    <div className="small-card">
      <div className="col-1">
        <h1>{heading}</h1>
        <span />
        <a href="/">{button} &#8594;</a>
      </div>
      <div className="col-2">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default SmallCard;
