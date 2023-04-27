/* eslint-disable max-len */
import React from 'react';
import ProductCard from '../productCard';
import './index.css';
import { products } from '../DammyData';

function Product() {
  // console.log(products[0]);

  return (
    <div className="products">
      <h1>FEATURED PRODUCTS</h1>
      <div className="product-card">
        {products.map((data) => <ProductCard data={data} key={data.id} />)}
        {/* <ProductCard image={products[0].image} heading={products[0].name} price={products[0].price} />
        <ProductCard image={products[1].image} heading={products[1].name} price={products[1].price} />
        <ProductCard image={products[2].image} heading={products[2].name} price={products[2].price} />
        <ProductCard image={products[3].image} heading={products[3].name} price={products[3].price} />
        <ProductCard image={products[4].image} heading={products[4].name} price={products[4].price} />
        <ProductCard image={products[11].image} heading={products[11].name} price={products[11].price} /> */}
      </div>
    </div>
  );
}

export default Product;
