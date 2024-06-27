import React from 'react'
import './statistics.css'
import statisticsImg1 from './Services.png'
import statisticsImg2 from './Services (1).png'
import statisticsImg3 from './Services (2).png'
import statisticsImg4 from './Services (3).png'

const Statistics = () => {
  return (
    <section className='statistics'>

      <div className="statistics-card">

        <div className="statistics-img">
          <img src={statisticsImg1} alt="statisticsImg1" />
        </div>

        <div className="statistics-text">
          <h1>10.5k</h1>
          <p>Sallers active our site</p>
        </div>
      </div>
      
      <div className="statistics-hover-card">

        <div className="statistics-img">
          <img src={statisticsImg2} alt="statisticsImg2" />
        </div>

        <div className="statistics-hover">
          <h1>33k</h1>
          <p>Mopnthly Produduct Sale</p>
        </div>
      </div>

      <div className="statistics-card">

        <div className="statistics-img">
          <img src={statisticsImg3} alt="statisticsImg3" />
        </div>

        <div className="statistics-text">
          <h1>45.5k</h1>
          <p>Customer active in our site</p>
        </div>
      </div>

      <div className="statistics-card">

        <div className="statistics-img">
          <img src={statisticsImg4} alt="statisticsImg4" />
        </div>

        <div className="statistics-text">
          <h1>25k</h1>
          <p>Anual gross sale in our site</p>
        </div>
      </div>



    </section>
  )
}

export default Statistics
