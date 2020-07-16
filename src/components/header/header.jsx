import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="navbar navbar-light ">
      <Link className="logo" to="/">ReStore</Link>
      <Link className="cart" to="/cart">
        <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
        <span className="cart-label">5 items ($200)</span>
      </Link>
    </nav>
  </header>
);

export default Header;
