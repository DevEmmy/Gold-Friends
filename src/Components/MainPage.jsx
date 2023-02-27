import React, { useState } from 'react'
import Banner from './Banner'
import BottomBanner from './BottomBanner'
import Branches from './Branches'
import BriefAbout from './BriefAbout'
import Footer from './Footer'
import Nav from './Nav'
import useSound from 'use-sound';
import Contact from './Contact'
import Client from './Client'

const MainPage = () => {
    

  return (
    <div>
        <Nav />
        <Banner />
        <Branches />
        <BriefAbout />
        <Client />
        <BottomBanner />
        <Contact />

        <Footer />
    </div>
  )
}

export default MainPage