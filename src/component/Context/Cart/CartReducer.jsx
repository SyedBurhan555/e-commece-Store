/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-undef */
import {
 ADD_TO_CART, REMOVE_ITEM, INCREASE, DECREASE, CHECKOUT, CLEAR,
} from './CartType';

function Storage(cartItems) {
  localStorage.setItem(
    'cartItems',
    JSON.stringify(cartItems.length > 0 ? cartItems : []),
  );
}

export const sumItems = (cartItems) => {
  Storage(cartItems);
  const itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

function CartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id),
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    case INCREASE:
        state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
      case DECREASE:
        state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
      case CHECKOUT:
        return {
            cartItems: [],
            checkout: true,
            ...sumItems([]),
        };
        case CLEAR:
        return {
            cartItems: [],
            ...sumItems([]),
        };
    default:
      return state;
  }
}
export default CartReducer;
