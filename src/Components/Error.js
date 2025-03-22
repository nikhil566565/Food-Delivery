import React from 'react'
import Navbar from './Navbar/navbar'
import Footer from './Footer/footer'

function Error() {
  return (
    <>
      <Navbar />
      <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", fontSize: "4rem", fontWeight: "400" }}>404 Error</h1>
      {/* <h1 style={{ display: "flex" }}>404 Error</h1> */}
      <Footer />
    </>
  )
}

export default Error
