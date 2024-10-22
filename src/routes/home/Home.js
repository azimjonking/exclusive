import React from 'react'
import './home.css'
import FlashSales from '../../components/flashSales/FlashSales'
import Categories from '../../components/categories/Categories'
import BestSelling from '../../components/bestSelling/BestSelling'
import Recommend from '../../components/recommend/Recommend'
import OurProducts from '../../components/ourProducts/OurProducts'
import Featured from '../../components/featured/Featured'
import Service from '../../components/service/Service'

const Home = () => {
  return (
    <div>
      <FlashSales />
      <Categories />
      <BestSelling />
      <Recommend />
      <OurProducts />
      <Featured />
      <Service />
    </div>
  )
}

export default Home
