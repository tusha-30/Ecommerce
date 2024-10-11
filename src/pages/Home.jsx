import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicies from '../components/OurPolicies'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicies/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
