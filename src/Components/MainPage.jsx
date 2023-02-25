import React, { useState } from 'react'
import Banner from './Banner'
import BottomBanner from './BottomBanner'
import Branches from './Branches'
import BriefAbout from './BriefAbout'
import Footer from './Footer'
import Nav from './Nav'
import useSound from 'use-sound';

const MainPage = () => {
    const [play] = useSound("https://res.cloudinary.com/devemmy/video/upload/v1677340013/yt1s.com_-_Ayra_Starr_Rush_Official_Music_Video_lprrvz.mp3");

    const [playing, setPlaying] = useState(false)

    const startPlaying = ()=>{
        if(!playing){
            play()
            console.log("play")
            setPlaying(true)
        }
        // play()
    }

  return (
    <div onClick={startPlaying} onTouchStart={startPlaying} onLoadStart={startPlaying}>
        <Nav />
        <Banner />
        <Branches />
        <BriefAbout />
        <BottomBanner />

        <Footer />
    </div>
  )
}

export default MainPage