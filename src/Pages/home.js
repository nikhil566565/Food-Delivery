import React from 'react'

import Navbar from '../Components/Navbar/navbar'
import HeroSection from '../Components/HeroSection/heroSection'
import CategoriesSection from '../Components/CategoriesSection/Categories'
import Promotion from '../Components/PromotionSection/promotion'
import Rating from '../Components/Rating/rating'
import Reviews from '../Components/Reviews/reviews'
import Footer from '../Components/Footer/footer'
import Login from '../Components/Login/login'

function Home() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CategoriesSection/>
        <Promotion/>
        <Rating/>
        <Reviews/>
        <Footer/>
    </>
  )
}

export default Home
