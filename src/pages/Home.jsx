import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsettlerBox from '../components/NewsettlerBox'

function Home() {
  return (
    <div>
      
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsettlerBox />
      
    </div>
  )
}

export default Home