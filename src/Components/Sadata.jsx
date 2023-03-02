import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Nav from './Nav'
import Properties from './Properties'

const Sadata = () => {
  return (
    <>
        <Nav/>
        <Banner bigText={"Gold Friends - Sadata Homes & Gardens"} smallText={"Take the Next Step: Find Your Dream Home in Real Estate"} cta={<></>}/>
        <Properties />
        <Footer/>
    </>
  )
}

export default Sadata