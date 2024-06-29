import React from 'react'
import'./recommend.css'
import recommendImg from './Frame 694.png'

const Recommend = () => {
  return (
    <section className='recommend'>
      <h1 className='recommend-category'>Categories</h1>
       <div className='recommend-banner-text'>
      <h1 className='recommend-text'>Enhance Your Music Experience </h1>
       </div>

        <div className='recommend-life'>
          <div className='recommend-hours' > <span className='days'> 25 </span> Hours </div>
          <div className='recommend-hours' > <span className='days'> 05 </span> Days </div>
          <div className='recommend-hours' > <span className='days'> 59 </span> Minutes </div>
          <div className='recommend-hours' > <span className='days'> 35 </span> Seconds </div>
        </div>

        <button className='recommend-btn'>Buy Now!</button>


      <h1>Recommend</h1>
    </section>
  )
}

export default Recommend
