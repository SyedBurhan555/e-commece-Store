/* eslint-disable-next-line linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CartState from './component/Context/Cart/CartState';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartState>
      <App />
    </CartState>
  </BrowserRouter>,
);
