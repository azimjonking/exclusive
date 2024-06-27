import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import qrImg from "../assets/footer/footerQRcode.png";
import googleStImg from "../assets/footer/GooglePlay.png";
import appStImg from "../assets/footer/AppStore.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_email_address">
        <h1>Ecxlusive</h1>
        <h3>Subscribe</h3>
        <span>Get 10% off your first order</span>
        <form className="footer_form">
          <input type="text" placeholder="Enter your email" />
          <button>
            <i class="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <div className="footer_support">
        <h1>Support</h1>
        <span>
          111 Bijoy sarani, Dhaka,
          <br /> DH 1515, Bangladesh.
        </span>
        <span>exclusive@gmail.com</span>
        <span>+88015-88888-9999</span>
      </div>
      <div className="footer_account">
        <h1>Account</h1>
        <ul>
          <li>
            <Link to="/myaccount">My Account</Link>
          </li>
          <li>
            <Link to="/login">Login / Register</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <div className="footer_links">
        <h1>Quick Link</h1>
        <ul>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms Of Use</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer_apps">
        <h1>Download App</h1>
        <span>Save $3 with App New User Only</span>
        <div className="footer_app_pay">
          <div className="qr_img">
            <img src={qrImg} alt="" />
          </div>
          <div className="btn_pay">
            <Link to="/google.store">
              <img src={googleStImg} alt="" />
            </Link>
            <Link to="/app.store">
              <img src={appStImg} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer_application">
          <Link to="/facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link to="/twitter">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="/instagram">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="/linkedin">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
