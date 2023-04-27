/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

// eslint-disable-next-line object-curly-spacing, object-curly-newline
function FavouriteCard({image, heading, date}) {
  return (
    <div className="favourite-card">
      <div className="favourite-card-top">
        <span>{date}</span>
        <i className="fa fa-heart">  12</i>
      </div>
      <div className="favourite-card-content">
        <img src={image} alt="" />
        <p>{heading}</p>
        <span />
        <a href="/">Read More..</a>
      </div>
    </div>
  );
}

export default FavouriteCard;
