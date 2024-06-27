import React from 'react'
import './teammates.css'
import teammatesImg1 from './Frame 874.png'
import teammatesImg2 from './Frame 875.png'
import teammatesImg3 from './Frame 876.png'
const Teammates = () => {
  return (
    <section className='teammates'>

      <div className="teammates-card">

      <div className="teammates-img">
        <img src={teammatesImg1} alt="teammatesImg1" />
      </div>

      <div className="teammates-text">
        <h1>Tom Cruise</h1>
        <p>Founder & Chairman</p>
          <div className="teammates-icon">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>

      </div>

      <div className="teammates-card">

      <div className="teammates-img">
        <img src={teammatesImg2} alt="teammatesImg2" />
      </div>

      <div className="teammates-text">
        <h1>Emma Watson</h1>
        <p>Managing Director</p>
        <div className="teammates-icon">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>

      </div>

      <div className="teammates-card">

      <div className="teammates-img">
        <img src={teammatesImg3} alt="teammatesImg3" />
      </div>

      <div className="teammates-text">
        <h1>Will Smith</h1>
        <p>Product Designer</p>
        <div className="teammates-icon">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>

      </div>


    </section>
  )
}

export default Teammates
