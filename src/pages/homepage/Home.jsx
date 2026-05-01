import React from 'react'
import Banner from './Banner'
import Catagories from './Catagories'
import Hero from './Hero'
import TrendingProduct from '../../shop/TrendingProduct'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Blog from '../blog/Blog'

const Home = () => {
  
  return (
    <div>
        <Banner/>
        <Catagories/>
        <Hero/>
        <TrendingProduct/>
        <DealsSection/>
        <PromoBanner/>
        <Blog/>
    </div>
  )
}

export default Home