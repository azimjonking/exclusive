import React from "react";
import "./flashSales.css";
import "./flashSalesData";
import flashSalesData from "./flashSalesData";

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
        <div className="flashSales-header-icons">
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="flashSales-products">
        {flashSalesData.map((product, index) => {
          return (
            <div key={index} className="flashSales-product">
              <div className="flashSales-product-overlay">
              <div className="flashSales-product-img">
                <img src={product.img} />
              </div>
              <div className="flashSales-product-text">
                <a href="#">Add to cart</a>
              </div>
              </div>
              <div className="flashSales-icons">
                <h5>{product.discount}</h5>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-eye"></i>
              </div>
              <div className="price">
                <h3>{product.name}</h3>
                <span className="newPrice">{product.newPrice}</span>
                <span className="oldPrice">{product.oldPrice}</span>
              </div>
              <div className="ratting">
                <i className={product.ratting}></i>
                <i className={product.ratting}></i>
                <i className={product.ratting}></i>
                <i className={product.ratting}></i>
                <i className={product.ratting}></i>
                <span className="ratting-numbers">{product.rattingNumbers}</span>
              </div>
              
            </div>
          );
        })}
      </div>
      <div className="flashSales-button">
      <a href="#" >View All Products</a>
      </div>
    </section>
  );
};

export default FlashSales;
