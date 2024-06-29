import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Exclusive</h1>
      <ul className="nav_links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className="nav_btn">
        <div className="nav_search">
          <input type="text" placeholder="What are you looking for?" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <Link>
          <i className="fa-regular fa-heart"></i>
        </Link>
        <Link>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
