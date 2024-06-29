import React from 'react'
import './checkout.css'
import img1 from './g92-2-500x500 1 (1).png'
import img2 from './Monitor-Cart-Small.png'
import img3 from './img3.png'
const Checkout = () => {
  return (
    <section className='checkout'>

      <div className='details'>
       <span>
       <a href="#">Account</a> /
        <a href="#">My Account</a> /
        <a href="#">Product</a>/
        <a href="#">View Cart</a>/
        <a href="#">CheckOut</a>
       </span>
        <h1>Billing Details</h1>
        <form className='checkout_form'>
         <span>First Name*</span>
         <input type="text" />
         <span>Company Name</span>
         <input type="text" />
        <span>Street Address*</span>
        <input type="text" />
        <span>Apartment, floor, etc. (optional)</span>
        <input type="text" />
        <span>Town/City*</span>
        <input type="text" />
        <span>Phone Number*</span>
        <input type="number"  />
        <span>Email Address*</span>
        <input type="email" />
        </form>
       <label htmlFor="#"> <input type="checkbox" /> Save this information for faster check-out next time</label>
      </div>
      <div className='media'>
        <div className='lcd'>
        <img src={img1} alt="" />
        <h2>LCD Monitor</h2>
        <h3>$650</h3>
        </div>
        <div className='gamepad'>
        <img src={img2} alt="" />
        <h2>H1 Gamepad</h2>
        <h3>$1100</h3>
        </div>
        <div className='subtotlar'>
         <div className='next'>
         <div>
          <h2>Subtotal:</h2>

          <h3>$1750</h3>
          </div>
          <hr />
          <div>
          <h2>Shipping:   </h2>

          <h3>Free</h3>
          </div>
          <hr />
          <div>
          <h2>Total:        </h2>
          <h3>$1750</h3>

          </div>
         </div>
          <label>
          <input type="radio"  name='payment' value="bank"/> Bank
          <img src={img3} alt="" />
        </label>
        <label>
        <input type="radio"  name='payment' value="bank"/> Cash on delivery

        </label>
        <input className='code' type="text"  placeholder='Coupon Code'/>
        <button className='btn1'>Apply Coupon</button>
        </div>
        <button className='btn2'>Order</button>
      </div>
    </section>
  )
}

export default Checkout
