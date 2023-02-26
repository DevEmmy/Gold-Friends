import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi';
// import Footer from '../../Components/Footer';
import Nav from './Nav';
// import { Banner, Details } from '../../Components/Styled';
import {data} from "./data"
import Banner from './Banner';
import Footer from './Footer';
import styled from 'styled-components';

const Property = ({property}) => {
    
    // console.log(property)

  return (
    <>
      <Nav/>
      <Banner />

      <Details>
        <div className="description">
          <h2>Description</h2>
          <p>
            {property?.details}
          </p>
        </div>

        <div className="media">
            <h2>Images</h2>

            <div className="images">
                {
                property?.images.map((img, i)=>{
                    return(
                        <img src={img} alt="" key={i}/>
                    )
                })
            }
            </div>
            
        </div>

        <div className="media">
            <h2>Videos</h2>

            <div className="images">
                {
                property?.videos.map((video, i)=>{
                    return(
                        <video src={video} controls={true} alt="" key={i}/>
                    )
                })
            }
            </div>
            
        </div>
        <p className="location">
          <HiLocationMarker />
          Ikorodu, Lagos.
        </p>

        <div className="request">
          <h2>Make a Request for Property</h2>
          <form action="">
            <input type="text" placeholder="John Doe" />
            <input type="email" placeholder="johndoe@gmail.com" />
            <input type="tel" placeholder="090239239" />
            <textarea
              placeholder="Message"
              value={`
                  Hi, I am interested in ${property?.title}
                `}
            />

            <div className="submit">Submit</div>
          </form>
        </div>
      </Details>

      <Footer />
    </>
  )
}

export const Details = styled.div`
  width: 80%;
  margin: 30px auto;
  .media{
    padding: 20px 0;
  }
  .images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    img, video{
      width: 100%;
      height: 200px;
    }
    @media (max-width: 700px){
      grid-template-columns: none;
    }
  }
  @media (max-width: 700px){
    width: 90%;      
  }
  .location {
    padding: 10px 0;
  }
  .request {
    width: 50%;
    margin: 50px 0;
    @media (max-width: 700px){
      width: 100%;
          
    }
    .submit {
      text-align: center;
      background-color: black;
      color: white;
      padding: 13px 20px;
      border-radius: 6px;
      cursor: pointer;
    }
    form {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        padding: 12px;
      }
      textarea {
        height: 100px;
        resize: none;
        padding: 10px;
        
      }
    }
  }
`;

export default Property