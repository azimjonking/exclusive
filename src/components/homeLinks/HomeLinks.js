import { NavLink } from "react-router-dom";
import "./homeLinks.css";

function HomeLinks() {
  return (
    <div className="home-links">
      <ul>
        <li>
          <NavLink to="/womenfashion">Women's Fashion</NavLink>{" "}
          <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          <NavLink to="menfashion">Men's Fashion</NavLink>{" "}
          <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li>
          <NavLink to="/electronic">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/homelife">Home & Lifestyle</NavLink>
        </li>
        <li>
          <NavLink to="/medicine">Medicine</NavLink>
        </li>
        <li>
          <NavLink to="/sportoutdor">Sports & Outdoor</NavLink>
        </li>
        <li>
          <NavLink to="/babytoys">Baby’s & Toys</NavLink>
        </li>
        <li>
          <NavLink to="groceries">Groceries & Pets</NavLink>
        </li>
        <li>
          <NavLink to="healthbeauty">Health & Beauty</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomeLinks;
