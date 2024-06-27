import React from 'react'
import './signUp.css'
import { Link } from 'react-router-dom'
import img1 from  './signup-img/dl.beatsnoop 1.png'


const SignUp = () => {
  return (
    <div className='signup-section'>
      <img src={img1} alt="signup-img" />
    <div className="signup-form">
      <h1>Create an account</h1>
      <h4>Enter your details below</h4>
      <form action="">
        <input className='name-input' type="text" placeholder='Name'/>
        <input className='email-input' type='email' placeholder='Email or Phone Number'/>
        <input className='password-input' type='password' placeholder='Password'/>
        <button className='signup-btn'>Create Account</button>
        <button id='signup-google-icon' className='signup-google-btn'><i class="fa-brands fa-google"></i>Sign Up With Google</button>
        <div className="login-link">
          <span>Already have account?</span> <Link to='' href='#' className='login'>Log in</Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignUp
