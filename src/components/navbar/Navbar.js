import React, { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav>
      <h1>Exclusive</h1>
      <ul className="nav_links">
        <li>
          <Link
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className={activeLink === "/signup" ? "active" : ""}
            onClick={() => handleLinkClick("/signup")}
          >
            Sign Up
          </Link>
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
