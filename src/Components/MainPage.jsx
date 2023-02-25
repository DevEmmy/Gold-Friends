import React from 'react'
import Banner from './Banner'
import BottomBanner from './BottomBanner'
import Branches from './Branches'
import BriefAbout from './BriefAbout'
import Footer from './Footer'
import Nav from './Nav'

const MainPage = () => {
  return (
    <>
        <Nav />
        <Banner />
        <Branches />
        <BriefAbout />
        <BottomBanner />

        <Footer />
    </>
  )
}

export default MainPage