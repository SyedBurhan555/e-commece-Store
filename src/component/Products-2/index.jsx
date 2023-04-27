import React from 'react';
import './index.css';
import shirt1 from '../../assest/shirt2.jpg';
import shirt2 from '../../assest/shirt3.webp';
import SmallCard from '../ProductCardSmall';

function Products2() {
  return (
    <div className="product-card-2">
      <div className="row">
        <div className="product-col-1">
          <SmallCard image={shirt1} heading="This Season's Must-Haves" button="Discover Now" />
        </div>
        <div className="product-col-2">
          <SmallCard image={shirt2} button="Shop Now" heading="New Arrival Pro Skate" />
        </div>
      </div>
    </div>
  );
}

export default Products2;
