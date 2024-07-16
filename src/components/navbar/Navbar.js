import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileBtnClick = () => {
    setIsMobile(!isMobile);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobile(false);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav>
      <Link className="nav_logo" to="/" onClick={() => handleLinkClick("/")}>
        Exclusive
      </Link>
      <ul className={isMobile ? "nav_links active" : "nav_links"}>
        <button className="close-menu" onClick={handleMobileBtnClick}><i className="fa-solid fa-xmark"></i></button>
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
        <button className="mobile_btn" onClick={handleMobileBtnClick}>
          <i className={isMobile ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
