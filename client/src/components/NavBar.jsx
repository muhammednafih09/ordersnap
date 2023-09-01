import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light shadow-sm">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="logo" width={180} />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i class="fa-solid fa-cart-shopping text-dark"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
