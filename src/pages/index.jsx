import MetaTags from '@/Components/MetaTags'
import MainPage from '@/Components/MainPage'

import { Fragment, useEffect } from 'react';

export default function Home() {
  
  // useEffect(()=>{
  //   // play()
  //   window.addEventListener("touch", ()=> {
  //     play()
  //     console.log("hey")
  //   })
    
  // }, [])
  
  return (
    <Fragment onScroll={()=> console.log("hey")}>
      <MetaTags />
      <MainPage />
      
    </Fragment>
  )
}
