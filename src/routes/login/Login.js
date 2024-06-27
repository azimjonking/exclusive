import React from 'react'
import './login.css'
import img1 from './login-img/dl.beatsnoop 1.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    
    <div className="login-section">
      <div className="login-img">
      <img src={img1} alt="login-img" />
      </div>
    <div className="login-form">
    <h1>Log in to Exclusive</h1>
    <h4>Enter your details below</h4>
    <form action="">
    <input className='email-input' type="email" placeholder='Email or Phone Number'/>
    <input className='password-input' type="password" placeholder='Password'/>
    <div className="register">
      <button className="login-btn">Log in</button>
      <Link className='reset-password' href='#'>Forgot Password?</Link>
    </div>
    </form>
    </div> 
    </div>
  )
}

export default Login
