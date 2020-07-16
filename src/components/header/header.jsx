import React from 'react';

const Header = () => (
  <header className="header">
    <nav className="navbar navbar-light ">
      <a className="logo" href="#">ReStore</a>
      <a className="cart" href="#">
        <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
        <span className="cart-label">5 items ($200)</span>
      </a>
    </nav>
  </header>
);

export default Header;
