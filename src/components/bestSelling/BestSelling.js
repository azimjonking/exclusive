import React from 'react'
import './bestSelling.css'
import jacket from '../bestSelling/image/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1 (1).png'
import bag from './image/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'
import musicImg from './image/gammaxx-l240-argb-1-500x500 1.png'
import bookself from './image/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png'
import stars from './image/star-regular.svg'
const BestSelling = () => {
 
  const data =[
    {image:{jacket},title:"The Nort coat",cost:"$260",chegirma:"$360",icon:'/',id:(66)},
    {image:{bag},title:"Gucci duffle bag",cost:"$960",chegirma:"$1160",icon:'/',id:(65)},
    {image:{musicImg},title:"RGB liquid CPU Cooler",cost:"$160",icon:'/',id:(68)},
    {image:{bookself},title:"Small Bookself",cost:"$360",chegirma:"$360",icon:'/',id:(69)},
  ]
 

return (
  <div>
      <div className="Section_wrapper">
          <div className="container">
              <div className="section">
                  <div className="section_top">
                      <h1>Best Selling Products</h1>
                      <button>View All</button>
                  </div>

                  <div className="section_bottom container">
                     
                           {data.map((item) => {
                            return (
                                <div className="section_bottom_box" key={item.id}>
                                    <img src={item.image} alt="bu yerda rasm bor" />
                                    <h1>{item.title}</h1>
                                    <span>{item.cost}</span>
                                    <p>{item.chegirma}</p>
                                </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      </div>
  </div>
)  
}

export default BestSelling
