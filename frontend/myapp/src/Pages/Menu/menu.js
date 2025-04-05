import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import Foodcard from '../../Components/Fooditem/foodcard'

function restaurants() {
  return (
    <>
        <Navbar/>
        <Foodcard/>
        <Footer/>
    </>
  )
}

export default restaurants
