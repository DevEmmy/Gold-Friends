import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Nav from './Nav'
import Properties from './Properties'

const Sadata = () => {
  return (
    <>
        <Nav/>
        <Banner img={"https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?w=740&t=st=1678863234~exp=1678863834~hmac=062dcaff6187c82d557033793c3d84e67202724a5137a522e1668aaebfb998b0"} bigText={"Gold Friends - Sadata Homes & Gardens"} smallText={"Take the Next Step: Find Your Dream Home in Real Estate"} cta={<></>}/>
        <Properties />
        <Footer/>
    </>
  )
}

export default Sadata