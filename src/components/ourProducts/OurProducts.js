import { useState } from 'react'
import ProductsData from './OurProductsData'
import './ourProducts.css'



 

const OurProducts = () => {
    return (
        <section className='ourProducts'>
      <div className="ourProducts-navbar">
        <div className="top">
            <div></div>
            <span>Our Products</span>
        </div>
        <div className="title">
            <h1>Explore Our Products</h1>
            <div className="icons">
                <div className="left">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div className="right">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
      </div>
      <div className="container" >
        {ProductsData.map((item, index) =>{
            return (
                <div className="ourProducts-container">
                    <div className="img">
                        <img src={item.image} alt="" key={index}/>
                        <div className="like">
                            <i class="fa-regular fa-heart"></i>

                        </div>
                        <div className="eye">
                            <i class="fa-regular fa-eye"></i>
                        </div>
                        <p className="new" key={index}>{item.isNew}</p>
                        
                        <button>Add To Cart</button>
                    </div>
                        <div className="info">
                            <h1 key={index}>{item.title}</h1>
                            <div className="cost-stars">
                                <p key={index}>{item.cost}</p>
                                <img src={item.star} alt="" key={index} />
                                <span key={index}>{item.like}</span>
                            </div>
                            <div className="colors">
                              <div className="color1">
                                <div className="color"></div>
                              </div>
                              <div className="color2">
                                <div className="color"></div>
                              </div>
                            </div>
                        </div>
                </div>
            )
        })}
      </div>
    </section>
    )
}

export default OurProducts
