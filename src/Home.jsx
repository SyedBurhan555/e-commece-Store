import React from 'react';
import Product2 from './component/Products-2';
import Product from './component/Products';
import Header from './component/Header';
import Favourite from './component/Favourite';

function Home() {
  return (
    <div>
      <Header />
      <Product />
      <Product2 />
      <Favourite />
    </div>
  );
}

export default Home;
