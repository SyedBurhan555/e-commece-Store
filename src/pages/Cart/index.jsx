import React, { useContext, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import CartContext from "../../component/Context/Cart/CartContext";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    cartItems,
    removeFromCart,
    increase,
    decrease,
    itemCount,
    total,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);
  return (
    <div className="cart">
      <div className="cart-content">
        <h1>Your Bag({cartItems.length})</h1>
        <Link to="/" className="btn-1">
          &#8592; Continue Shopping
        </Link>
      </div>
      <div className="cart-row">
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <h2 className="cart-msg">Your Cart is Empty !</h2>
          ) : (
            <div>
              {cartItems.map((product) => (
                <div className="cart-col-1">
                  <div className="cart-left">
                    <div className="cart-image">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="cart-main-content">
                      <h4>Product: {product.name}</h4>
                      <h4>
                        Size:<span>{product.size}</span>
                      </h4>
                      {/* <h4>Desc: Nike Shoes</h4> */}
                      <h4>Price:${product.price}</h4>
                    </div>
                  </div>
                  <div className="cart-right">
                    <i
                      className="fa fa-plus"
                      onClick={() => increase(product)}
                    />
                    <span>Qty:{product.quantity}</span>
                    {product.quantity > 1 && (
                      <i
                        className="fa fa-minus"
                        onClick={() => decrease(product)}
                      />
                    )}
                    {product.quantity === 1 && (
                      <i
                        className="fa fa-trash"
                        onClick={() => removeFromCart(product)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          {checkout && (
            <div className="checkout-text">
              <h4>Thank you for your purchasing &#128522;</h4>
              <p>
                Your order has been placed and will be delivered to you within
                24 hours.
              </p>
              <Link to="/">
                <button type="submit" onClick={clearCart}>
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="cart-col-2">
          <h1>ORDER SUMMARY</h1>
          <div className="cart-info">
            <div>
              <h2>Total Item</h2>
              <h2 className="total">Total</h2>
            </div>
            <div>
              <h2>{itemCount}</h2>
              <h2 className="total">{total}$</h2>
            </div>
          </div>
          {cartItems.length > 0 && (
            <button type="submit" className="btn-3" onClick={handleCheckout}>
              CheckOut
            </button>
          )}
          <button type="submit" className="btn-3" onClick={clearCart}>
            ClearOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
