import React from 'react';
import './index.css';
import FavouriteCard from '../FavouriteCard';
import SmallCard from '../ProductCardSmall';
import shoes1 from '../../assest/shoes7.jpg';
import shoes2 from '../../assest/shoes8.webp';
import shoes3 from '../../assest/shoes9.webp';
import shoes4 from '../../assest/shoes10.webp';

function Favourite() {
  return (
    <div className="favourite">
      <div className="row">
        <div className="favourite-col-1">
          <FavouriteCard image={shoes3} date="14/8/2022" heading="Lorem ipsum is a placeholder text commonly..." />
          <FavouriteCard image={shoes2} date="19/8/2022" heading="Lorem ipsum is a placeholder text commonly..." />
          <FavouriteCard image={shoes4} date="12/8/2022" heading="Lorem ipsum is a placeholder text commonly..." />
        </div>
        <div className="favourite-col-2">
          <SmallCard heading="Uniform Friendly Shoes" button="Discover Now" image={shoes1} />
        </div>
      </div>
    </div>
  );
}

export default Favourite;
