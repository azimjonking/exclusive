import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className="header_offer">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link to='/'>ShopNow</Link>
        </div>
          <select className="header_select">
            <option value="english">English</option>
            <option value="russia">Russia</option>
            <option value="uzbekistan">Uzbekistan</option>
          </select>
    </header>
  );
};

export default Header;
