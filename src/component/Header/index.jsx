/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
// import Navbar from '../Navbar';
import './index.css';

function Header() {
  return (
    <div className="header">
      <span className="hr" />
      <div className="header-row">
        <h4>Men</h4>
        <h4>Women</h4>
        <h4>Kids</h4>
        <h4>NewArrivals</h4>
        <h4>Skate</h4>
        <h4>Latest</h4>
        <h4>#HouseOfVans</h4>
      </div>
      <div className="header-content">
        <h1>VANS IS OLD SKOOL</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci incidunt porro! Laborum facilis, ex voluptatem vitae dolor molestias commodi perferendis</p>
        <a href="/">Discover Now &#8594;</a>
      </div>
    </div>
  );
}

export default Header;
