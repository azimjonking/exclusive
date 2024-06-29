import React from "react";
import "./flashSales.css";

const FlashSales = () => {
  return (
    <section className="flashSales">
      <div className="flashSales-title">
        <div className="red-box"></div>
        <div className="flashSales-text">Today's</div>
      </div>
      <div className="flashSales-header">
        <h1>Flash Sales</h1>
        <div className="time-content">
          <div className="time">
            <span className="text">days</span>
            <span className="number">
              32 <span>:</span>
            </span>
          </div>
          <div className="time hours">
            <span className="text">hours</span>
            <span className="number">
              10 <span>:</span>
            </span>
          </div>
          <div className="time minutes">
            <span className="text">minutes</span>
            <span className="number">
              60 <span>:</span>
            </span>
          </div>
          <div className="time seconds">
            <span className="text">seconds</span>
            <span className="number">45</span>
          </div>
        </div>
        <div className="flashSales-icons">
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="flashSales-products">
        <div className="flashSales-product">
          <div className="flashSales-product-img">
          <img
            src="https://www.pngall.com/wp-content/uploads/15/PS5-Controller.png"
            alt="controller"
          /></div>
          <div className="flashSales-product-text">
            <a href="#">Add to cart</a>
          </div>
          <div className="flashSales-icons">
            <h5>-40%</h5>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-eye"></i>
          </div>
          <div className="price">
            <h3>HAVIT HV-G92 Gamepad</h3>
            <span>$210</span>
          </div>
          <div className="ratting">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          
        </div>
        <div className="flashSales-product">
        <div className="flashSales-product-img">
          <img
            src="https://cherryxtrfy.com/wp/wp-content/uploads/2022/02/123.png"
            alt="keyboard"
          /></div>
          <div className="flashSales-product-text">
            <a href="#">Add to cart</a>
          </div>
          <div className="flashSales-icons">
            <h5>-35%</h5>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-eye"></i>
          </div>
          <div className="price">
            <h3>AK-900 Wired Keyboard</h3>
            <span>$960</span>
          </div>
          <div className="ratting">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          
        </div>
        <div className="flashSales-product">
        <div className="flashSales-product-img">
          <img
            src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-curve-screen-gaming-monitor-device-png-image_10206079.png"
            alt="tv"
          /></div>
          <div className="flashSales-product-text">
            <a href="#">Add to cart</a>
          </div>
          <div className="flashSales-icons">
            <h5>-30%</h5>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-eye"></i>
          </div>
          <div className="price">
            <h3>IPS LCD Gaming Monitor</h3>
            <span>$210</span>
          </div>
          <div className="ratting">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          
        </div>
        <div className="flashSales-product">
        <div className="flashSales-product-img">
          <img
            src="https://sminteriorstudio.com/wp-content/uploads/2021/08/catalog2.png"
            alt="chair"
          /></div>
          <div className="flashSales-product-text">
            <a href="#">Add to cart</a>
          </div>
          <div className="flashSales-icons">
            <h5>-25%</h5>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-eye"></i>
          </div>
          <div className="price">
            <h3>S-Series Comfort Chair</h3>
            <span>$375</span>
          </div>
          <div className="ratting">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
