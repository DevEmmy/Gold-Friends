import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
import { HiLocationMarker, HiPhone } from 'react-icons/hi'
import styled from 'styled-components'
import { details } from 'utilities/details'
import Link from 'next/link'

const Footer = () => {

  const socialMedia = [
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/goldfriendstravelsandtour/"
    },
    {
      title: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/OFFICIALGOLDFRIENDS"
    },
    {
      title: "TikTok",
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@goldfriends23"
    },
    {
      title: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/goldfriends16"
    }
  ]
  return (
    <FooterContainer id="footer">
        <div className="left">
            <div className="logo">
                GoldFriends
            </div>
            <div className="slogan">
            Your travel and housing goals are within reach. Our team of experts is here to make it happen. Contact us today to start living your best life.    
            </div>
        </div>

        <div className="right">
            {/* <div>Address : {details.address}</div> */}
            <div className='addresses'>
                <h3>Addresses</h3>
                {
                    details.address.map((a, i)=>{
                        return(
                          <div key={i}>
                            <p className="address">
                                <HiLocationMarker />
                                {a.title}
                            </p>
                            <div className='contact'>
                              <HiPhone />{
                                a.contacts.map((contact, i) => {
                                  return(
                                    <p>
                                      {contact}
                                    </p>
                                  )
                                })
                              }
                            </div>
                          </div>
                            
                        )
                    })
                }
            </div>
            {/* <div>Contact <HiPhone /> : 0907823236, 0902236237</div> */}
            <div className="socials">
                {
                  socialMedia.map((social, i)=>{
                    return(
                      <Link key={i} href={social.link}>
                        <div>
                          {social.icon}
                        </div>
                      </Link>
                    )
                  })
                }
            </div>
        </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
display: grid;
align-items: flex-start;
justify-content: space-between;
background-color: #000;
padding: 80px;
color: white;
grid-template-columns: 1fr 1fr;
margin-top: 100px;
.addresses{
  display: grid;
  gap: 10px;
}
.left {
  .logo {
    font-size: 40px;
    font-weight: 900;
    padding: 0 0 10px 0;
    color: #b18641;
  }
  .slogan {
    width: 80%;
  }
}

div.contact{
  display: flex;
  gap: 10px;
  padding: 3px 0;
  align-items: center;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .socials {
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #b18641;
    font-size: 20px;
    div {
      border: 2px solid #b18641;
      padding: 10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 700px) {
  grid-template-columns: none;
  padding: 30px;
  gap: 30px;
}
`;

export default Footer