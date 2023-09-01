import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-light shadow">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="logo" width={170} />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Orders
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="cart-icon nav-link mx-3" to="/">
              <i class="fa-solid fa-cart-shopping text-dark fs-4"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
