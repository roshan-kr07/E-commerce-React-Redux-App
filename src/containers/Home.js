import React from 'react'
import ProductListing from './ProductListing'
import Hero from './Hero/Hero'
import Popular from './Popular/Popular'
import NewCollections from './NewCollections/NewCollections'
import NewsLetter from './EmailAlert/NewsLetter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <ProductListing/>
        <Popular/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Home