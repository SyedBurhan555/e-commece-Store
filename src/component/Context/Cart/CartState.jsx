/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
import React, { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer, { sumItems } from './CartReducer';

const storage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

function CartState({children}) {
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  function addToCart(payload) {
    dispatch({type: 'ADD_TO_CART', payload});
  }
  function increase(payload) {
    dispatch({type: 'INCREASE', payload});
  }
  function decrease(payload) {
    dispatch({type: 'DECREASE', payload});
  }
  function removeFromCart(payload) {
    dispatch({type: 'REMOVE_ITEM', payload});
  }
  function clearCart() {
    dispatch({type: 'CLEAR'});
  }
  function handleCheckout() {
    dispatch({type: 'CHECKOUT'});
  }
  return (
    <CartContext.Provider value={{
      showCart: state.showCart,
      cartItems: state.cartItems,
      addToCart,
      removeFromCart,
      increase,
      decrease,
      handleCheckout,
      clearCart,
      ...state,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartState;
