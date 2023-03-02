import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import useSound from 'use-sound';


export default function App({ Component, pageProps }) {
  const [play] = useSound("https://res.cloudinary.com/devemmy/video/upload/v1677720683/yt1s.com_-_Awakening_f7ixky.mp3");

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
    <Component {...pageProps}  />
  <ToastContainer />
    </div>
  )
}
