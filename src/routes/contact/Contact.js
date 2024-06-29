import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className='contact'>
        <p>Home  <span>/</span>  <span className='con'>Contact</span></p>

        <div className='wrapper'>
          <div className='left-wrap'>
            <div className='call'>
              <div className='btn'>
            <div className='span'> <i class="fa-solid fa-phone"></i></div> <br/> <br/>
              </div>
            <p>We are available 24/7, 7 days a week.</p> <br/> <br/>

            <p>Phone: +8801611112222</p> <br/> <br/>
            <hr></hr> <br/> <br/>
            <button> <i class="fa-regular fa-envelope"></i></button> <br/> <br/>
            <p>Fill out our form and we will contact <br/> you within 24 hours.</p> <br/> <br/>
            <p>Emails: customer@exclusive.com</p> <br/> 
            <p>Emails: support@exclusive.com</p>
            </div>
          </div>

        <div className='right-wrap'>
          <div className='trio'>
            <input type='text' placeholder='Your Name *'/>
            <input type='text' placeholder='Your Email *'/>
            <input type='text' placeholder='Your Phone *'/>
          </div>
          <textarea placeholder='Your Massage'></textarea>
          <button>Send Massage</button>
        </div>
        </div>


    </section>
  )
}

export default Contact
