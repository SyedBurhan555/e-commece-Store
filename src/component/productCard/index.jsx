/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './index.css';
import CartContext from '../Context/Cart/CartContext';

// eslint-disable-next-line object-curly-spacing
function ProductCard({data}) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card">
      <div className="card-content" key={data.id}>
        <img src={data.image} alt="" />
        <h4>{data.name}</h4>
        <h5>Size:{data.size}</h5>
        <span />
        <p>$ {data.price}</p>
      </div>
      <div className="card-top">
        <i className="far fa-shopping-cart" onClick={() => addToCart(data)} />
      </div>
    </div>
  );
}

export default ProductCard;
