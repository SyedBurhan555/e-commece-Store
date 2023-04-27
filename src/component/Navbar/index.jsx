import React, { useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../assest/Font-Vans-Logo.jpg";
import CartContext from "../Context/Cart/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  function open() {
    document.getElementById("menu").style.width = "100%";
  }
  function close() {
    document.getElementById("menu").style.width = "0";
  }
  // function scrollToTop() {
  //   window.scrollTo(0, 0);
  // }
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" className="logo-icon" />
        <Link to="/cart" className="cart-icon  display">
          <i className="far fa-shopping-cart" />
          <span className="mobile-view">{cartItems.length}</span>
        </Link>
        <span className="icon" onClick={open}>
          &#9776;
        </span>
      </div>
      <div className="search">
        <i className="fa fa-search" />
        <input type="search" title="Search" placeholder="search..." />
      </div>
      <ul id="menu">
        <span className="closebtn" onClick={close}>
          x
        </span>
        <li>
          Rest of Europe <i className="fas fa-arrow-down" />
        </li>
        <li>
          Store location <i className="fas fa-map-marker-alt" />
        </li>
        <li>
          Help <i className="far fa-map-marker-question" />
        </li>
        <li>
          Login <i className="fas fa-lock" />
        </li>
        <li>
          Register <i className="fas fa-user-check" />
        </li>
        <span className="line" />
        <Link to="/cart" className="cart-icon">
          <i className="far fa-shopping-cart" />
          <span className="cart-item">{cartItems.length}</span>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
